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
  {
    image: '',
    projectName: 'SRF Dating App',
    projectDescription:
      'Users can create accounts and be matched to others with same taste in music and festivals they attend. They can plan meetings and other festivities together. Matchmaking is based on taste of music and bands.',
    techStack: { framework: 'Next.js', styling: 'Tailwind CSS' },
  },
];
