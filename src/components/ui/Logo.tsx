import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Exact height matching the "Contact Us" button (md = h-10 / 40px)
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-14',
  };

  const selectedHeight = heightClasses[size] || 'h-10';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <img
        src="/images/bbc-logo.svg"
        alt="BrightByte Consulting Logo"
        className={`${selectedHeight} w-auto object-contain block`}
      />
    </div>
  );
};
