'use client';

import React from 'react';
import { ShieldCheck, Sparkles, Building, Headphones, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const EnterpriseOffer: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'AQUISIÇÃO ÚNICA',
      desc: 'Invista no ativo de software para a sua rede. Sem tabelas de assinatura mensal por usuário ou surpresas contratuais.',
    },
    {
      icon: Building,
      title: 'PLATAFORMA PERSONALIZADA',
      desc: 'Infraestrutura configurada sob medida com a identidade visual, selos, permissões e estrutura de lojas da sua empresa.',
    },
    {
      icon: Sparkles,
      title: 'ACESSO VITALÍCIO',
      desc: 'Sua operação garante acesso perene à solução para gerenciar campanhas comerciais sem dependência de terceiros.',
    },
    {
      icon: Headphones,
      title: 'SUPORTE + MANUTENÇÃO',
      desc: 'Implantação guiada por especialistas em varejo e acordo de nível de serviço (SLA) estruturado comercialmente.',
    },
  ];

  const scrollToDemo = () => {
    const el = document.querySelector('#demonstracao');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-[#090D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="UM ATIVO PARA A REDE"
          title="Não é mais uma assinatura. É uma plataforma construída para a sua operação."
          description="Você faz uma única aquisição e recebe acesso vitalício à plataforma personalizada da sua rede. A implantação é acompanhada e o suporte e manutenção seguem o escopo comercial definido para a operação."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D1215] border border-[#253039] p-6 hover:border-[#20D477]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#171E24] border border-[#20D477]/30 text-[#20D477] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(32,212,119,0.15)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#F4F7F5] tracking-wider uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#A7B0AB] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#253039] flex items-center gap-2 text-[11px] font-bold text-[#20D477]">
                  <Check className="w-4 h-4" />
                  <span>Incluso no escopo enterprise</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="https://www.sensormercado.com.br/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-black bg-[#20D477] text-[#090D0F] hover:bg-[#18BC68] transition-all shadow-[0_0_20px_rgba(32,212,119,0.3)] active:scale-98 min-h-[50px]"
          >
            <Sparkles className="w-5 h-5" />
            <span>ACESSAR DEMO LIVE ON-LINE</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToDemo}
            className="w-full sm:w-auto min-h-[50px]"
            rightIcon={<ArrowRight className="w-5 h-5 text-[#20D477]" />}
          >
            Entender a implantação para a minha rede
          </Button>
        </div>
      </div>
    </section>
  );
};
