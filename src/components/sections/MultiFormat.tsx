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
      title: 'Crie campanhas com mais rapidez',
      desc: 'Reduza o caminho entre definir uma oferta e colocá-la diante do consumidor.',
      icon: Zap,
    },
    {
      title: 'Diminua a dependência de terceiros',
      desc: 'A equipe deixa de esperar por cada ajuste simples de produto, preço ou formato.',
      icon: UserCheck,
    },
    {
      title: 'Mantenha a rede alinhada',
      desc: 'Modelos aprovados preservam a identidade em todas as unidades.',
      icon: ShieldCheck,
    },
    {
      title: 'Ative ofertas locais',
      desc: 'Cada loja adapta a comunicação ao seu público e à sua realidade comercial.',
      icon: MapPin,
    },
    {
      title: 'Use no digital e no físico',
      desc: 'A mesma operação gera materiais para redes sociais e impressão.',
      icon: Printer,
    },
    {
      title: 'Centralize o processo',
      desc: 'A produção deixa de ficar espalhada entre mensagens, arquivos e pessoas.',
      icon: Layers,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#090D0F] border-t border-[#253039]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="O GANHO PARA A OPERAÇÃO"
          title="Mais agilidade. Menos retrabalho. Uma marca só."
          description="A plataforma organiza a produção dos encartes para que a rede responda mais rápido ao mercado sem abrir mão de controle, qualidade e identidade."
        />

        {/* 6 Benefit Cards Grid from BLOCO 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#12181D] border border-[#253039] hover:border-[#20D477]/50 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#F4F7F5] group-hover:text-[#20D477] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#A7B0AB] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-2xl bg-[#12181D] border border-[#20D477]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-extrabold text-[#F4F7F5]">Pronto para transformar a produção de encartes da sua rede?</h4>
            <p className="text-xs text-[#A7B0AB]">Veja como a plataforma funciona na prática para o tamanho da sua operação.</p>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={scrollToDemo}
            className="shrink-0 min-h-[46px] font-bold text-xs"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Agendar demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};
