'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FAQItem } from '@/types';

interface AccordionProps {
  items: FAQItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('flex flex-col gap-4 max-w-3xl mx-auto', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              'rounded-2xl transition-all duration-200 overflow-hidden border',
              isOpen
                ? 'bg-[#FFFFFF] border-[#F59E0B] shadow-[0_4px_20px_rgba(245,158,11,0.15)]'
                : 'bg-[#FFFFFF] border-[#DFDFDD] hover:border-[#F59E0B]/50 shadow-sm'
            )}
          >
            <button
              type="button"
              id={`faq-accordion-header-${index}`}
              aria-controls={`faq-accordion-content-${index}`}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-extrabold text-base sm:text-lg text-[#2B2523] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  'p-1.5 rounded-lg bg-[#F9F7F3] border border-[#DFDFDD] text-[#69433C] transition-transform duration-200 shrink-0',
                  isOpen && 'transform rotate-180 text-[#F59E0B] border-[#F59E0B]/40 bg-[#F4EDE2]'
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-accordion-content-${index}`}
                  aria-labelledby={`faq-accordion-header-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#69433C] leading-relaxed border-t border-[#DFDFDD]/60">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
