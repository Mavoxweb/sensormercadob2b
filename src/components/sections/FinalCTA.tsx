'use client';

import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-36 bg-[#0D1215] border-t border-[#253039]/60 relative overflow-hidden">
      {/* Subtle Green Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] hero-glow pointer-events-none opacity-80" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          OPERAÇÃO ENTERPRISE READY
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F4F7F5] tracking-tight leading-[1.12] max-w-4xl mx-auto">
          Sua rede já tem ofertas, lojas e clientes.{' '}
          <span className="block text-[#20D477] mt-2">
            Falta transformar isso em uma operação de campanhas escalável.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#A7B0AB] max-w-2xl mx-auto leading-relaxed">
          Veja como o Sensor Mercado pode funcionar com a identidade, estrutura e unidades da sua rede.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('#prototipo')}
            leftIcon={<Zap className="w-5 h-5 fill-current" />}
          >
            Experimentar a plataforma
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollTo('#demonstracao')}
            rightIcon={<ArrowRight className="w-5 h-5 text-[#20D477]" />}
          >
            Agendar demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};
