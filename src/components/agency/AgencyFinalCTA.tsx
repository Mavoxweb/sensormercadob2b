'use client';

import React from 'react';
import { ArrowRight, Sparkles, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const AgencyFinalCTA: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#seja-parceiro');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F59E0B20_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Eyebrow */}
        <Badge variant="amber" className="py-1.5 px-4 text-xs tracking-widest uppercase font-black">
          ÚLTIMO CONVITE PARA AGÊNCIAS
        </Badge>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2523] tracking-tight leading-tight">
          Coloque tecnologia no seu portfólio{' '}
          <span className="text-[#F59E0B] block mt-1">
            sem virar empresa de tech.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-[#69433C] font-medium leading-relaxed max-w-2xl mx-auto">
          Vire parceiro e entregue pro seu cliente de varejo o que a concorrência ainda não tem.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToForm}
            className="w-full sm:w-auto min-h-[52px] font-black text-sm"
            leftIcon={<Briefcase className="w-5 h-5 text-[#2B2523]" />}
          >
            Quero me tornar parceiro
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const el = document.querySelector('#prototipo');
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="w-full sm:w-auto min-h-[52px]"
            rightIcon={<Sparkles className="w-5 h-5 text-[#F59E0B]" />}
          >
            Testar o protótipo
          </Button>
        </div>

        <p className="text-xs text-[#69433C] pt-4 font-semibold">
          Sensor Mercado — A plataforma de encartes e apps para o seu cliente varejista.
        </p>
      </div>
    </section>
  );
};
