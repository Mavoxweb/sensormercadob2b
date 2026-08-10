'use client';

import React from 'react';
import { Sparkles, Layers, ShieldCheck, ArrowRight, Store } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const AgencyWhatIsIt: React.FC = () => {
  const scrollToPrototype = () => {
    const el = document.querySelector('#prototipo');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* What Is It Container */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#FFFFFF] border border-[#DFDFDD] shadow-sm text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/40 flex items-center justify-center mx-auto shadow-sm">
            <Layers className="w-7 h-7" />
          </div>

          <span className="text-xs font-black tracking-widest text-[#F59E0B] uppercase">TECNOLOGIA PRONTA PARA AGÊNCIAS</span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2523] tracking-tight">
            O que é a Senso Mercado
          </h2>

          <p className="text-base sm:text-lg text-[#69433C] leading-relaxed max-w-2xl mx-auto font-medium">
            É uma plataforma pronta pra sua agência criar encartes e materiais de oferta pra redes de varejo de alimento. Você monta a oferta num lugar só e ela vai pra todas as lojas do seu cliente, com a marca dele. Sem começar do zero e sem contratar programador.
          </p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToPrototype}
              className="font-black text-sm min-h-[50px]"
              leftIcon={<Sparkles className="w-4 h-4 text-[#2B2523]" />}
            >
              Testar o protótipo
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
