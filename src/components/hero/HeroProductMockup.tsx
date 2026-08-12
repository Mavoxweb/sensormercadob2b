'use client';

import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { useCampaignSimulation, CampaignState } from './CampaignSimulation';
import { MobileAppMockup } from './MobileAppMockup';
import { MatrixStatusCard } from './MatrixStatusCard';
import { StoreStatusCard } from './StoreStatusCard';
import { FlyerPreview } from './FlyerPreview';

export const HeroProductMockup: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { currentState, isPaused, setIsPaused, setSpecificState, stateIndex } =
    useCampaignSimulation(!shouldReduceMotion);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height / 2)));
    setMousePos({ x: nx, y: ny });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  // Parallax deltas
  const phoneX = mousePos.x * 6;
  const phoneY = mousePos.y * 6;
  const cardsX = mousePos.x * 10;
  const cardsY = mousePos.y * 10;

  type StateStep = { state: CampaignState; label: string };

  const stateLabels: StateStep[] = [
    { state: 'idle', label: '① Criar' },
    { state: 'products', label: '② Produtos' },
    { state: 'images', label: '③ Fotos' },
    { state: 'prices', label: '④ Preços' },
    { state: 'branding', label: '⑤ Marca' },
    { state: 'ready', label: '⑥ Encarte' },
    { state: 'distributing', label: '⑦ Envio' },
    { state: 'completed', label: '⑧ Lojas' },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[580px] mx-auto py-4 lg:py-6"
    >
      {/* Ambient Glow Behind Mockup */}
      <div
        className="absolute inset-x-[15%] top-[10%] bottom-[10%] rounded-full bg-[#F59E0B]/12 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-[25%] top-[20%] bottom-[20%] rounded-full bg-[#69433C]/6 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* ─── State Controller Pill ─── */}
      <div
        className="mb-5 flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] shadow-sm"
        aria-label="Etapas da campanha"
      >
        {stateLabels.map((st) => (
          <button
            key={st.state}
            onClick={() => {
              setSpecificState(st.state);
              setIsPaused(true);
            }}
            className={`px-2.5 py-1 rounded-xl text-[10px] sm:text-[11px] font-black transition-all duration-200 ${
              currentState === st.state
                ? 'bg-[#F59E0B] text-[#2B2523] shadow-sm scale-[1.06]'
                : 'bg-transparent text-[#69433C] hover:bg-[#F4EDE2]'
            }`}
          >
            {st.label}
          </button>
        ))}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-1 p-1.5 rounded-xl bg-[#F4EDE2] text-[#2B2523] hover:bg-[#F59E0B]/20 transition-colors"
          aria-label={isPaused ? 'Iniciar animação' : 'Pausar animação'}
          title={isPaused ? 'Iniciar animação' : 'Pausar animação'}
        >
          {isPaused ? (
            <Play className="w-3.5 h-3.5" />
          ) : (
            <Pause className="w-3.5 h-3.5 text-[#F59E0B]" />
          )}
        </button>
      </div>

      {/* ─── Main Stage: Smartphone + Floating Cards ─── */}
      <div className="relative flex justify-center items-center min-h-[500px] sm:min-h-[580px]">

        {/* DESKTOP ONLY: Floating Card — Matriz Status (Top Left) */}
        <motion.div
          className="hidden lg:block absolute left-0 top-8 z-20"
          animate={{ x: cardsX, y: cardsY }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <MatrixStatusCard currentState={currentState} />
        </motion.div>

        {/* DESKTOP ONLY: Floating Card — Flyer Preview (Right Middle) */}
        <motion.div
          className="hidden lg:block absolute -right-4 top-28 z-30"
          animate={{ x: -cardsX * 0.8, y: cardsY * 0.7 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <FlyerPreview currentState={currentState} />
        </motion.div>

        {/* DESKTOP ONLY: Floating Card — Store Status (Bottom Right) */}
        <motion.div
          className="hidden lg:block absolute -right-2 bottom-4 z-20"
          animate={{ x: -cardsX, y: -cardsY }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <StoreStatusCard currentState={currentState} />
        </motion.div>

        {/* Central Smartphone — always visible */}
        <motion.div
          className="z-10 w-[78%] sm:w-[82%] lg:w-[75%] max-w-[340px] relative"
          animate={{ x: phoneX, y: phoneY }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <MobileAppMockup currentState={currentState} stateIndex={stateIndex} />

          {/* Connection Badge: Gerencie tudo na palma da sua mão */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DFDFDD] shadow-lg flex items-center gap-2 pointer-events-none transition-transform hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-black text-[#69433C] tracking-tight whitespace-nowrap">
              Gerencie tudo na palma da sua mão
            </span>
          </div>
        </motion.div>
      </div>

      {/* ─── MOBILE ONLY: Status Cards below phone ─── */}
      <div className="lg:hidden mt-6 space-y-3 px-2" aria-hidden="true">
        <MatrixStatusCard currentState={currentState} />
        <div className="w-full overflow-hidden">
          <FlyerPreview currentState={currentState} className="w-full" />
        </div>
        <StoreStatusCard currentState={currentState} />
      </div>
    </div>
  );
};
