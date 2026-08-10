'use client';

import React from 'react';
import { Wrench, Users, Headphones, GraduationCap, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export const AgencyInPractice: React.FC = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Entrada no ar sem estresse',
      description: 'Cuidamos de toda a configuração da plataforma para o seu cliente.'
    },
    {
      icon: GraduationCap,
      title: 'Treinamento completo da sua equipe',
      description: 'Ensinamos a sua equipe de criação a montar encartes em minutos.'
    },
    {
      icon: Headphones,
      title: 'Suporte humano e acessível',
      description: 'Atendimento direto com gente de verdade, sem robôs ou filas intermináveis.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-3xl border border-[#DFDFDD] p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="text-center space-y-4">
            <Badge variant="amber" className="py-1 px-3 text-xs tracking-widest font-extrabold uppercase">
              SEM COMPLEXIDADE TÉCNICA
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2523] tracking-tight">
              Você não precisa de equipe técnica.
            </h2>

            <p className="text-base sm:text-lg text-[#69433C] leading-relaxed max-w-2xl mx-auto font-medium">
              A gente faz a entrada no ar, treina a sua equipe e dá suporte acessível. Você fala com gente de verdade quando precisar. Seu trabalho é criar e cuidar do cliente; o resto é com a gente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-[#F9F7F3] border border-[#DFDFDD] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#2B2523]">{feat.title}</h3>
                  <p className="text-xs text-[#69433C] leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
