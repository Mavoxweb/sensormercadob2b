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
                ? 'bg-[#171E24] border-[#20D477]/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                : 'bg-[#12181D] border-[#253039] hover:border-[rgba(255,255,255,0.15)]'
            )}
          >
            <button
              type="button"
              id={`faq-accordion-header-${index}`}
              aria-controls={`faq-accordion-content-${index}`}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-lg text-[#F4F7F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20D477]"
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  'p-1.5 rounded-lg bg-[#0D1215] border border-[#253039] text-[#A7B0AB] transition-transform duration-200 shrink-0',
                  isOpen && 'transform rotate-180 text-[#20D477] border-[#20D477]/40'
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
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#A7B0AB] leading-relaxed border-t border-[#253039]/50">
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
