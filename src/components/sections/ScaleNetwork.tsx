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
    <section className="py-20 lg:py-32 bg-[#090D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CONSTRUÍDO PARA REDES"
          title="Feito para funcionar quando 5 lojas viram 50."
          description="Sua rede pode crescer dez vezes em número de unidades sem que a equipe de marketing da matriz precise aumentar o tamanho ou a carga de trabalho."
        />

        {/* Store Count Interactive Selector */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A7B0AB] mr-2">
            Simular Escala da Rede:
          </span>
          {steps.map((num) => (
            <button
              key={num}
              onClick={() => setStoreCount(num)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-extrabold transition-all border',
                storeCount === num
                  ? 'bg-[#20D477] text-[#090D0F] border-[#52E79A] shadow-[0_0_20px_rgba(32,212,119,0.3)]'
                  : 'bg-[#12181D] text-[#A7B0AB] border-[#253039] hover:text-[#F4F7F5]'
              )}
            >
              {num} Lojas
            </button>
          ))}
        </div>

        {/* Network Diagram Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0D1215] border border-[#253039] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Matriz Top Node */}
          <div className="inline-flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#20D477] text-[#090D0F] flex items-center justify-center shadow-[0_0_30px_rgba(32,212,119,0.4)] mb-2 font-bold">
              <Building2 className="w-8 h-8" />
            </div>
            <span className="font-extrabold text-sm text-[#F4F7F5]">MATRIZ CENTRAL</span>
            <span className="text-[10px] text-[#20D477] font-semibold">1 Ponto de Governança</span>
          </div>

          {/* Central Connecting Line */}
          <div className="my-6 flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#20D477] to-[#253039]" />
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
                className="p-2 rounded-lg bg-[#12181D] border border-[#20D477]/30 text-center flex flex-col items-center gap-1 group hover:border-[#20D477]"
              >
                <Store className="w-4 h-4 text-[#20D477] group-hover:scale-110 transition-transform" />
                <span className="text-[9px] font-bold text-[#A7B0AB]">L{String(idx + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#253039]">
            <div className="p-4 rounded-xl bg-[#12181D] border border-[#253039] text-center space-y-1">
              <div className="text-xs font-bold text-[#F4F7F5]">Sem Complexidade Adicional</div>
              <div className="text-[11px] text-[#A7B0AB]">Adicionar uma loja não exige contratar mais designers.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#12181D] border border-[#253039] text-center space-y-1">
              <div className="text-xs font-bold text-[#20D477]">Identidade 100% Centralizada</div>
              <div className="text-[11px] text-[#A7B0AB]">A marca permanece intocada independente do número de lojas.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#12181D] border border-[#253039] text-center space-y-1">
              <div className="text-xs font-bold text-[#F4F7F5]">Execução Comercial Local</div>
              <div className="text-[11px] text-[#A7B0AB]">Cada unidade reage em minutos a ofertas da concorrência.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
