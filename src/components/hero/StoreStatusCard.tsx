'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Store, CheckCircle2, Radio } from 'lucide-react';
import { CampaignState } from './CampaignSimulation';
import { cn } from '@/lib/utils';

interface StoreStatusCardProps {
  currentState: CampaignState;
  className?: string;
}

export const StoreStatusCard: React.FC<StoreStatusCardProps> = ({
  currentState,
  className = '',
}) => {
  const isDistributed = currentState === 'distributing' || currentState === 'completed';
  const isCompleted = currentState === 'completed';

  const stores = [
    { name: 'Loja Centro' },
    { name: 'Loja Norte' },
    { name: 'Loja Sul' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.2 }}
      className={cn(
        'bg-[#FFFFFF] border border-[#DFDFDD] rounded-xl p-3.5',
        'shadow-[0_10px_30px_rgba(43,37,35,0.08)] flex flex-col gap-2 min-w-[190px]',
        className
      )}
      aria-hidden="true"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-[#DFDFDD]">
        <div className="flex items-center gap-1.5">
          <Store className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-[10px] font-black uppercase tracking-wider text-[#2B2523]">
            12 UNIDADES
          </span>
        </div>
        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#F4EDE2] text-[#69433C]">
          Rede
        </span>
      </div>

      {/* Status Line */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-black text-[#2B2523]">
          {isCompleted
            ? 'Prontas para publicar ✓'
            : isDistributed
            ? 'Distribuindo encarte...'
            : 'Aguardando campanha'}
        </span>
        {isDistributed && (
          <Radio className="w-3.5 h-3.5 text-[#F59E0B] animate-pulse shrink-0" />
        )}
        {!isDistributed && (
          <CheckCircle2 className="w-3.5 h-3.5 text-[#BDA78B] shrink-0" />
        )}
      </div>

      {/* Stores List */}
      <div className="space-y-1 pt-0.5">
        {stores.map((store, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-[10px] font-semibold text-[#69433C]"
          >
            <span className="flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  isCompleted ? 'bg-[#F59E0B]' : 'bg-[#BDA78B]'
                }`}
              />
              {store.name}
            </span>
            <span
              className={
                isCompleted ? 'text-[#2B2523] font-black' : 'text-[#8F817A]'
              }
            >
              {isCompleted
                ? 'Pronto ✓'
                : isDistributed
                ? 'Recebendo...'
                : 'Aguardando'}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
