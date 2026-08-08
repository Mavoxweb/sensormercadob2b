'use client';

import React from 'react';
import { 
  ShoppingBag, 
  Boxes, 
  Beef, 
  Apple, 
  Store 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const TargetAudience: React.FC = () => {
  const segments = [
    {
      title: 'Supermercado',
      desc: 'Redes de supermercados com múltiplas seções e alto volume de ofertas semanais.',
      icon: ShoppingBag
    },
    {
      title: 'Atacarejo',
      desc: 'Operações de atacado e varejo com preços diferenciados por volume e região.',
      icon: Boxes
    },
    {
      title: 'Açougue',
      desc: 'Casas de carnes e redes com encartes diários e cortes em destaque.',
      icon: Beef
    },
    {
      title: 'Hortifruti',
      desc: 'Redes focadas em produtos frescos, feiras e promoções de hortifrúti.',
      icon: Apple
    },
    {
      title: 'Mercado de bairro que virou rede',
      desc: 'Operações locais em rápida expansão que precisam padronizar a comunicação.',
      icon: Store
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PRA QUEM É A SENSOR MERCADO"
          title="Pra quem é a Sensor Mercado"
          description="Feita pra rede de varejo de alimento com 5 lojas ou mais."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] hover:border-[#F59E0B] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#2B2523] group-hover:text-[#F59E0B] transition-colors leading-tight">
                    {seg.title}
                  </h3>
                  <p className="text-xs text-[#69433C] leading-relaxed">
                    {seg.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
