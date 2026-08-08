'use client';

import React from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const FinalCTA: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F59E0B20_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Eyebrow */}
        <Badge variant="amber" className="py-1.5 px-4 text-xs tracking-widest uppercase font-black">
          ÚLTIMO CONVITE
        </Badge>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2B2523] tracking-tight leading-tight">
          Sua próxima campanha pode começar em minutos —{' '}
          <span className="text-[#F59E0B] block mt-1">
            e manter o padrão em todas as lojas.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-xl text-[#69433C] font-medium leading-relaxed max-w-2xl mx-auto">
          Teste o protótipo ou agende uma demonstração para ver a plataforma com a identidade da sua rede.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('#prototipo')}
            className="w-full sm:w-auto min-h-[52px] font-black text-sm"
            leftIcon={<Sparkles className="w-5 h-5 text-[#2B2523]" />}
          >
            Testar o protótipo
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollTo('#demonstracao')}
            className="w-full sm:w-auto min-h-[52px]"
            rightIcon={<ArrowRight className="w-5 h-5 text-[#F59E0B]" />}
          >
            Agendar demonstração
          </Button>

          <a
            href="https://www.sensormercado.com.br/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-extrabold bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40 hover:bg-[#F59E0B] transition-all min-h-[52px] shadow-sm"
          >
            <span>Demo Live Online</span>
            <ExternalLink className="w-4 h-4 text-[#F59E0B]" />
          </a>
        </div>

        <p className="text-xs text-[#69433C] pt-4 font-semibold">
          Sensor Mercado — A plataforma de encartes da sua rede de supermercados.
        </p>
      </div>
    </section>
  );
};
