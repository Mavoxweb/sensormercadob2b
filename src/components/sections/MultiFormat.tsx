'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Printer, 
  Smartphone, 
  MessageSquare, 
  Tv, 
  Tag as TagIcon,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { FORMAT_OPTIONS } from '@/data/mockData';
import { cn } from '@/lib/utils';

export const MultiFormat: React.FC = () => {
  const [selectedFormatId, setSelectedFormatId] = useState<string>('a4');

  const selectedFormat = FORMAT_OPTIONS.find((f) => f.id === selectedFormatId) || FORMAT_OPTIONS[0];

  const iconMap: Record<string, React.ElementType> = {
    Printer,
    Instagram: Share2,
    Smartphone,
    MessageSquare,
    Tv,
    Tag: TagIcon,
  };

  return (
    <section id="multiformato" className="py-20 lg:py-32 bg-[#0D1215] border-t border-[#253039]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="UMA CAMPANHA. TODOS OS CANAIS."
          title="Crie uma vez. Distribua em todos os formatos."
          description="Do encarte impresso ao display digital de gôndola. O Sensor Mercado reajusta automaticamente os elementos para cada suporte físico ou digital."
        />

        {/* Format Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {FORMAT_OPTIONS.map((format) => {
            const Icon = iconMap[format.iconName] || Smartphone;
            const isSelected = selectedFormatId === format.id;

            return (
              <button
                key={format.id}
                onClick={() => setSelectedFormatId(format.id)}
                className={cn(
                  'px-4 py-3 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-2 border',
                  isSelected
                    ? 'bg-[#20D477] text-[#090D0F] border-[#52E79A] shadow-[0_0_20px_rgba(32,212,119,0.3)] scale-105'
                    : 'bg-[#12181D] text-[#A7B0AB] border-[#253039] hover:text-[#F4F7F5] hover:border-[#20D477]/40'
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{format.name}</span>
                <span className={cn("text-[10px] px-1.5 py-0.5 rounded font-mono", isSelected ? "bg-[#090D0F]/20 text-[#090D0F]" : "bg-[#171E24] text-[#6F7B75]")}>
                  {format.ratio}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Aspect Ratio Transformer Display */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090D0F] border border-[#253039] p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Dynamic Canvas Container with Changing Aspect Ratios */}
            <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[360px] bg-[#12181D] rounded-xl border border-[#253039] p-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFormat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'bg-[#0D1215] border border-[#20D477]/50 rounded-xl p-4 shadow-2xl flex flex-col justify-between transition-all duration-300 mx-auto relative overflow-hidden',
                    selectedFormat.id === 'a4' && 'w-[220px] h-[310px]',
                    selectedFormat.id === 'feed' && 'w-[250px] h-[250px]',
                    selectedFormat.id === 'story' && 'w-[180px] h-[320px]',
                    selectedFormat.id === 'whatsapp' && 'w-[200px] h-[280px]',
                    selectedFormat.id === 'tv' && 'w-[320px] h-[180px]',
                    selectedFormat.id === 'tag' && 'w-[260px] h-[110px]'
                  )}
                >
                  {/* Canvas Header */}
                  <div className="rounded bg-[#20D477] p-1.5 text-center text-[#090D0F] font-black text-[9px] uppercase tracking-wider">
                    SUPERMAIS • {selectedFormat.ratio}
                  </div>

                  {/* Canvas Product Mock Content */}
                  <div className="my-auto text-center space-y-1">
                    <div className="text-[11px] font-bold text-[#F4F7F5]">Arroz Tipo 1 5kg</div>
                    <div className="text-xs font-extrabold text-[#20D477]">R$ 21,90</div>
                    <div className="text-[9px] text-[#6F7B75]">Válido até domingo</div>
                  </div>

                  {/* Dimension Tag Overlay */}
                  <div className="absolute bottom-1 right-1 bg-[#171E24] text-[#A7B0AB] text-[8px] font-mono px-1.5 py-0.5 rounded border border-[#253039]">
                    {selectedFormat.dimension}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Details & Specification Box */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-[#20D477] uppercase tracking-widest">
                  FORMATO ADAPTATIVO
                </span>
                <h3 className="text-2xl font-extrabold text-[#F4F7F5]">{selectedFormat.name}</h3>
                <p className="text-sm text-[#A7B0AB] leading-relaxed">
                  Exportação direta e otimizada sem necessidade de intervenção de designer para reenquadrar ofertas ou textos.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-[#12181D] border border-[#253039] flex items-center justify-between text-xs">
                  <span className="text-[#A7B0AB]">Proporção / Aspect Ratio</span>
                  <span className="font-bold text-[#20D477]">{selectedFormat.ratio}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#12181D] border border-[#253039] flex items-center justify-between text-xs">
                  <span className="text-[#A7B0AB]">Resolução / Dimensão</span>
                  <span className="font-bold text-[#F4F7F5]">{selectedFormat.dimension}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#12181D] border border-[#253039] flex items-center justify-between text-xs">
                  <span className="text-[#A7B0AB]">Caso de Uso Principal</span>
                  <span className="font-bold text-[#F4F7F5]">{selectedFormat.useCase}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#20D477]/10 border border-[#20D477]/30 text-xs font-bold text-[#20D477] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Digital e físico partindo da mesma operação.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
