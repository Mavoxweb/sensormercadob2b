'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroProductDemo } from './HeroProductDemo';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 sm:pt-40 pb-16 lg:pb-28 overflow-hidden bg-[#090D0F]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] hero-glow pointer-events-none opacity-90" />
      
      {/* Subtle Grid Background Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#25303915_1px,transparent_1px),linear-gradient(to_bottom,#25303915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <Badge variant="green" className="py-1.5 px-4 text-xs tracking-widest">
            PLATAFORMA PARA REDES DE SUPERMERCADOS
          </Badge>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F4F7F5] tracking-tight leading-[1.1] sm:leading-[1.08] break-words">
            Sua rede inteira criando campanhas.{' '}
            <span className="block text-[#20D477] drop-shadow-[0_0_25px_rgba(32,212,119,0.3)] mt-1 sm:mt-2">
              Sem perder o padrão da marca.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#A7B0AB] font-normal leading-relaxed max-w-3xl">
            Centralize modelos e identidade na matriz. Dê autonomia para cada unidade adaptar produtos, preços e ofertas locais. Gere materiais para digital e impressão em minutos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
            {/* Primary Action: Direct Live Demo */}
            <a
              href="https://www.sensormercado.com.br/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-black bg-[#20D477] text-[#090D0F] hover:bg-[#18BC68] transition-all shadow-[0_0_30px_rgba(32,212,119,0.4)] active:scale-98 min-h-[52px]"
            >
              <Sparkles className="w-5 h-5" />
              <span>ACESSAR DEMO LIVE ONLINE</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-h-[52px]"
              onClick={() => scrollTo('#prototipo')}
              rightIcon={<ArrowRight className="w-5 h-5 text-[#20D477]" />}
            >
              Simular na página
            </Button>
          </div>

          {/* B2B Commercial Microcopy */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs font-semibold text-[#A7B0AB]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20D477]" />
              Aquisição única
            </span>
            <span className="hidden sm:inline text-[#253039]">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#20D477]" />
              Plataforma personalizada
            </span>
            <span className="hidden sm:inline text-[#253039]">•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#20D477]" />
              Acesso vitalício
            </span>
          </div>
        </div>

        {/* Sophisticated Interactive Product Demo Mockup */}
        <HeroProductDemo />
      </div>
    </section>
  );
};
