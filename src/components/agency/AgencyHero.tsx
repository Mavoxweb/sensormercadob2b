'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle, ExternalLink, Briefcase } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroProductDemo } from '../sections/HeroProductDemo';

export const AgencyHero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-40 pb-16 lg:pb-28 overflow-hidden bg-[#F9F7F3]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] hero-glow pointer-events-none opacity-80" />
      
      {/* Subtle Grid Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#DFDFDD80_1px,transparent_1px),linear-gradient(to_bottom,#DFDFDD80_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow */}
          <Badge variant="amber" className="py-1.5 px-4 text-xs tracking-widest uppercase font-black">
            PARCERIA EXCLUSIVA PARA AGÊNCIAS DE PUBLICIDADE & MARKETING
          </Badge>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2B2523] tracking-tight leading-[1.1] sm:leading-[1.08] break-words">
            E se a sua agência criasse a arte do encarte com{' '}
            <span className="text-[#F59E0B] block mt-1 sm:mt-2">
              menos mão de obra, menos custo e muito mais rápido?
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#69433C] font-normal leading-relaxed max-w-3xl">
            Conheça a Sensor Mercado, a plataforma que a sua agência usa pra criar e entregar encarte pra redes de varejo, sem montar time de design.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            {/* Primary Action: Quero me tornar parceiro */}
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[52px] font-black text-sm"
              onClick={() => scrollTo('#seja-parceiro')}
              leftIcon={<Briefcase className="w-5 h-5 text-[#2B2523]" />}
            >
              Quero me tornar parceiro
            </Button>

            {/* Secondary Action: Testar o protótipo */}
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[52px]"
              onClick={() => scrollTo('#prototipo')}
              rightIcon={<Sparkles className="w-5 h-5 text-[#F59E0B]" />}
            >
              Testar o protótipo
            </Button>

            {/* Live Demo External Link */}
            <a
              href="https://www.sensormercado.com.br/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-extrabold bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40 hover:bg-[#F59E0B] transition-all min-h-[52px] shadow-sm"
            >
              <span>Demo da Plataforma</span>
              <ExternalLink className="w-4 h-4 text-[#F59E0B]" />
            </a>
          </div>

          {/* Microcopy */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold text-[#69433C]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              20% de comissão recorrente por venda
            </span>
            <span className="hidden sm:inline text-[#DFDFDD]">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
              Sem necessidade de equipe técnica
            </span>
          </div>
        </div>

        {/* Hero Interactive Product Showcase */}
        <HeroProductDemo />
      </div>
    </section>
  );
};
