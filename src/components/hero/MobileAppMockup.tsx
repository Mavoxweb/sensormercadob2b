'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  Layers,
  Send,
  Plus,
  Wifi,
  Battery,
  Signal,
} from 'lucide-react';
import { CampaignState, CAMPAIGN_PRODUCTS } from './CampaignSimulation';
import { SensorSymbol } from './SensorSymbol';

interface MobileAppMockupProps {
  currentState: CampaignState;
  stateIndex: number;
}

export const MobileAppMockup: React.FC<MobileAppMockupProps> = ({
  currentState,
  stateIndex,
}) => {
  const showProducts = stateIndex >= 1;
  const showImages = stateIndex >= 2;
  const showPrices = stateIndex >= 3;
  const showBranding = stateIndex >= 4;
  const isReady = stateIndex >= 5;
  const isDistributing = stateIndex >= 6;
  const isCompleted = currentState === 'completed';

  return (
    <div
      className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]"
      style={{ aspectRatio: '9 / 18.5' }}
    >
      {/* ── Outer Smartphone Frame ── */}
      <div className="absolute inset-0 rounded-[44px] bg-[#2B2523] p-[10px] shadow-[0_30px_70px_-15px_rgba(43,37,35,0.40),0_10px_25px_-10px_rgba(245,158,11,0.18)] ring-1 ring-white/5 flex flex-col">

        {/* Side Buttons (visual detail) */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-[#3a322f] rounded-l-sm" aria-hidden="true" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-11 bg-[#3a322f] rounded-l-sm" aria-hidden="true" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-[#3a322f] rounded-r-sm" aria-hidden="true" />

        {/* ── Screen Bezel ── */}
        <div className="relative w-full h-full rounded-[36px] bg-[#F9F7F3] overflow-hidden flex flex-col border border-white/10">

          {/* Status Bar */}
          <div className="bg-[#2B2523] px-5 py-2 flex items-center justify-between text-[10px] text-white shrink-0 z-20">
            <span className="font-semibold text-white/90 tabular-nums">09:41</span>
            {/* Dynamic Island */}
            <div className="w-16 h-3.5 bg-black rounded-full flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]/80" />
            </div>
            <div className="flex items-center gap-1 text-white/80">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5 text-[#F59E0B]" />
            </div>
          </div>

          {/* App Header */}
          <div
            className={`px-3.5 py-2.5 border-b flex items-center justify-between z-10 shrink-0 transition-colors duration-500 ${
              showBranding
                ? 'bg-[#FFFFFF] border-[#F59E0B]/30'
                : 'bg-[#F4EDE2] border-[#DFDFDD]'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#2B2523] flex items-center justify-center shadow-sm shrink-0">
                <SensorSymbol className="w-4 h-4" color="#F59E0B" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-tight text-[#2B2523]">
                  SENSOR <span className="text-[#F59E0B]">MERCADO</span>
                </span>
                <span className="text-[9px] font-extrabold text-[#69433C] tracking-wider uppercase -mt-0.5">
                  {showBranding ? 'REDE SUPERMAIS' : 'B2B Platform'}
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40">
              v2.4
            </span>
          </div>

          {/* ── App Body ── */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 scrollbar-none flex flex-col">

            {/* Campaign Header Card */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] shadow-sm flex items-center justify-between">
              <div>
                <div className="text-[9px] font-bold text-[#69433C] uppercase tracking-wider">
                  Campanha em Criação
                </div>
                <div className="text-[11px] font-black text-[#2B2523]">
                  {showBranding ? 'Semanão da Economia SuperMais' : 'Campanha da Semana'}
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-[#F4EDE2] flex items-center justify-center text-[#F59E0B] shrink-0">
                <Layers className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* State-Driven Status Banner */}
            <AnimatePresence mode="wait">
              {currentState === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="flex-1 flex flex-col items-center justify-center py-6 rounded-xl border border-dashed border-[#BDA78B] bg-[#F4EDE2]/40 text-center"
                >
                  <Plus className="w-6 h-6 text-[#F59E0B] mb-1.5" />
                  <span className="text-xs font-black text-[#2B2523]">Nova Campanha</span>
                  <span className="text-[10px] text-[#69433C] mt-1 px-4">
                    Aguardando inserção de produtos...
                  </span>
                </motion.div>
              )}

              {isReady && !isDistributing && (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-2 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/50 flex items-center justify-between text-[10px] font-black text-[#2B2523]"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Campanha pronta ✓
                  </span>
                  <span className="text-[9px] text-[#69433C] font-semibold">Validação OK</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products List */}
            {showProducts && (
              <div className="space-y-2">
                {CAMPAIGN_PRODUCTS.map((prod, idx) => (
                  <motion.div
                    key={prod.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.08 }}
                    className="p-2 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] shadow-sm flex items-center gap-2.5 relative overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="w-11 h-11 rounded-lg bg-[#F4EDE2] border border-[#DFDFDD] overflow-hidden shrink-0">
                      <AnimatePresence>
                        {showImages ? (
                          <motion.img
                            key="img"
                            initial={{ opacity: 0, scale: 1.15 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35 }}
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <motion.div
                            key="placeholder"
                            exit={{ opacity: 0 }}
                            className="w-full h-full flex items-center justify-center"
                          >
                            <div className="w-4 h-4 rounded bg-[#BDA78B]/40 animate-pulse" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-extrabold text-[#2B2523] truncate">
                        {prod.name}
                      </div>
                      <div className="text-[9px] text-[#69433C]">{prod.unit}</div>
                      {showPrices ? (
                        <motion.div
                          initial={{ opacity: 0, y: 3 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-baseline gap-1.5 mt-0.5"
                        >
                          <span className="text-[9px] text-[#8F817A] line-through">
                            {prod.originalPrice}
                          </span>
                          <span className="text-xs font-black text-[#F59E0B]">{prod.price}</span>
                        </motion.div>
                      ) : (
                        <div className="w-16 h-3 rounded bg-[#F4EDE2] animate-pulse mt-1" />
                      )}
                    </div>

                    {/* Badge */}
                    {showPrices && (
                      <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-[#F59E0B]/20 text-[#2B2523] border border-[#F59E0B]/30 shrink-0">
                        {prod.badge}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Distribution Status */}
            {isDistributing && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-auto p-2.5 rounded-xl bg-[#2B2523] text-white space-y-2"
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-extrabold text-[#F59E0B] flex items-center gap-1.5">
                    <Send className="w-3 h-3 animate-pulse shrink-0" />
                    {isCompleted ? 'Distribuído ✓' : 'Distribuindo...'}
                  </span>
                  <span className="text-[9px] text-[#BDA78B]">12 Lojas</span>
                </div>
                <div className="space-y-1 pt-1 border-t border-white/10">
                  {[
                    { name: 'Loja Centro', ready: true },
                    { name: 'Loja Norte', ready: true },
                    { name: 'Loja Sul', ready: isCompleted },
                  ].map((store, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-[9px] text-white/90"
                    >
                      <span>✓ {store.name}</span>
                      <span className={store.ready ? 'text-[#F59E0B] font-bold' : 'text-white/40'}>
                        {store.ready ? 'Sincronizado' : 'Enviando...'}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Tab Bar */}
          <div className="bg-[#FFFFFF] border-t border-[#DFDFDD] py-1.5 px-4 flex items-center justify-around shrink-0">
            {['Campanhas', 'Produtos', 'Unidades', 'Matriz'].map((tab, i) => (
              <span
                key={tab}
                className={`text-[9px] font-black ${i === 0 ? 'text-[#F59E0B]' : 'text-[#8F817A]'}`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Home Indicator */}
          <div className="bg-[#FFFFFF] pb-2 pt-0.5 flex justify-center shrink-0">
            <div className="w-24 h-[3px] bg-[#2B2523]/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
