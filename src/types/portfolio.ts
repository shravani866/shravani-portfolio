export interface Project {
  id: string
  projectNumber?: string
  title: string
  subtitle: string
  period: string
  badge: string
  stack: string[]
  shortDescription: string
  problemStatement: string
  solution: string
  architectureDetails: string[]
  metrics: { label: string; value: string }[]
  keyFeatures: string[]
  myContribution?: string
  imageUrl?: string
  githubUrl: string
  category: 'cloud' | 'iot' | 'ai' | 'systems'
  highlights: string[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  track: string
  period: string
  location: string
  type: 'experience' | 'education' | 'milestone'
  highlights: string[]
  badge?: string
  skills?: string[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  badgeText: string
  skills: string[]
  description: string
}

export interface SkillCategory {
  category: string
  description: string
  skills: {
    name: string
    highlight: string
    isFeatured?: boolean
  }[]
}
