'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileSpreadsheet, 
  Wand2, 
  ShieldCheck, 
  SlidersHorizontal, 
  Grid2X2, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Tag
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { WORKFLOW_STEPS } from '@/data/mockData';
import { cn } from '@/lib/utils';

export const ProductWorkflow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const icons = [FileSpreadsheet, Wand2, ShieldCheck, SlidersHorizontal, Grid2X2, Send];

  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-[#090D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="COMO O PRODUTO FUNCIONA"
          title="Do cadastramento à gôndola em 6 etapas inteligentes."
          description="Conheça a esteira operacional automatizada que transforma uma simples lista de ofertas em campanhas completas para todas as lojas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
          {/* Left Column: Interactive Steps List */}
          <div className="lg:col-span-5 space-y-3">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const Icon = icons[idx];

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    'p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative group',
                    isActive
                      ? 'bg-[#171E24] border-[#20D477] shadow-[0_0_25px_rgba(32,212,119,0.15)]'
                      : 'bg-[#0D1215] border-[#253039] hover:border-[rgba(255,255,255,0.15)]'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 transition-colors',
                        isActive
                          ? 'bg-[#20D477] text-[#090D0F]'
                          : 'bg-[#12181D] text-[#A7B0AB] border border-[#253039]'
                      )}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className={cn("font-extrabold text-base transition-colors", isActive ? "text-[#20D477]" : "text-[#F4F7F5]")}>
                          {step.title}
                        </h3>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-[#20D477]" />}
                      </div>
                      <p className="text-xs text-[#A7B0AB] leading-relaxed">
                        {step.shortDesc}
                      </p>

                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-[11px] text-[#20D477] pt-2 border-t border-[#253039]/60 font-medium"
                        >
                          {step.fullDesc}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Mockup Transforming Screen */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#0D1215] border border-[#20D477]/40 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden min-h-[480px] flex flex-col justify-between">
              {/* Header Bar inside Sticky Display */}
              <div className="flex items-center justify-between pb-4 border-b border-[#253039]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#20D477]" />
                  <span className="font-extrabold text-xs text-[#F4F7F5] uppercase tracking-wider">
                    {WORKFLOW_STEPS[activeStepIndex].tag} — DEMONSTRAÇÃO VISUAL
                  </span>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded bg-[#20D477]/10 text-[#20D477] font-bold">
                  Etapa {activeStepIndex + 1} de 6
                </span>
              </div>

              {/* Dynamic Transforming Screen per Active Step */}
              <div className="py-6 flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStepIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* STEP 01: INSIRA OS PRODUTOS */}
                    {activeStepIndex === 0 && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#12181D] border border-[#253039]">
                          <div className="text-xs font-bold text-[#F4F7F5] mb-2 flex items-center justify-between">
                            <span>Lista de Importação Comercial (ERP / Excel)</span>
                            <span className="text-[#20D477]">6 itens detectados</span>
                          </div>
                          <div className="space-y-1.5 font-mono text-[11px] text-[#A7B0AB]">
                            <div className="p-2 rounded bg-[#090D0F] border border-[#253039] flex justify-between">
                              <span>7891000123456 | Arroz Tipo 1 5kg</span>
                              <span className="text-[#20D477]">R$ 21,90</span>
                            </div>
                            <div className="p-2 rounded bg-[#090D0F] border border-[#253039] flex justify-between">
                              <span>7891000987654 | Feijão Carioca 1kg</span>
                              <span className="text-[#20D477]">R$ 5,99</span>
                            </div>
                            <div className="p-2 rounded bg-[#090D0F] border border-[#253039] flex justify-between">
                              <span>7891000555444 | Picanha Grill kg</span>
                              <span className="text-[#20D477]">R$ 59,90</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-[#20D477] font-semibold text-center">
                          ✓ Integração automática com códigos EAN e cadastros da rede
                        </div>
                      </div>
                    )}

                    {/* STEP 02: ORGANIZA O MATERIAL */}
                    {activeStepIndex === 1 && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#12181D] border border-[#20D477]/30 space-y-3">
                          <div className="flex items-center justify-between text-xs font-bold text-[#F4F7F5]">
                            <span className="flex items-center gap-2">
                              <Wand2 className="w-4 h-4 text-[#20D477]" />
                              IA Comercial & Recorte Automático de Fundo
                            </span>
                            <span className="text-[#20D477]">100% Concluído</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-lg bg-[#090D0F] border border-[#253039] text-center">
                              <div className="text-[10px] text-[#6F7B75]">Antes: Foto Bruta</div>
                              <div className="h-16 rounded bg-[#171E24] my-2 flex items-center justify-center text-[10px] text-[#A7B0AB]">
                                [Com Fundo]
                              </div>
                            </div>
                            <div className="p-3 rounded-lg bg-[#090D0F] border border-[#20D477]/50 text-center">
                              <div className="text-[10px] text-[#20D477] font-bold">Depois: Fundo Removido</div>
                              <div className="h-16 rounded bg-[#20D477]/10 my-2 flex items-center justify-center text-[10px] text-[#20D477] font-bold">
                                [Foto PNG Trata]
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 03: IDENTIDADE DA REDE */}
                    {activeStepIndex === 2 && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#12181D] border border-[#20D477]/30 space-y-3">
                          <div className="text-xs font-bold text-[#F4F7F5]">
                            Aplicação de Tokens de Marca da Matriz
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                            <div className="p-2.5 rounded-lg bg-[#090D0F] border border-[#253039]">
                              <div className="text-[10px] text-[#A7B0AB]">Cores Institucionais</div>
                              <div className="flex justify-center gap-1 mt-1">
                                <span className="w-4 h-4 rounded-full bg-[#0E8F4C]" />
                                <span className="w-4 h-4 rounded-full bg-[#20D477]" />
                                <span className="w-4 h-4 rounded-full bg-[#090D0F] border border-[#253039]" />
                              </div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#090D0F] border border-[#253039]">
                              <div className="text-[10px] text-[#A7B0AB]">Tipografia Oficial</div>
                              <div className="font-extrabold text-[#F4F7F5] mt-1">Inter Bold</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#090D0F] border border-[#253039]">
                              <div className="text-[10px] text-[#A7B0AB]">Selo da Marca</div>
                              <div className="text-[#20D477] font-bold mt-1">Rede SuperMais</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 04: ADAPTA PREÇOS */}
                    {activeStepIndex === 3 && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#12181D] border border-[#20D477]/30 space-y-2">
                          <div className="text-xs font-bold text-[#F4F7F5]">
                            Painel da Loja 03 (Zona Sul) — Ajuste de Ofertas
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 rounded bg-[#090D0F] border border-[#20D477]/40 flex items-center justify-between">
                              <span>Arroz Tipo 1 5kg</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-[#6F7B75]">Sugerido Matriz: R$ 21,90</span>
                                <span className="px-2 py-0.5 rounded bg-[#20D477] text-[#090D0F] font-bold">R$ 20,90 (Promo Loja)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 05: FORMATOS */}
                    {activeStepIndex === 4 && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#12181D] border border-[#20D477]/30 space-y-2">
                          <div className="text-xs font-bold text-[#F4F7F5] mb-2">
                            Geração Multicanais Simultânea
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center text-xs">
                            <div className="p-3 rounded-lg bg-[#090D0F] border border-[#20D477]/40">
                              <div className="font-bold text-[#20D477]">Encarte A4</div>
                              <div className="text-[10px] text-[#A7B0AB]">Impresso PDF</div>
                            </div>
                            <div className="p-3 rounded-lg bg-[#090D0F] border border-[#20D477]/40">
                              <div className="font-bold text-[#20D477]">Feed 1:1</div>
                              <div className="text-[10px] text-[#A7B0AB]">Instagram</div>
                            </div>
                            <div className="p-3 rounded-lg bg-[#090D0F] border border-[#20D477]/40">
                              <div className="font-bold text-[#20D477]">Story 9:16</div>
                              <div className="text-[10px] text-[#A7B0AB]">WhatsApp Status</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 06: PUBLIQUE */}
                    {activeStepIndex === 5 && (
                      <div className="space-y-3">
                        <div className="p-5 rounded-xl bg-[#20D477]/10 border border-[#20D477] text-center space-y-2">
                          <CheckCircle2 className="w-10 h-10 text-[#20D477] mx-auto" />
                          <div className="text-base font-extrabold text-[#20D477]">
                            Campanha Distribuída & Pronta!
                          </div>
                          <div className="text-xs text-[#F4F7F5] max-w-sm mx-auto">
                            Arquivos enviados para gráfica e peças digitais disponíveis nos painéis de todas as unidades da rede.
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Footer inside Sticky Container */}
              <div className="pt-3 border-t border-[#253039] flex items-center justify-between text-xs text-[#A7B0AB]">
                <span>Etapa selecionada: {WORKFLOW_STEPS[activeStepIndex].title}</span>
                <span className="text-[#20D477] font-semibold">Sensor Mercado Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
