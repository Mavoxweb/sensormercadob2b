import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20D477] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090D0F] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5 min-h-[38px]',
    md: 'px-6 py-3 text-sm gap-2 min-h-[46px]',
    lg: 'px-8 py-4 text-base gap-2.5 min-h-[54px]',
  };

  const variantStyles = {
    primary:
      'bg-[#20D477] text-[#090D0F] hover:bg-[#18BC68] shadow-[0_0_20px_rgba(32,212,119,0.25)] hover:shadow-[0_0_30px_rgba(32,212,119,0.4)] border border-[#52E79A]/40 font-bold',
    secondary:
      'bg-[#171E24] text-[#F4F7F5] hover:text-white border border-[#253039] hover:border-[#20D477]/40 hover:bg-[#1C252D]',
    outline:
      'bg-transparent text-[#20D477] border border-[#20D477]/50 hover:bg-[#20D477]/10 hover:border-[#20D477]',
    ghost:
      'bg-transparent text-[#A7B0AB] hover:text-[#F4F7F5] hover:bg-[#12181D]',
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  );
};
