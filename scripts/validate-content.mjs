// Runtime content-integrity check. Bundles the TS content with esbuild (already
// installed via vite) then asserts invariants the type system can't enforce.
import { build } from 'esbuild'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tmp = join(root, '.content-check')
mkdirSync(tmp, { recursive: true })
const outfile = join(tmp, 'content.mjs')

await build({
  entryPoints: [join(root, 'src/content/index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  logLevel: 'error',
})

const { certifications } = await import(pathToFileURL(outfile).href)

const errors = []
const warnings = []
const DIAGRAM_TYPES = ['flow', 'stack', 'pyramid', 'cycle', 'quadrant', 'compare']
const CARD_KINDS = ['concept', 'analogy', 'example', 'diagram', 'tip', 'compare', 'quiz']

let totalCards = 0
let totalQuizzes = 0

for (const cert of certifications) {
  if (!cert.available) continue
  const cardIds = new Set()
  const sectionIds = new Set()
  let certCards = 0

  for (const domain of cert.domains) {
    for (const chapter of domain.chapters) {
      for (const section of chapter.sections) {
        if (sectionIds.has(section.id))
          errors.push(`[${cert.id}] duplicate section id: ${section.id}`)
        sectionIds.add(section.id)
        if (section.cards.length < 1)
          errors.push(`[${cert.id}] empty section: ${section.id}`)

        for (const card of section.cards) {
          certCards++
          totalCards++
          if (cardIds.has(card.id))
            errors.push(`[${cert.id}] duplicate card id: ${card.id}`)
          cardIds.add(card.id)

          if (!CARD_KINDS.includes(card.kind))
            errors.push(`[${cert.id}/${card.id}] invalid kind: ${card.kind}`)

          if (card.kind === 'quiz') {
            totalQuizzes++
            const opts = card.options ?? []
            const correct = opts.filter((o) => o.correct).length
            if (!card.question)
              errors.push(`[${cert.id}/${card.id}] quiz missing question`)
            if (opts.length < 2)
              errors.push(`[${cert.id}/${card.id}] quiz needs >=2 options`)
            if (correct !== 1)
              errors.push(
                `[${cert.id}/${card.id}] quiz must have exactly 1 correct option (has ${correct})`,
              )
            const optIds = new Set(opts.map((o) => o.id))
            if (optIds.size !== opts.length)
              errors.push(`[${cert.id}/${card.id}] quiz has duplicate option ids`)
            if (!card.explanation)
              warnings.push(`[${cert.id}/${card.id}] quiz missing explanation`)
          } else if (card.kind === 'diagram') {
            if (!card.diagram) errors.push(`[${cert.id}/${card.id}] diagram card has no diagram`)
            else if (!DIAGRAM_TYPES.includes(card.diagram.type))
              errors.push(`[${cert.id}/${card.id}] bad diagram type: ${card.diagram.type}`)
            else {
              const d = card.diagram
              if (d.type === 'quadrant') {
                if (!d.axes || !d.points)
                  errors.push(`[${cert.id}/${card.id}] quadrant needs axes+points`)
                for (const p of d.points ?? [])
                  if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1)
                    errors.push(`[${cert.id}/${card.id}] quadrant point out of 0..1`)
              } else if (d.type === 'compare') {
                if (!d.columns || d.columns.length < 2)
                  errors.push(`[${cert.id}/${card.id}] compare diagram needs >=2 columns`)
              } else if (!d.nodes || d.nodes.length < 2) {
                errors.push(`[${cert.id}/${card.id}] ${d.type} diagram needs >=2 nodes`)
              }
            }
          } else if (card.kind === 'compare') {
            if (!card.compare || !card.compare.headers || !card.compare.rows)
              warnings.push(`[${cert.id}/${card.id}] compare card missing table`)
          } else {
            if (!card.body || card.body.trim().length < 10)
              warnings.push(`[${cert.id}/${card.id}] ${card.kind} card has little/no body`)
          }
        }
      }
    }
  }
  console.log(
    `✓ ${cert.shortTitle.padEnd(20)} ${cert.domains.length} domains · ${certCards} cards`,
  )
}

rmSync(tmp, { recursive: true, force: true })

console.log(`\nTotals: ${totalCards} cards, ${totalQuizzes} quizzes`)
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`)
  for (const w of warnings.slice(0, 20)) console.log('  ' + w)
  if (warnings.length > 20) console.log(`  …and ${warnings.length - 20} more`)
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} ERROR(s):`)
  for (const e of errors) console.error('  ' + e)
  process.exit(1)
}
console.log('\n✅ Content integrity OK')

// Write the temp content file path so it's clear it was cleaned up
writeFileSync(join(root, '.content-check.last'), `validated ${totalCards} cards\n`)
rmSync(join(root, '.content-check.last'))
