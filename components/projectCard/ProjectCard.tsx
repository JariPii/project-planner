import { Project } from '@/types/Projects';
import { Separator } from '../ui/separator';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const { projectName, projectDescription } = project;
  return (
    <div className='flex flex-col items-center h-[20rem] w-[15rem] border border-amber-100 rounded-t-sm'>
      <h2 className='underline text-2xl my-4'>{projectName}</h2>
      <div className='m-2 border h-3/5 w-4/5'>
        <p>{projectDescription}</p>
      </div>
      <Separator />
    </div>
  );
};

export default ProjectCard;
