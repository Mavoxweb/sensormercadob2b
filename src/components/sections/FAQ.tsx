'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { FAQ_ITEMS } from '@/data/mockData';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#090D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas Frequentes"
          description="Esclareça suas dúvidas técnicas e comerciais sobre como o Sensor Mercado é implantado na sua rede."
        />

        <Accordion items={FAQ_ITEMS} className="mt-12" />
      </div>
    </section>
  );
};
