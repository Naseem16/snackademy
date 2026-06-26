import type { Certification, Domain, Chapter, Section, Card } from './types'
import { awsAiPractitioner } from './certifications/aws-ai-practitioner'
import { awsSolutionsArchitect } from './certifications/aws-solutions-architect'

// ── "Coming soon" certifications ──────────────────────────────────────────
// Future certs are added here. Set available:false and leave domains empty to
// render a teaser card. To launch one, author a module like the two above and
// flip `available` to true.
const comingSoon: Certification[] = [
  {
    id: 'aws-developer-associate',
    code: 'DVA-C02',
    title: 'AWS Certified Developer – Associate',
    shortTitle: 'Developer',
    provider: 'AWS',
    level: 'Associate',
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🧑‍💻',
    tagline: 'Build & deploy on AWS',
    description:
      'Develop, deploy, and debug cloud-based applications using AWS. Coming soon!',
    examFacts: [],
    version: '—',
    lastUpdated: '2025-01-15',
    available: false,
    domains: [],
  },
  {
    id: 'aws-cloud-practitioner',
    code: 'CLF-C02',
    title: 'AWS Certified Cloud Practitioner',
    shortTitle: 'Cloud Practitioner',
    provider: 'AWS',
    level: 'Foundational',
    gradient: 'from-fuchsia-500 to-purple-600',
    icon: '☁️',
    tagline: 'Your first AWS cert',
    description:
      'Foundational understanding of AWS Cloud concepts, services, and terminology. Coming soon!',
    examFacts: [],
    version: '—',
    lastUpdated: '2025-01-15',
    available: false,
    domains: [],
  },
]

export const certifications: Certification[] = [
  awsAiPractitioner,
  awsSolutionsArchitect,
  ...comingSoon,
]

export function getCertification(id: string | undefined): Certification | undefined {
  return certifications.find((c) => c.id === id)
}

export function getDomain(cert: Certification, domainId: string): Domain | undefined {
  return cert.domains.find((d) => d.id === domainId)
}

export function getChapter(domain: Domain, chapterId: string): Chapter | undefined {
  return domain.chapters.find((c) => c.id === chapterId)
}

export function getSection(cert: Certification, sectionId: string):
  | { domain: Domain; chapter: Chapter; section: Section }
  | undefined {
  for (const domain of cert.domains)
    for (const chapter of domain.chapters)
      for (const section of chapter.sections)
        if (section.id === sectionId) return { domain, chapter, section }
  return undefined
}

/** Ordered list of all sections in a cert (reading order). */
export function flattenSections(cert: Certification): {
  domain: Domain
  chapter: Chapter
  section: Section
}[] {
  const out: { domain: Domain; chapter: Chapter; section: Section }[] = []
  for (const domain of cert.domains)
    for (const chapter of domain.chapters)
      for (const section of chapter.sections) out.push({ domain, chapter, section })
  return out
}

export type { Certification, Domain, Chapter, Section, Card }
