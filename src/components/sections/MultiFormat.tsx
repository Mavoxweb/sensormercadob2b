'use client';

import React from 'react';
import { 
  Zap, 
  UserCheck, 
  ShieldCheck, 
  MapPin, 
  Printer, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const MultiFormat: React.FC = () => {
  const scrollToDemo = () => {
    const el = document.querySelector('#demonstracao');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      title: 'Oferta no ar mais rápido',
      desc: 'Menos caminho entre decidir o preço e mostrar pro cliente.',
      icon: Zap,
    },
    {
      title: 'Sem depender de designer',
      desc: 'A troca simples de preço ou produto você mesmo faz.',
      icon: UserCheck,
    },
    {
      title: 'A rede toda alinhada',
      desc: 'Um modelo pronto mantém a sua marca igual em toda loja.',
      icon: ShieldCheck,
    },
    {
      title: 'Oferta local na hora',
      desc: 'Cada loja fala com a região dela, do jeito dela.',
      icon: MapPin,
    },
    {
      title: 'Serve pro digital e pro impresso',
      desc: 'A mesma oferta vira post e vira encarte pra gráfica.',
      icon: Printer,
    },
    {
      title: 'Tudo num lugar só',
      desc: 'Chega de oferta espalhada em mensagem, arquivo e gente.',
      icon: Layers,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="O QUE A SUA REDE GANHA"
          title="Mais rápido. Menos trabalho. Uma marca só."
          description="A plataforma organiza a produção dos encartes para que a rede responda mais rápido ao mercado sem abrir mão de controle e identidade."
        />

        {/* 6 Benefit Cards Grid from BLOCO 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] hover:border-[#F59E0B] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-[#2B2523] group-hover:text-[#F59E0B] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#69433C] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-extrabold text-[#2B2523]">Pronto para transformar a produção de encartes da sua rede?</h4>
            <p className="text-xs text-[#69433C] font-medium">Veja como a plataforma funciona na prática para o tamanho da sua operação.</p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={scrollToDemo}
            className="shrink-0 min-h-[46px] font-black text-xs"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#2B2523]" />}
          >
            Agendar demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};
