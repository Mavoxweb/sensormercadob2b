'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  ShieldCheck, 
  Lock, 
  Sliders, 
  Palette, 
  FileSpreadsheet, 
  Users, 
  Layers, 
  CheckCircle2, 
  Tag, 
  DollarSign, 
  Calendar, 
  Share2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

export const MatrixUnits: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'matrix' | 'unit' | null>(null);
  const [mobileTab, setMobileTab] = useState<'matrix' | 'unit'>('matrix');

  const matrixFeatures = [
    { icon: Palette, title: 'Identidade Visual Travada', desc: 'Cores, logos e tipografia são mantidos em 100% dos materiais.' },
    { icon: FileSpreadsheet, title: 'Biblioteca de Modelos', desc: 'Templates oficiais criados pelo time de marketing da matriz.' },
    { icon: Layers, title: 'Campanhas Nacionais', desc: 'Lançamento de ofertas globais para toda a rede de uma só vez.' },
    { icon: Users, title: 'Gestão de Permissões', desc: 'Controle exato do que cada perfil de loja pode ou não alterar.' },
    { icon: ShieldCheck, title: 'Validação Automática', desc: 'Impossibilita erros de formatação ou descumprimento de marca.' },
  ];

  const unitFeatures = [
    { icon: DollarSign, title: 'Preços Regionais', desc: 'Autonomia para ajustar valores de acordo com a concorrência local.' },
    { icon: Tag, title: 'Inclusão de Ofertas Locais', desc: 'Adicione produtos específicos de fornecedores da região.' },
    { icon: Calendar, title: 'Vigências Customizadas', desc: 'Defina datas específicas para promoções relâmpago de loja.' },
    { icon: Share2, title: 'Formatos Prontos', desc: 'Gere arquivos em A4, Feed 1:1, Stories 9:16 e WhatsApp na hora.' },
    { icon: CheckCircle2, title: 'Publicação sem Espera', desc: 'Elimine aprovações demoradas via WhatsApp e e-mail.' },
  ];

  return (
    <section id="matriz-unidades" className="py-20 lg:py-32 bg-[#0D1215] border-t border-[#253039]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="MATRIZ + UNIDADES"
          title="A matriz mantém o padrão. Cada loja ganha velocidade."
          description="A arquitetura do Sensor Mercado separa com clareza o papel da governança institucional da execução comercial no ponto de venda."
        />

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-8 p-1.5 rounded-xl bg-[#12181D] border border-[#253039]">
          <button
            onClick={() => setMobileTab('matrix')}
            className={cn(
              'flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2',
              mobileTab === 'matrix'
                ? 'bg-[#20D477] text-[#090D0F]'
                : 'text-[#A7B0AB] hover:text-[#F4F7F5]'
            )}
          >
            <Building2 className="w-4 h-4" />
            Visão Matriz
          </button>
          <button
            onClick={() => setMobileTab('unit')}
            className={cn(
              'flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2',
              mobileTab === 'unit'
                ? 'bg-[#20D477] text-[#090D0F]'
                : 'text-[#A7B0AB] hover:text-[#F4F7F5]'
            )}
          >
            <Store className="w-4 h-4" />
            Visão Unidades
          </button>
        </div>

        {/* Split Interactive View Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: MATRIZ (Controle sem microgerenciamento) */}
          <div
            onMouseEnter={() => setHoveredSide('matrix')}
            onMouseLeave={() => setHoveredSide(null)}
            className={cn(
              'md:col-span-6 lg:col-span-5 rounded-2xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between',
              mobileTab === 'unit' && 'hidden md:flex',
              hoveredSide === 'matrix'
                ? 'bg-[#171E24] border-[#20D477] shadow-[0_0_40px_rgba(32,212,119,0.15)]'
                : 'bg-[#12181D] border-[#253039]'
            )}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#253039]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#F4F7F5]">MATRIZ</h3>
                    <p className="text-xs text-[#20D477] font-semibold">Controle sem microgerenciamento</p>
                  </div>
                </div>
                <Lock className="w-5 h-5 text-[#20D477]" />
              </div>

              <div className="space-y-3">
                {matrixFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3',
                        hoveredSide === 'matrix'
                          ? 'bg-[#090D0F] border-[#20D477]/30 text-[#F4F7F5]'
                          : 'bg-[#090D0F]/60 border-[#253039] text-[#A7B0AB]'
                      )}
                    >
                      <div className="p-2 rounded-lg bg-[#171E24] text-[#20D477] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#F4F7F5] text-sm">{item.title}</div>
                        <div className="text-[11px] text-[#A7B0AB] leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#253039] text-xs font-bold text-[#20D477] flex items-center justify-between">
              <span>Resultado da Matriz: Proteção total da marca</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* RIGHT: UNIDADE (Autonomia sem bagunçar a marca) */}
          <div
            onMouseEnter={() => setHoveredSide('unit')}
            onMouseLeave={() => setHoveredSide(null)}
            className={cn(
              'md:col-span-6 lg:col-span-5 lg:col-start-8 rounded-2xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between',
              mobileTab === 'matrix' && 'hidden md:flex',
              hoveredSide === 'unit'
                ? 'bg-[#171E24] border-[#20D477] shadow-[0_0_40px_rgba(32,212,119,0.15)]'
                : 'bg-[#12181D] border-[#253039]'
            )}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#253039]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#F4F7F5]">UNIDADE</h3>
                    <p className="text-xs text-[#20D477] font-semibold">Autonomia sem bagunçar a marca</p>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-[#20D477]" />
              </div>

              <div className="space-y-3">
                {unitFeatures.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3',
                        hoveredSide === 'unit'
                          ? 'bg-[#090D0F] border-[#20D477]/30 text-[#F4F7F5]'
                          : 'bg-[#090D0F]/60 border-[#253039] text-[#A7B0AB]'
                      )}
                    >
                      <div className="p-2 rounded-lg bg-[#171E24] text-[#20D477] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-[#F4F7F5] text-sm">{item.title}</div>
                        <div className="text-[11px] text-[#A7B0AB] leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#253039] text-xs font-bold text-[#20D477] flex items-center justify-between">
              <span>Resultado das Lojas: Agilidade comercial máxima</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Central Visual Flow Summary Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#171E24] border border-[#20D477]/30 text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#F4F7F5]">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#20D477]" />
              MATRIZ
            </span>
            <ArrowRight className="w-4 h-4 text-[#20D477]" />
            <span className="text-[#20D477]">PADRÃO DA MARCA</span>
            <ArrowRight className="w-4 h-4 text-[#20D477]" />
            <span>AUTONOMIA CONTROLADA</span>
            <ArrowRight className="w-4 h-4 text-[#20D477]" />
            <span className="flex items-center gap-2">
              <Store className="w-4 h-4 text-[#20D477]" />
              UNIDADES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
