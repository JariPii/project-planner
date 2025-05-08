import clsx from 'clsx';
import React from 'react';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx('bg-neutral-700 min-h-[70svh] max-w-full ', className)}
    >
      {children}
    </div>
  );
};

export default Container;
