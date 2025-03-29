// Skill level types
export type SkillLevel = "Beginner" | "Proficient" | "Advanced" | "Expert";

// Skill types
export interface Skill {
  name: string;
  level: SkillLevel;
  progressPercentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Experience types
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

// Project types
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

// Education types
export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  description: string;
}

// Certification types
export interface Certification {
  name: string;
  issuer: string;
  period: string;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
