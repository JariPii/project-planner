import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='h-[15.5svh] bg-gradient-to-r bg-quaternary to-quinary'>
      <div className='h-[15svh] w-full bg-primary flex items-center p-1'>
        <Logo />
        <h1 className='text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-quaternary to-70% to-quinary bg-clip-text text-transparent px-4'>
          Leminaho Projects
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
