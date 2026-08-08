'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { FAQ_ITEMS } from '@/data/mockData';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas Frequentes"
          description="Respostas diretas para as principais dúvidas sobre como a plataforma funciona na sua rede."
        />

        <Accordion items={FAQ_ITEMS} className="mt-12" />
      </div>
    </section>
  );
};
