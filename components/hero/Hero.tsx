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
    </div>
  );
};

export default Hero;
