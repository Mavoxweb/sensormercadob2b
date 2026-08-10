'use client';

import React from 'react';
import { ShoppingCart, Store, Flame, Apple, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const AgencyTargetAudience: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#seja-parceiro');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const audienceTypes = [
    {
      icon: ShoppingCart,
      title: 'Agência que cuida de supermercado',
      description: 'Redes de 5 ou mais lojas que demandam campanhas semanais de encarte.'
    },
    {
      icon: Store,
      title: 'Agência que atende atacarejo',
      description: 'Operações de grande volume que exigem comunicação rápida de preço em lote.'
    },
    {
      icon: Flame,
      title: 'Agência de rede de hortifruti ou açougue',
      description: 'Especialistas em produtos frescos com troca constante de ofertas diárias.'
    },
    {
      icon: Sparkles,
      title: 'Agência que quer sair só de post e campanha',
      description: 'Agências buscando vender soluções de software com recorrência e alto valor agregado.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PERFIL DE PARCEIRO"
          title="Feita pra agência que atende varejo de alimento."
          description="Se a sua agência atende empresas do setor alimentar, a Senso Mercado encaixa perfeitamente no seu portfólio de serviços."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {audienceTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#DFDFDD] hover:border-[#F59E0B] transition-all space-y-4 shadow-sm flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#2B2523] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#69433C] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFDFDD]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#F59E0B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Comissão de 20%</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToForm}
            className="font-black text-sm min-h-[50px]"
            rightIcon={<ArrowRight className="w-4 h-4 text-[#2B2523]" />}
          >
            Quero me tornar parceiro
          </Button>
        </div>

      </div>
    </section>
  );
};
