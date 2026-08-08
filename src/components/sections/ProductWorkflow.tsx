'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Building2, 
  Store, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Smartphone,
  Printer,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { WORKFLOW_STEPS } from '@/data/mockData';

export const ProductWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Palette, Building2, Store, Share2];

  const scrollToDemo = () => {
    const el = document.querySelector('#demonstracao');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="funcionalidades" className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="COMO FUNCIONA"
          title="Do jeito da sua rede, no seu ritmo."
          description="A gente prepara tudo com a sua marca. Depois é só criar a oferta e mandar pras lojas."
        />

        {/* 4 Steps Interactive Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-12">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between relative overflow-hidden min-h-[160px] group ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#F59E0B] shadow-sm'
                    : 'bg-[#F9F7F3] border-[#DFDFDD] hover:border-[#F59E0B]/50 hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-colors ${
                      isActive
                        ? 'bg-[#F59E0B] text-[#2B2523]'
                        : 'bg-[#F4EDE2] text-[#69433C] group-hover:text-[#F59E0B]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-[#2B2523] uppercase bg-[#F59E0B]/20 px-2.5 py-1 rounded-md border border-[#F59E0B]/30">
                    {step.tag}
                  </span>
                </div>

                <div className="space-y-1 mt-4">
                  <h3 className={`text-base font-extrabold transition-colors ${isActive ? 'text-[#F59E0B]' : 'text-[#2B2523]'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#69433C] leading-snug line-clamp-2">
                    {step.shortDesc}
                  </p>
                </div>

                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Interactive Canvas */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Detailed Step Description */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#2B2523] text-xs font-extrabold">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  {WORKFLOW_STEPS[activeStep].tag}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2523] leading-tight">
                  {WORKFLOW_STEPS[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-[#69433C] leading-relaxed">
                  {WORKFLOW_STEPS[activeStep].shortDesc}
                </p>

                <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-xs text-[#2B2523] space-y-2">
                  <div className="font-extrabold text-[#F59E0B] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Como funciona na prática:
                  </div>
                  <p className="text-[#69433C] leading-relaxed font-medium">
                    {WORKFLOW_STEPS[activeStep].fullDesc}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={scrollToDemo}
                    rightIcon={<ArrowRight className="w-4 h-4 text-[#2B2523]" />}
                  >
                    Agendar demonstração
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Mockup for the Step */}
              <div className="lg:col-span-6 bg-[#F9F7F3] rounded-xl border border-[#DFDFDD] p-5 relative overflow-hidden min-h-[300px] flex items-center justify-center shadow-inner">
                {activeStep === 0 && (
                  <div className="w-full space-y-4 text-center p-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 flex items-center justify-center mx-auto shadow-sm">
                      <Palette className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-extrabold text-sm text-[#2B2523]">Personalização 100% Proprietária</div>
                      <div className="text-xs text-[#69433C]">Logo, cores institucionais, fontes e selos da sua marca.</div>
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                      <span className="w-6 h-6 rounded-full bg-[#F59E0B] border border-white inline-block shadow-sm" />
                      <span className="w-6 h-6 rounded-full bg-[#E89005] border border-white inline-block shadow-sm" />
                      <span className="w-6 h-6 rounded-full bg-[#2B2523] border border-white inline-block shadow-sm" />
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#DFDFDD] text-xs font-extrabold text-[#2B2523]">
                      <span className="flex items-center gap-1.5 text-[#F59E0B]">
                        <ShieldCheck className="w-4 h-4" />
                        Painel de Controle da Matriz
                      </span>
                      <span className="text-[10px] bg-[#F59E0B]/20 text-[#2B2523] px-2 py-0.5 rounded font-bold">Modelos Travados</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] text-xs space-y-1 shadow-sm">
                      <div className="font-bold text-[#2B2523]">Encarte Semanal • Hortifrúti</div>
                      <div className="text-[10px] text-[#69433C]">Permissão: Gerentes alteram preços e ofertas regionais</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] text-xs space-y-1 shadow-sm">
                      <div className="font-bold text-[#2B2523]">Campanha Fim de Semana • Açougue</div>
                      <div className="text-[10px] text-[#69433C]">Permissão: Matriz aprova automaticamente</div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#DFDFDD] text-xs font-extrabold text-[#2B2523]">
                      <span className="flex items-center gap-1.5 text-[#F59E0B]">
                        <Store className="w-4 h-4" />
                        Visão da Unidade (Gerente de Loja)
                      </span>
                      <span className="text-[10px] bg-[#F59E0B]/20 text-[#2B2523] px-2 py-0.5 rounded font-bold">Autonomia Segura</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#F59E0B]/40 text-xs flex items-center justify-between shadow-sm">
                      <div>
                        <div className="font-bold text-[#2B2523]">Loja 04 — Shopping</div>
                        <div className="text-[10px] text-[#69433C]">Picanha kg: R$ 59,90 → R$ 54,90 (Região Sul)</div>
                      </div>
                      <span className="text-xs font-black text-[#F59E0B]">Atualizado ✓</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full space-y-4 text-center">
                    <div className="flex justify-center gap-4 text-[#F59E0B]">
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex flex-col items-center gap-1 shadow-sm">
                        <Printer className="w-5 h-5 text-[#F59E0B]" />
                        <span className="text-[10px] font-bold text-[#2B2523]">Gráfica / A4</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex flex-col items-center gap-1 shadow-sm">
                        <Smartphone className="w-5 h-5 text-[#F59E0B]" />
                        <span className="text-[10px] font-bold text-[#2B2523]">Stories 9:16</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex flex-col items-center gap-1 shadow-sm">
                        <Zap className="w-5 h-5 text-[#F59E0B]" />
                        <span className="text-[10px] font-bold text-[#2B2523]">WhatsApp HD</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#69433C] font-semibold">
                      Encartes prontos para impressão e redes sociais publicados instantaneamente pela plataforma.
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
