'use client';

import React from 'react';
import { LayoutGrid, MapPin, Share2, Printer, CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export const AgencyWhatYouOffer: React.FC = () => {
  const cards = [
    {
      icon: LayoutGrid,
      title: 'Encarte pra rede toda',
      description: 'Com a nossa plataforma, você cria o encarte do seu cliente uma vez e ele vai pra todas as lojas, com a marca dele. Rápido, e sem você montar um time de design.',
      tag: 'ESCALABILIDADE'
    },
    {
      icon: MapPin,
      title: 'Flexibilidade por região',
      description: 'Cada loja recebe a oferta pronta, e a sua agência ainda ajusta preço e produto por região quando precisa.',
      tag: 'CONTROLE DE OFERTAS'
    },
    {
      icon: Share2,
      title: 'Multicanal e marca padronizada',
      description: 'O mesmo material serve pra rede social e pra impressão, e a marca do cliente fica igual em todas as lojas, sem bagunça.',
      tag: 'OMNICHANNEL & IMPRESSÃO'
    }
  ];

  return (
    <section id="o-que-oferece" className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PORTFÓLIO DA AGÊNCIA"
          title="O que você passa a oferecer"
          description="Transforme a operação da sua agência entregando velocidade, padronização e automação para os seus clientes do setor supermercadista."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#DFDFDD] shadow-sm hover:border-[#F59E0B]/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="amber" className="text-[10px] uppercase tracking-wider font-extrabold">
                      {card.tag}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#2B2523] tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#69433C] leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#DFDFDD]/60 mt-6 flex items-center gap-2 text-xs font-bold text-[#F59E0B]">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B]" />
                  <span>Tecnologia embutida</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
