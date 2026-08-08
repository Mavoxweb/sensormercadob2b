'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Store, Network, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { cn } from '@/lib/utils';

export const ScaleNetwork: React.FC = () => {
  const [storeCount, setStoreCount] = useState<number>(10);

  const steps = [5, 10, 25, 50];

  return (
    <section className="py-20 lg:py-32 bg-[#F9F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CONSTRUÍDO PARA REDES"
          title="Feito para funcionar quando 5 lojas viram 50."
          description="Sua rede pode crescer dez vezes em número de unidades sem que a equipe de marketing da matriz precise aumentar o tamanho ou a carga de trabalho."
        />

        {/* Store Count Interactive Selector */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#69433C] mr-2">
            Simular Escala da Rede:
          </span>
          {steps.map((num) => (
            <button
              key={num}
              onClick={() => setStoreCount(num)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-black transition-all border shadow-sm',
                storeCount === num
                  ? 'bg-[#F59E0B] text-[#2B2523] border-[#F59E0B]'
                  : 'bg-[#FFFFFF] text-[#69433C] border-[#DFDFDD] hover:text-[#2B2523] hover:border-[#F59E0B]/40'
              )}
            >
              {num} Lojas
            </button>
          ))}
        </div>

        {/* Network Diagram Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          {/* Matriz Top Node */}
          <div className="inline-flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#F59E0B] text-[#2B2523] flex items-center justify-center shadow-md mb-2 font-black">
              <Building2 className="w-8 h-8 text-[#2B2523]" />
            </div>
            <span className="font-black text-sm text-[#2B2523]">MATRIZ CENTRAL</span>
            <span className="text-[10px] text-[#F59E0B] font-extrabold">1 Ponto de Governança</span>
          </div>

          {/* Central Connecting Line */}
          <div className="my-6 flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#F59E0B] to-[#DFDFDD]" />
          </div>

          {/* Nodes Grid representing Stores */}
          <motion.div
            layout
            className="grid grid-cols-5 sm:grid-cols-10 gap-2.5 max-w-2xl mx-auto py-4"
          >
            {Array.from({ length: Math.min(storeCount, 50) }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: idx * 0.015 }}
                className="p-2 rounded-lg bg-[#F9F7F3] border border-[#F59E0B]/30 text-center flex flex-col items-center gap-1 group hover:border-[#F59E0B] shadow-sm"
              >
                <Store className="w-4 h-4 text-[#F59E0B] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-bold text-[#69433C]">L{String(idx + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#DFDFDD]">
            <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-center space-y-1">
              <div className="text-xs font-extrabold text-[#2B2523]">Sem Complexidade Adicional</div>
              <div className="text-[11px] text-[#69433C]">Adicionar uma loja não exige contratar mais designers.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/40 text-center space-y-1">
              <div className="text-xs font-black text-[#F59E0B]">Identidade 100% Centralizada</div>
              <div className="text-[11px] text-[#69433C]">A marca permanece intocada independente do número de lojas.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-center space-y-1">
              <div className="text-xs font-extrabold text-[#2B2523]">Execução Comercial Local</div>
              <div className="text-[11px] text-[#69433C]">Cada unidade reage em minutos a ofertas da concorrência.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
