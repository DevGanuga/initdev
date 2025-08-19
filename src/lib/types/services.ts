// Service Types and Interfaces

export type ServiceCategory = 'core' | 'advanced';
export type TechnologyProficiency = 1 | 2 | 3; // 1=familiar, 2=proficient, 3=expert

export interface Technology {
  name: string;
  logo?: string;
  proficiency: TechnologyProficiency;
  category: TechCategory;
}

export type TechCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'ai-ml'
  | 'devops'
  | 'security'
  | 'data'
  | 'mobile';

export interface ServiceFeature {
  title: string;
  description?: string;
  included: boolean;
}

export interface ServiceCard {
  id: string;
  category: ServiceCategory;
  icon: string; // Using emoji or lucide icon name
  iconBg: string; // Tailwind color class
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: Technology[];
  caseStudyId?: string;
  estimatedTimeline: string;
  startingPrice?: string;
  popular?: boolean;
  comingSoon?: boolean;
}

export interface TechStackItem {
  id: string;
  name: string;
  category: TechCategory;
  logo?: string;
  description: string;
  proficiency: TechnologyProficiency;
  yearsExperience: number;
  projectsCount: number;
  featured?: boolean;
}

export interface ServiceFilter {
  category?: ServiceCategory;
  maxPrice?: number;
  technologies?: string[];
  searchQuery?: string;
}

export interface TechFilter {
  categories?: TechCategory[];
  minProficiency?: TechnologyProficiency;
  searchQuery?: string;
}
