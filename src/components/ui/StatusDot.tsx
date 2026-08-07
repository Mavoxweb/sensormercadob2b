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
    ready: 'bg-[#20D477] text-[#20D477]',
    active: 'bg-[#20D477] text-[#20D477]',
    syncing: 'bg-[#F5B942] text-[#F5B942]',
    pending: 'bg-[#EF5B5B] text-[#EF5B5B]',
  };

  const current = colorMap[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", className)}>
      <span className="relative flex h-2 w-2">
        {status === 'ready' || status === 'active' ? (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20D477] opacity-75"></span>
        ) : null}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", current.split(' ')[0])}></span>
      </span>
      {label && <span className="text-[#A7B0AB]">{label}</span>}
    </span>
  );
};
