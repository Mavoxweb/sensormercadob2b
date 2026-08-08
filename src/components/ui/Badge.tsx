import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'amber' | 'accent' | 'muted' | 'outline' | 'surface';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'amber',
  className,
  dot = true,
}) => {
  const variantStyles = {
    green: 'bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40 font-bold',
    amber: 'bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40 font-bold',
    accent: 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/40 font-bold',
    muted: 'bg-[#F4EDE2] text-[#69433C] border border-[#DFDFDD]',
    outline: 'border border-[#F59E0B]/50 text-[#2B2523] bg-transparent font-bold',
    surface: 'bg-[#FFFFFF] text-[#2B2523] border border-[#DFDFDD] shadow-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
