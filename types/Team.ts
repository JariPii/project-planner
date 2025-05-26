import { TechStack } from './Projects';

export type TeamMember = {
  image: string;
  firstName: string;
  lastName: string;
  role: string;
  educations?: Educations;
  specialSkills: TechStack;
};

export type Educations = {
  shcool: string;
  degree: string;
  onlineCourses: OnlineCourses | OnlineCourses[];
};

export type OnlineCourses = 'Udemy' | 'LinkedIn Learning';
