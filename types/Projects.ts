export type Project = {
  image: string;
  projectName: string;
  projectDescription: string;
  techStack?: TechStack;
};

export type TechStack = {
  framework?: Framework | Framework[];
  styling?: Styling | Styling[];
  language?: Language | Language[];
  stateManagement?: StateManagement | StateManagement[];
  backend?: Backend | Backend[];
  database?: Database | Database[];
  auth?: Auth | Auth[];
  testing?: Testing | Testing[];
  deployment?: Deployment | Deployment[];
  api?: API | API[];
  cms?: CMS | CMS[];
  analytics?: Analytics | Analytics[];
  monitoring?: Monitoring | Monitoring[];
  validation?: Validation | Validation[];
  orm?: ORM | ORM[];
  ciCd?: CICD | CICD[];
  buildTools?: BuildTool | BuildTool[];
  versionControl?: VersionControl | VersionControl[];
  containerization?: Containerization | Containerization[];
};

// Union types for autocomplete and strict typing

export type Framework =
  | 'React'
  | 'Next.js'
  | 'Angular'
  | 'Vue'
  | 'Svelte'
  | 'SolidJS';

export type Styling =
  | 'Tailwind CSS'
  | 'Sass'
  | 'SCSS'
  | 'CSS Modules'
  | 'Styled Components'
  | 'Chakra UI';

export type Language =
  | 'TypeScript'
  | 'JavaScript'
  | 'Python'
  | 'Go'
  | 'Rust'
  | 'Dart';

export type StateManagement =
  | 'Redux'
  | 'Zustand'
  | 'Recoil'
  | 'Jotai'
  | 'Context API'
  | 'MobX';

export type Backend =
  | 'Node.js'
  | 'Express'
  | 'Fastify'
  | 'NestJS'
  | 'Django'
  | 'Flask'
  | 'Spring Boot';

export type Database =
  | 'PostgreSQL'
  | 'MySQL'
  | 'MongoDB'
  | 'SQLite'
  | 'Supabase DB'
  | 'Redis';

export type Auth =
  | 'Firebase Auth'
  | 'Auth0'
  | 'Clerk'
  | 'Supabase Auth'
  | 'Passport.js'
  | 'NextAuth.js';

export type Testing =
  | 'Jest'
  | 'Vitest'
  | 'Cypress'
  | 'Playwright'
  | 'Mocha'
  | 'Testing Library';

export type Deployment =
  | 'Vercel'
  | 'Netlify'
  | 'Heroku'
  | 'Railway'
  | 'AWS'
  | 'DigitalOcean';

export type API = 'REST' | 'GraphQL' | 'tRPC' | 'gRPC';

export type CMS = 'Strapi' | 'Sanity' | 'Contentful' | 'Prismic' | 'Ghost';

export type Analytics =
  | 'Google Analytics'
  | 'PostHog'
  | 'Mixpanel'
  | 'Plausible';

export type Monitoring =
  | 'Sentry'
  | 'LogRocket'
  | 'Datadog'
  | 'New Relic'
  | 'Bugsnag';

export type Validation = 'Zod' | 'Yup' | 'Joi' | 'Superstruct';

export type ORM = 'Prisma' | 'TypeORM' | 'Drizzle' | 'Sequelize' | 'Knex.js';

export type CICD =
  | 'GitHub Actions'
  | 'GitLab CI'
  | 'CircleCI'
  | 'Travis CI'
  | 'Jenkins';

export type BuildTool =
  | 'Webpack'
  | 'Vite'
  | 'Turbopack'
  | 'Rollup'
  | 'Parcel'
  | 'esbuild';

export type VersionControl = 'Git' | 'GitHub' | 'GitLab' | 'Bitbucket';

export type Containerization = 'Docker' | 'Podman' | 'Kubernetes';
