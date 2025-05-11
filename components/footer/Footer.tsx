import Logo from '../navbar/Logo';

const Footer = () => {
  return (
    <div className='h-[20svh] flex items-center justify-between px-6 bg-primary mt-auto'>
      <Logo />
      <h1 className='text-lg italic px-4 text-secondary'>
        Linda & Jari Leminaho ~ 2025
      </h1>
    </div>
  );
};

export default Footer;
