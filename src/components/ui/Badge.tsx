import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'muted' | 'outline' | 'surface';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'green',
  className,
  dot = true,
}) => {
  const variantStyles = {
    green: 'bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30',
    muted: 'bg-[#171E24] text-[#A7B0AB] border border-[#253039]',
    outline: 'border border-[#20D477]/40 text-[#20D477] bg-transparent',
    surface: 'bg-[#12181D] text-[#F4F7F5] border border-[rgba(255,255,255,0.08)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200',
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20D477] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20D477]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
