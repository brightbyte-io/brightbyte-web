import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'whiteOutline';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'lg' | 'md';
  isLoading?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      rounded = 'full',
      isLoading = false,
      loading = false,
      iconLeft,
      iconRight,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isBusy = isLoading || loading;
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18529B] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer whitespace-nowrap shrink-0';

    const roundedStyles = {
      full: 'rounded-full',
      lg: 'rounded-xl',
      md: 'rounded-lg',
    };

    const sizeStyles = {
      sm: 'text-xs py-1.5 px-3.5 gap-1.5',
      md: 'text-sm py-2.5 px-5 gap-2',
      lg: 'text-base py-3 px-6 gap-2.5',
    };

    const variantStyles = {
      primary:
        'bg-[#18529B] text-white hover:bg-[#123E75] active:bg-[#0E305C] shadow-sm',
      secondary:
        'bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 active:bg-slate-100 shadow-xs',
      outline:
        'bg-transparent text-[#18529B] hover:bg-[#18529B]/5 border border-[#18529B] active:bg-[#18529B]/10',
      ghost:
        'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100',
      white:
        'bg-white text-[#18529B] hover:bg-slate-100 active:bg-slate-200 shadow-sm font-semibold',
      whiteOutline:
        'bg-transparent text-white border border-white/70 hover:bg-white/10 active:bg-white/20',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isBusy}
        className={`${baseStyles} ${roundedStyles[rounded]} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isBusy ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>
        )}
        <span>{children}</span>
        {!isBusy && iconRight && (
          <span className="inline-flex shrink-0">{iconRight}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
