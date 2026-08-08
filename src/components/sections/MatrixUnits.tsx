'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Store, 
  ShieldCheck, 
  Lock, 
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
    <section id="matriz-unidades" className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="UM PADRÃO PRA REDE"
          title="Um padrão pra rede. Liberdade na medida pra cada loja."
          description="Você cria o modelo que mantém a marca igual em todo lugar. Cada loja mexe só no que é da região, preço e oferta local, sem bagunçar a comunicação da rede."
        />

        {/* Highlight Callout from BLOCO 5 */}
        <div className="my-8 max-w-3xl mx-auto p-4 rounded-xl bg-[#FFFFFF] border border-[#F59E0B]/50 text-center shadow-sm">
          <p className="text-base sm:text-lg font-black text-[#F59E0B] tracking-tight">
            Sua marca protegida. Suas lojas com a mão livre onde importa.
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-8 p-1.5 rounded-xl bg-[#F4EDE2] border border-[#DFDFDD]">
          <button
            onClick={() => setMobileTab('matrix')}
            className={cn(
              'flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2',
              mobileTab === 'matrix'
                ? 'bg-[#F59E0B] text-[#2B2523] shadow-sm font-extrabold'
                : 'text-[#69433C] hover:text-[#2B2523]'
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
                ? 'bg-[#F59E0B] text-[#2B2523] shadow-sm font-extrabold'
                : 'text-[#69433C] hover:text-[#2B2523]'
            )}
          >
            <Store className="w-4 h-4" />
            Visão Unidades
          </button>
        </div>

        {/* Split Interactive View Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch mt-6">
          {/* LEFT: MATRIZ */}
          <div
            onMouseEnter={() => setHoveredSide('matrix')}
            onMouseLeave={() => setHoveredSide(null)}
            className={cn(
              'md:col-span-6 lg:col-span-6 rounded-2xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between shadow-sm',
              mobileTab === 'unit' && 'hidden md:flex',
              hoveredSide === 'matrix'
                ? 'bg-[#FFFFFF] border-[#F59E0B] shadow-md'
                : 'bg-[#FFFFFF] border-[#DFDFDD]'
            )}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#DFDFDD]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#2B2523]">MATRIZ</h3>
                    <p className="text-xs text-[#F59E0B] font-bold">Mantém o padrão da marca</p>
                  </div>
                </div>
                <Lock className="w-5 h-5 text-[#F59E0B]" />
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
                          ? 'bg-[#F9F7F3] border-[#F59E0B]/40 text-[#2B2523]'
                          : 'bg-[#F9F7F3] border-[#DFDFDD] text-[#69433C]'
                      )}
                    >
                      <div className="p-2 rounded-lg bg-[#FFFFFF] text-[#F59E0B] border border-[#DFDFDD] shrink-0 mt-0.5 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-extrabold text-[#2B2523] text-sm">{item.title}</div>
                        <div className="text-[11px] text-[#69433C] leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DFDFDD] text-xs font-extrabold text-[#F59E0B] flex items-center justify-between">
              <span>Resultado da Matriz: Proteção total da marca</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>

          {/* RIGHT: UNIDADE */}
          <div
            onMouseEnter={() => setHoveredSide('unit')}
            onMouseLeave={() => setHoveredSide(null)}
            className={cn(
              'md:col-span-6 lg:col-span-6 rounded-2xl p-6 sm:p-8 transition-all duration-300 border flex flex-col justify-between shadow-sm',
              mobileTab === 'matrix' && 'hidden md:flex',
              hoveredSide === 'unit'
                ? 'bg-[#FFFFFF] border-[#F59E0B] shadow-md'
                : 'bg-[#FFFFFF] border-[#DFDFDD]'
            )}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#DFDFDD]">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#2B2523]">UNIDADE</h3>
                    <p className="text-xs text-[#F59E0B] font-bold">Ganha velocidade nas ofertas</p>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-[#F59E0B]" />
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
                          ? 'bg-[#F9F7F3] border-[#F59E0B]/40 text-[#2B2523]'
                          : 'bg-[#F9F7F3] border-[#DFDFDD] text-[#69433C]'
                      )}
                    >
                      <div className="p-2 rounded-lg bg-[#FFFFFF] text-[#F59E0B] border border-[#DFDFDD] shrink-0 mt-0.5 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-extrabold text-[#2B2523] text-sm">{item.title}</div>
                        <div className="text-[11px] text-[#69433C] leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DFDFDD] text-xs font-extrabold text-[#F59E0B] flex items-center justify-between">
              <span>Resultado das Lojas: Agilidade comercial máxima</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Central Visual Flow Summary Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/40 text-center max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-extrabold text-[#2B2523]">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#F59E0B]" />
              MATRIZ
            </span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-[#F59E0B]">PADRÃO DA MARCA</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            <span>LIBERDADE REGULADA</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            <span className="flex items-center gap-2">
              <Store className="w-4 h-4 text-[#F59E0B]" />
              UNIDADES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
