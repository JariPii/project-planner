import React from 'react';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='md:grid md:grid-cols-[1fr_3fr_1fr] bg-gray-900'>
      {children}
    </div>
  );
};

export default MainContainer;
