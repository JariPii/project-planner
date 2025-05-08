import clsx from 'clsx';
import React from 'react';

type SidebarProps = {
  children: React.ReactNode;
  side?: 'left' | 'right';
  className?: string;
};

const Sidebar = ({ children, side = 'left', className }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        'border bg-blue-500 p-4 max-h-[50svh]',
        {
          'left-0': side === 'left',
          'right-0 flex justify-end': side === 'right',
        },
        className
      )}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
