'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { CampaignState } from './CampaignSimulation';
import { cn } from '@/lib/utils';

interface MatrixStatusCardProps {
  currentState: CampaignState;
  className?: string;
}

export const MatrixStatusCard: React.FC<MatrixStatusCardProps> = ({
  currentState,
  className = '',
}) => {
  const isApproved = ['ready', 'distributing', 'completed'].includes(currentState);
  const isProcessing = ['products', 'images', 'prices', 'branding'].includes(currentState);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className={cn(
        'bg-[#FFFFFF] border border-[#DFDFDD] rounded-xl p-3.5',
        'shadow-[0_10px_30px_rgba(43,37,35,0.08)] flex items-center gap-3',
        className
      )}
      aria-hidden="true"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
        <Building2 className="w-5 h-5 text-[#F59E0B]" />
      </div>

      {/* Content */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#69433C]">
            Painel Matriz
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
        </div>

        {/* Status Pill */}
        <div className="text-xs font-black text-[#2B2523] flex items-center gap-1.5 flex-wrap">
          <span>MATRIZ</span>
          {isApproved ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#2B2523] text-[10px] font-extrabold whitespace-nowrap">
              Campanha aprovada ✓
            </span>
          ) : isProcessing ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F4EDE2] text-[#69433C] text-[10px] font-extrabold whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 text-[#F59E0B] animate-spin" />
              Processando
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F4EDE2] text-[#69433C] text-[10px] font-extrabold whitespace-nowrap">
              Modo Edição
            </span>
          )}
        </div>

        <div className="text-[10px] text-[#8F817A] flex items-center gap-1 mt-1 font-medium">
          <ShieldCheck className="w-3 h-3 text-[#F59E0B] shrink-0" />
          <span className="truncate">Manual de marca &amp; preços unificados</span>
        </div>
      </div>
    </motion.div>
  );
};
