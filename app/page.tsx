import ProjectCard from '@/components/projectCard/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='bg-gray-50 w-full'>Our future plans!</div>
      <div>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
