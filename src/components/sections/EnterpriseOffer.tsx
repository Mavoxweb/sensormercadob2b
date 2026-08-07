'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const EnterpriseOffer: React.FC = () => {
  const scrollToDemo = () => {
    const el = document.querySelector('#demonstracao');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-[#0D1215] border-t border-[#253039]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="UM ATIVO PARA A REDE"
          title="Não é mais uma assinatura. É uma plataforma construída para a sua operação."
          description="Você faz uma única aquisição e recebe acesso vitalício à plataforma personalizada da sua rede. Nossa equipe acompanha a implantação e oferece suporte e manutenção para manter a solução funcionando ao longo do tempo."
        />

        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mt-12 rounded-3xl bg-[#12181D] border border-[#20D477]/40 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden card-glow">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#20D477]/10 border border-[#20D477]/30 text-[#20D477] text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              LICENÇA DE ATIVO DIGITAL PROPRIETÁRIO
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-4">
              <div className="p-5 rounded-2xl bg-[#090D0F] border border-[#253039] text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-[#F4F7F5]">Aquisição única</div>
                <div className="text-xs text-[#A7B0AB]">Sem mensalidades recorrentes por loja.</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#090D0F] border border-[#253039] text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 flex items-center justify-center mx-auto">
                  <InfinityIcon className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-[#20D477]">Acesso vitalício</div>
                <div className="text-xs text-[#A7B0AB]">O software pertence à operação da sua rede.</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#090D0F] border border-[#253039] text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 flex items-center justify-center mx-auto">
                  <Wrench className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-[#F4F7F5]">Suporte e manutenção</div>
                <div className="text-xs text-[#A7B0AB]">Acompanhamento e evolução contínua.</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToDemo}
                className="w-full sm:w-auto min-h-[52px] font-black text-sm"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Entender a implantação
              </Button>

              <a
                href="https://www.sensormercado.com.br/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-[#171E24] text-[#20D477] border border-[#20D477]/40 hover:bg-[#20D477] hover:text-[#090D0F] transition-all min-h-[52px]"
              >
                <span>Demonstração ao Vivo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Microcopy from BLOCO 7 */}
            <div className="pt-2 text-xs font-bold text-[#A7B0AB] flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>Aquisição única</span>
              <span className="text-[#20D477]">•</span>
              <span>Acesso vitalício</span>
              <span className="text-[#20D477]">•</span>
              <span>Suporte e manutenção</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
