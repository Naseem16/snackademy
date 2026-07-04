import type { Certification, Domain, Chapter, Section, Card } from './types'
import { awsAiPractitioner } from './certifications/aws-ai-practitioner'
import { awsSolutionsArchitect } from './certifications/aws-solutions-architect'
import { awsDeveloperAssociate } from './certifications/aws-developer-associate'
import { awsCloudPractitioner } from './certifications/aws-cloud-practitioner'
import { javascript } from './certifications/javascript'
import { reactjs } from './certifications/reactjs'
import { terraform } from './certifications/terraform'
import { docker } from './certifications/docker'
import { kubernetes } from './certifications/kubernetes'

export const certifications: Certification[] = [
  awsCloudPractitioner,
  awsAiPractitioner,
  awsDeveloperAssociate,
  awsSolutionsArchitect,
  javascript,
  reactjs,
  terraform,
  docker,
  kubernetes,
]

// ── Home navigation tree ────────────────────────────────────────────────
// Two categories → groups (providers / disciplines) → courses. GCP & Azure
// are shown as "coming soon" groups until content is authored for them.
export interface NavGroup {
  id: string
  title: string
  subtitle: string
  icon: string
  available: boolean
  /** courses in this group, in display order */
  certIds: string[]
  /** cert providers get practice exams */
  hasPracticeExams?: boolean
}

export interface NavCategory {
  id: string
  title: string
  subtitle: string
  icon: string
  gradient: string
  groups: NavGroup[]
}

export const navCategories: NavCategory[] = [
  {
    id: 'certifications',
    title: 'Certifications',
    subtitle: 'Pass the exam, earn the badge',
    icon: '🎓',
    gradient: 'from-orange-500 to-amber-600',
    groups: [
      {
        id: 'aws',
        title: 'Amazon Web Services',
        subtitle: 'AWS certifications',
        icon: '🟧',
        available: true,
        certIds: [
          'aws-cloud-practitioner',
          'aws-ai-practitioner',
          'aws-developer-associate',
          'aws-solutions-architect',
        ],
        hasPracticeExams: true,
      },
      {
        id: 'gcp',
        title: 'Google Cloud',
        subtitle: 'GCP certifications',
        icon: '🔵',
        available: false,
        certIds: [],
      },
      {
        id: 'azure',
        title: 'Microsoft Azure',
        subtitle: 'Azure certifications',
        icon: '🟦',
        available: false,
        certIds: [],
      },
    ],
  },
  {
    id: 'developer',
    title: 'Developer Learning Paths',
    subtitle: 'Master languages & tools',
    icon: '💻',
    gradient: 'from-sky-500 to-indigo-600',
    groups: [
      {
        id: 'languages',
        title: 'Languages & Frameworks',
        subtitle: 'JavaScript, React',
        icon: '🧩',
        available: true,
        certIds: ['javascript', 'reactjs'],
      },
      {
        id: 'devops',
        title: 'DevOps',
        subtitle: 'Terraform, Docker, Kubernetes',
        icon: '🛠️',
        available: true,
        certIds: ['terraform', 'docker', 'kubernetes'],
      },
    ],
  },
]

export function getCategory(id: string | undefined): NavCategory | undefined {
  return navCategories.find((c) => c.id === id)
}

export function getGroup(id: string | undefined):
  | { category: NavCategory; group: NavGroup }
  | undefined {
  for (const category of navCategories)
    for (const group of category.groups)
      if (group.id === id) return { category, group }
  return undefined
}

export function getCertification(id: string | undefined): Certification | undefined {
  return certifications.find((c) => c.id === id)
}

/** Find the nav group (and category) that contains a given course. */
export function getGroupForCert(certId: string):
  | { category: NavCategory; group: NavGroup }
  | undefined {
  for (const category of navCategories)
    for (const group of category.groups)
      if (group.certIds.includes(certId)) return { category, group }
  return undefined
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
