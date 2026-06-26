// Minimal, safe markdown renderer for card bodies.
// Supports: paragraphs (blank-line separated), "- " bullet lists,
// **bold**, and `inline code`. No raw HTML is ever injected.

function renderInline(text: string, keyPrefix: string) {
  // Split on **bold** and `code` while keeping delimiters.
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return tokens.map((tok, i) => {
    const key = `${keyPrefix}-${i}`
    if (tok.startsWith('**') && tok.endsWith('**'))
      return <strong key={key}>{tok.slice(2, -2)}</strong>
    if (tok.startsWith('`') && tok.endsWith('`'))
      return <code key={key}>{tok.slice(1, -1)}</code>
    return <span key={key}>{tok}</span>
  })
}

export default function MarkdownLite({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\s*\n/)
  return (
    <div className="prose-card">
      {blocks.map((block, bi) => {
        const lines = block.split('\n')
        const isList = lines.every((l) => l.trim().startsWith('- '))
        if (isList) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>
                  <span className="mt-1 text-brand-400">•</span>
                  <span>{renderInline(l.trim().slice(2), `${bi}-${li}`)}</span>
                </li>
              ))}
            </ul>
          )
        }
        return <p key={bi}>{renderInline(block, `${bi}`)}</p>
      })}
    </div>
  )
}
