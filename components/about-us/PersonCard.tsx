import { teamMembers } from '@/data/team';
import Personnel from './Personnel';

const PersonCard = () => {
  return (
    <>
      {teamMembers.map((member, idx) => (
        <Personnel key={idx} member={member} />
      ))}
    </>
  );
};

export default PersonCard;
