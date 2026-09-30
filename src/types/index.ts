export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'how-we-work'
  | 'contact'
  | 'blog'
  | 'blog-post'
  | 'service-detail';

export interface NavItem {
  label: string;
  href: string;
  pageId: PageId;
  children?: { label: string; serviceId: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  categoryTag: string;
  heroHeadline: string;
  heroSubtitle: string;
  overviewHeading: string;
  overviewDescription: string;
  overviewTags: string[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  whyChoosePoints: {
    title: string;
    description: string;
  }[];
  technologies: {
    category: string;
    skills: string;
  }[];
  ctaText?: string;
  badge?: string;
  shortDescription?: string;
  fullDescription?: string;
}

export interface EngagementModel {
  id: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  idealFor?: string;
  description?: string;
  benefits?: string[];
  features?: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  pinColor?: 'yellow' | 'pink' | 'emerald' | 'blue';
  duration?: string;
  deliverables?: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location?: string;
  company?: string;
  role?: string;
  avatarText?: string;
  impact?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  date: string;
  author: any;
  authorRole?: string;
  image?: string;
  content?: string[];
  tags?: string[];
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  businessEmail: string;
  services: string[];
  projectDescription: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
