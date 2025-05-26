import clsx from 'clsx';
import Image from 'next/image';

type HeroProps = {
  image?: string;
  alt?: string;
  heroTitle?: string;
  heroDescription?: string;
  height?: string;
  className?: string;
};

const Hero = ({ height = 'h-[70svh]', className }: HeroProps) => {
  return (
    <div
      className={clsx(
        'relative flex justify-center items-center text-black max-w-full bg-amber-100',
        height,
        className
      )}
    >
      <Image
        src='/hero-images/goblins.png'
        alt='coding goblins'
        fill
        className='object-cover'
      />
      <div className='bg-secondary/30 absolute bottom-4 xl:bottom-6 blur-xs px-6 pb-6 h-24 w-full'></div>
      <h1 className='text-3xl sm:text-4xl xl:text-7xl text-quaternary text-shadow-sm text-shadow-primary absolute bottom-11'>
        This page is under construction!
      </h1>
    </div>
  );
};

export default Hero;
