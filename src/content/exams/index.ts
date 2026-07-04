import type { PracticeExam } from '../types'
import { awsAiPractitionerExams } from './aws-ai-practitioner'
import { awsSolutionsArchitectExams } from './aws-solutions-architect'
import { awsDeveloperAssociateExams } from './aws-developer-associate'
import { awsCloudPractitionerExams } from './aws-cloud-practitioner'

// Practice exams live separately from course content so they can be added to
// any certification without touching its (large) content module.
export const examsByCert: Record<string, PracticeExam[]> = {
  'aws-ai-practitioner': awsAiPractitionerExams,
  'aws-solutions-architect': awsSolutionsArchitectExams,
  'aws-developer-associate': awsDeveloperAssociateExams,
  'aws-cloud-practitioner': awsCloudPractitionerExams,
}

export function getExams(certId: string): PracticeExam[] {
  return examsByCert[certId] ?? []
}

export function getExam(certId: string, examId: string): PracticeExam | undefined {
  return getExams(certId).find((e) => e.id === examId)
}

export function totalQuestions(exam: PracticeExam): number {
  return exam.questions.length
}
