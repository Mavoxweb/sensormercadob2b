'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { CampaignState, CAMPAIGN_PRODUCTS } from './CampaignSimulation';
import { SensorSymbol } from './SensorSymbol';
import { cn } from '@/lib/utils';

interface FlyerPreviewProps {
  currentState: CampaignState;
  className?: string;
}

export const FlyerPreview: React.FC<FlyerPreviewProps> = ({
  currentState,
  className = '',
}) => {
  const isVisible = ['distributing', 'completed'].includes(currentState);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: -10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className={cn(
            'bg-[#FFFFFF] border-2 border-[#F59E0B]/60 rounded-xl p-3.5',
            'shadow-[0_15px_35px_rgba(245,158,11,0.18)] w-[210px]',
            className
          )}
          aria-hidden="true"
        >
          {/* Flyer Header */}
          <div className="bg-gradient-to-r from-[#2B2523] via-[#69433C] to-[#2B2523] text-white p-2 rounded-lg text-center shadow-sm">
            <div className="flex items-center justify-between px-1">
              <SensorSymbol className="w-3.5 h-3.5 shrink-0" color="#F59E0B" />
              <span className="text-[8px] font-black tracking-widest text-[#F59E0B] uppercase">
                OFERTAS DA SEMANA
              </span>
              <Sparkles className="w-3 h-3 text-[#F59E0B] shrink-0" />
            </div>
            <div className="text-[11px] font-black tracking-wide text-[#FFFFFF] mt-0.5 uppercase">
              REDE SUPERMAIS
            </div>
          </div>

          {/* Product List */}
          <div className="space-y-1.5 my-2.5">
            {CAMPAIGN_PRODUCTS.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-1.5 rounded-md bg-[#F4EDE2]/60 border border-[#DFDFDD]/80 text-[10px]"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-5 h-5 rounded overflow-hidden bg-[#FFFFFF] shrink-0 border border-[#DFDFDD]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-extrabold text-[#2B2523] truncate">{item.name}</span>
                </div>
                <span className="font-black text-[#F59E0B] shrink-0 ml-1">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Status Badge */}
          <div className="bg-[#F59E0B]/15 border border-[#F59E0B]/40 rounded-lg p-1.5 flex items-center justify-between text-[9px] font-extrabold text-[#2B2523]">
            <span className="flex items-center gap-1">
              <FileText className="w-3 h-3 text-[#F59E0B]" />
              ENCARTE GERADO
            </span>
            <CheckCircle2 className="w-3 h-3 text-[#F59E0B]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
