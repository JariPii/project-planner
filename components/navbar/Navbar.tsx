import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='h-[15svh] w-full bg-primary flex items-center p-3'>
      <Logo />
      <h1 className='text-2xl md:text-4xl lg:text-5xl text-secondary px-4 '>
        Leminaho Projects
      </h1>
    </div>
  );
};

export default Navbar;
