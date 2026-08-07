import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'center',
  className,
}) => {
  // If highlightText is provided, split the title and color the highlighted part
  const renderTitle = () => {
    if (!highlightText) return title;
    const parts = title.split(highlightText);
    if (parts.length < 2) return title;

    return (
      <>
        {parts[0]}
        <span className="text-[#20D477]">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-4 max-w-3xl mb-12 lg:mb-16',
        align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start',
        className
      )}
    >
      {eyebrow && <Badge variant="green">{eyebrow}</Badge>}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F4F7F5] leading-[1.15]">
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#A7B0AB] font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
