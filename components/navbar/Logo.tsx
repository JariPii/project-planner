import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo-black.png';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='logo' className='w-auto max-h-[15svh]' />
    </Link>
  );
};

export default Logo;
