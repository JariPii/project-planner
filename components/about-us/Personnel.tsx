import { TeamMember } from '@/types/Team';

type PersonProps = {
  member: TeamMember;
};

const Personnel = ({ member }: PersonProps) => {
  const { image, firstName, lastName, role } = member;
  return (
    <div className='bg-white h-full'>
      <div>{image ? `${image}` : null}</div>
      <h2 className='text-black'>
        {firstName} {lastName}
      </h2>
      <p className='text-black'>{role}</p>
      <div></div>
    </div>
  );
};

export default Personnel;
