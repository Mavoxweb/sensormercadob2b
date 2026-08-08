'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Headphones,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight
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
    <section className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="A OFERTA"
          title="Não é mais uma mensalidade. É a sua plataforma."
          description="Você adquire uma vez e a plataforma passa a ser da sua rede, com a sua marca. A gente cuida da entrada no ar e do suporte pra manter tudo rodando."
        />

        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mt-12 rounded-3xl bg-[#FFFFFF] border border-[#F59E0B]/50 p-8 sm:p-12 shadow-sm relative overflow-hidden card-glow">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#2B2523] text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              LICENÇA PROPRIETÁRIA DA SUA REDE
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-2">
              <div className="p-5 rounded-2xl bg-[#F9F7F3] border border-[#DFDFDD] text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#F59E0B] border border-[#DFDFDD] flex items-center justify-center mx-auto shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-sm font-extrabold text-[#2B2523]">Aquisição única</div>
                <div className="text-xs text-[#69433C]">Sua própria plataforma sem mensalidades recorrentes por loja.</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F7F3] border border-[#F59E0B]/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#F59E0B] border border-[#DFDFDD] flex items-center justify-center mx-auto shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-sm font-black text-[#F59E0B]">Com a sua marca</div>
                <div className="text-xs text-[#69433C]">Nome, cores e estilo visual 100% proprietários da sua rede.</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F9F7F3] border border-[#DFDFDD] text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#F59E0B] border border-[#DFDFDD] flex items-center justify-center mx-auto shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-sm font-extrabold text-[#2B2523]">Feita pra sua rede</div>
                <div className="text-xs text-[#69433C]">A gente cuida da implantação e do suporte pra sua oferta não parar.</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToDemo}
                className="w-full sm:w-auto min-h-[52px] font-black text-sm"
                rightIcon={<ArrowRight className="w-5 h-5 text-[#2B2523]" />}
              >
                Entender como funciona
              </Button>

              <a
                href="https://www.sensormercado.com.br/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-extrabold bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40 hover:bg-[#F59E0B] transition-all min-h-[52px] shadow-sm"
              >
                <span>Demonstração ao Vivo</span>
                <ExternalLink className="w-4 h-4 text-[#F59E0B]" />
              </a>
            </div>

            {/* Microcopy from BLOCO 7 */}
            <div className="pt-2 text-xs font-bold text-[#69433C] flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>Aquisição única</span>
              <span className="text-[#F59E0B]">•</span>
              <span>Com a sua marca</span>
              <span className="text-[#F59E0B]">•</span>
              <span>Feita pra sua rede</span>
            </div>
          </div>
        </div>

        {/* BLOCO NOVO • SUPORTE */}
        <div className="max-w-4xl mx-auto mt-12 p-8 sm:p-10 rounded-3xl bg-[#F4EDE2] border border-[#DFDFDD] shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-16 h-16 rounded-2xl bg-[#FFFFFF] text-[#F59E0B] border border-[#F59E0B]/40 flex items-center justify-center shrink-0 shadow-sm">
            <Headphones className="w-8 h-8" />
          </div>

          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/20 text-[#2B2523] text-xs font-extrabold mb-1">
              <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
              SUPORTE HUMANO E DIRETO
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2523]">
              Suporte acessível, gente de verdade.
            </h3>
            <p className="text-sm text-[#69433C] leading-relaxed font-medium">
              Precisou, você fala com a gente rápido e resolve. Sem fila, sem robô. A gente acompanha desde a entrada no ar e continua por perto pra sua oferta nunca ficar parada.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
