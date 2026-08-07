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
    <section id="funcionalidades" className="py-16 sm:py-20 lg:py-32 bg-[#0D1215] border-t border-[#253039]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="DA IMPLANTAÇÃO AO ENCARTE"
          title="Uma plataforma com a cara da sua rede e a velocidade de cada unidade."
          description="A Sensor Mercado organiza o processo inteiro: personalização, controle da matriz, adaptação local e distribuição dos materiais."
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
                    ? 'bg-[#171E24] border-[#20D477] shadow-[0_0_25px_rgba(32,212,119,0.15)]'
                    : 'bg-[#12181D] border-[#253039] hover:border-[#20D477]/40 hover:bg-[#151D23]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black transition-colors ${
                      isActive
                        ? 'bg-[#20D477] text-[#090D0F]'
                        : 'bg-[#171E24] text-[#A7B0AB] group-hover:text-[#20D477]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#20D477] uppercase bg-[#20D477]/10 px-2.5 py-1 rounded-md border border-[#20D477]/20">
                    {step.tag}
                  </span>
                </div>

                <div className="space-y-1 mt-4">
                  <h3 className={`text-base font-extrabold transition-colors ${isActive ? 'text-[#20D477]' : 'text-[#F4F7F5]'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A7B0AB] leading-snug line-clamp-2">
                    {step.shortDesc}
                  </p>
                </div>

                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#20D477]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Interactive Canvas */}
        <div className="rounded-2xl bg-[#12181D] border border-[#253039] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20D477]/10 border border-[#20D477]/30 text-[#20D477] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {WORKFLOW_STEPS[activeStep].tag}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7F5] leading-tight">
                  {WORKFLOW_STEPS[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-[#A7B0AB] leading-relaxed">
                  {WORKFLOW_STEPS[activeStep].shortDesc}
                </p>

                <div className="p-4 rounded-xl bg-[#090D0F] border border-[#253039] text-xs text-[#F4F7F5] space-y-2">
                  <div className="font-bold text-[#20D477] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Como funciona na prática:
                  </div>
                  <p className="text-[#A7B0AB] leading-relaxed">
                    {WORKFLOW_STEPS[activeStep].fullDesc}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={scrollToDemo}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Agendar demonstração
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Mockup for the Step */}
              <div className="lg:col-span-6 bg-[#090D0F] rounded-xl border border-[#253039] p-5 relative overflow-hidden min-h-[300px] flex items-center justify-center">
                {activeStep === 0 && (
                  <div className="w-full space-y-4 text-center p-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 flex items-center justify-center mx-auto">
                      <Palette className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-sm text-[#F4F7F5]">Personalização 100% Proprietária</div>
                      <div className="text-xs text-[#A7B0AB]">Logo, cores institucionais, fontes e selos da sua marca.</div>
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                      <span className="w-6 h-6 rounded-full bg-[#20D477] border border-white/20 inline-block" />
                      <span className="w-6 h-6 rounded-full bg-[#0E8F4C] border border-white/20 inline-block" />
                      <span className="w-6 h-6 rounded-full bg-[#12181D] border border-[#20D477] inline-block" />
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#253039] text-xs font-bold text-[#F4F7F5]">
                      <span className="flex items-center gap-1.5 text-[#20D477]">
                        <ShieldCheck className="w-4 h-4" />
                        Painel de Controle da Matriz
                      </span>
                      <span className="text-[10px] bg-[#20D477]/10 text-[#20D477] px-2 py-0.5 rounded">Modelos Travados</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#171E24] border border-[#253039] text-xs space-y-1">
                      <div className="font-semibold text-[#F4F7F5]">Encarte Semanal • Hortifrúti</div>
                      <div className="text-[10px] text-[#A7B0AB]">Permissão: Gerentes alteram preços e ofertas regionais</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#171E24] border border-[#253039] text-xs space-y-1">
                      <div className="font-semibold text-[#F4F7F5]">Campanha Fim de Semana • Açougue</div>
                      <div className="text-[10px] text-[#A7B0AB]">Permissão: Matriz aprova automaticamente</div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="w-full space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#253039] text-xs font-bold text-[#F4F7F5]">
                      <span className="flex items-center gap-1.5 text-[#20D477]">
                        <Store className="w-4 h-4" />
                        Visão da Unidade (Gerente de Loja)
                      </span>
                      <span className="text-[10px] bg-[#20D477]/10 text-[#20D477] px-2 py-0.5 rounded">Autonomia Segura</span>
                    </div>
                    <div className="p-3 rounded-lg bg-[#171E24] border border-[#20D477]/40 text-xs flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#F4F7F5]">Loja 04 — Shopping</div>
                        <div className="text-[10px] text-[#A7B0AB]">Picanha kg: R$ 59,90 → R$ 54,90 (Região Sul)</div>
                      </div>
                      <span className="text-xs font-extrabold text-[#20D477]">Atualizado ✓</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full space-y-4 text-center">
                    <div className="flex justify-center gap-4 text-[#20D477]">
                      <div className="p-3 rounded-xl bg-[#171E24] border border-[#253039] flex flex-col items-center gap-1">
                        <Printer className="w-5 h-5" />
                        <span className="text-[10px] text-[#F4F7F5]">Gráfica / A4</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#171E24] border border-[#253039] flex flex-col items-center gap-1">
                        <Smartphone className="w-5 h-5" />
                        <span className="text-[10px] text-[#F4F7F5]">Stories 9:16</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#171E24] border border-[#253039] flex flex-col items-center gap-1">
                        <Zap className="w-5 h-5" />
                        <span className="text-[10px] text-[#F4F7F5]">WhatsApp HD</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#A7B0AB]">
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
