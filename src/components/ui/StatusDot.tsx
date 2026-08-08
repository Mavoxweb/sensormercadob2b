import React from 'react';
import { cn } from '@/lib/utils';

interface StatusDotProps {
  status?: 'ready' | 'syncing' | 'pending' | 'active';
  label?: string;
  className?: string;
}

export const StatusDot: React.FC<StatusDotProps> = ({
  status = 'ready',
  label,
  className,
}) => {
  const colorMap = {
    ready: 'bg-[#F59E0B] text-[#F59E0B]',
    active: 'bg-[#F59E0B] text-[#F59E0B]',
    syncing: 'bg-[#F59E0B] text-[#F59E0B]',
    pending: 'bg-[#EF4444] text-[#EF4444]',
  };

  const current = colorMap[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold", className)}>
      <span className="relative flex h-2 w-2">
        {status === 'ready' || status === 'active' ? (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
        ) : null}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", current.split(' ')[0])}></span>
      </span>
      {label && <span className="text-[#69433C]">{label}</span>}
    </span>
  );
};
