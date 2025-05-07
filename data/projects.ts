import { Project } from '@/types/Projects';

export const projects: Project[] = [
  {
    image: '',
    projectName: 'DevPlans BuildBoard',
    projectDescription: 'A planner for future projects and ideas.',
    techStack: {
      framework: 'Next.js',
      language: 'TypeScript',
      styling: 'Tailwind CSS',
      database: 'MongoDB',
      backend: 'Node.js',
      auth: 'Clerk',
      validation: 'Zod',
      orm: 'Prisma',
    },
  },
];
