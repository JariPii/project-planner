import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/LWS-logo4.png';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='logo' className='size-22' />
    </Link>
  );
};

export default Logo;
