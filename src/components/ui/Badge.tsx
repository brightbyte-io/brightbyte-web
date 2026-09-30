import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'category' | 'pill' | 'tag' | 'bluePill' | 'dot';
  dotColor?: 'emerald' | 'blue' | 'amber';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'category',
  dotColor = 'blue',
  className = '',
  ...props
}) => {
  const dotColors = {
    emerald: 'bg-emerald-500',
    blue: 'bg-[#18529B]',
    amber: 'bg-amber-500',
  };

  if (variant === 'category') {
    return (
      <span
        className={`inline-block text-xs font-bold uppercase tracking-wider text-[#18529B] ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  if (variant === 'pill') {
    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  if (variant === 'bluePill') {
    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#18529B]/10 text-[#18529B] ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  if (variant === 'tag') {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-slate-200 bg-white text-slate-600 ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  if (variant === 'dot') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium ${className}`}
        {...props}
      >
        <span className={`w-2 h-2 rounded-full ${dotColors[dotColor]}`} />
        <span>{children}</span>
      </span>
    );
  }

  return (
    <span className={`text-xs text-slate-500 ${className}`} {...props}>
      {children}
    </span>
  );
};
