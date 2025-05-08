import { projects } from '@/data/projects';
import ProjectCard from '../projectCard/ProjectCard';

const ContentContainer = () => {
  return (
    <main className='flex justify-center items-center flex-col'>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </main>
  );
};

export default ContentContainer;
