import React, { ReactNode } from 'react';

interface TransparentNegativeTextProps {
  children: ReactNode;
  className?: string;
}

const TransparentNegativeText: React.FC<TransparentNegativeTextProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-5xl md:text-6xl font-extrabold leading-tight mb-10 
                    bg-clip-text text-transparent bg-blend-difference 
                    relative z-10 ${className}`}
        style={{
          backgroundImage: 'linear-gradient(to bottom, white, white)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
      <span className="absolute inset-0 bg-transparent mix-blend-difference z-0"></span>
      {children}
    </h1>
  );
};

export default TransparentNegativeText;