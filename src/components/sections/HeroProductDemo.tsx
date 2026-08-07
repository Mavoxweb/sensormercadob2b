'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Store, 
  Layers, 
  CheckCircle2, 
  RefreshCw, 
  Sparkles, 
  Share2, 
  Download, 
  FileText,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { StatusDot } from '../ui/StatusDot';

export const HeroProductDemo: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const steps = [
    { title: '01. Campanha criada pela Matriz', desc: 'Definição do tema e regras da marca' },
    { title: '02. Carregamento dos modelos', desc: 'Moldura, cores e regras de validação' },
    { title: '03. Produtos e preços inseridos', desc: 'Imagens tratadas e ofertas aplicadas' },
    { title: '04. Distribuição instantânea', desc: 'Envio simultâneo para 12 unidades da rede' },
    { title: '05. Unidades prontas & Aprovadas', desc: 'Lojas adaptadas e prontas para publicar' }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 lg:mt-16">
      {/* Direct Demo Link Banner Bar */}
      <div className="mb-4 p-3 rounded-xl bg-[#20D477]/10 border border-[#20D477]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#F4F7F5] font-semibold text-center sm:text-left">
          <Sparkles className="w-4 h-4 text-[#20D477] shrink-0" />
          <span>Quer testar a versão em tempo real completa da plataforma?</span>
        </div>
        <a
          href="https://www.sensormercado.com.br/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#20D477] text-[#090D0F] font-extrabold hover:bg-[#18BC68] transition-colors shrink-0 active:scale-95"
        >
          <span>Acessar www.sensormercado.com.br/demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Mockup Shell Container */}
      <div className="relative rounded-2xl bg-[#0D1215] border border-[#253039] shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top Glow Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#20D477] to-transparent opacity-80" />

        {/* Software Header Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#12181D] border-b border-[#253039] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* macOS Style Window Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF5B5B]/80" />
              <span className="w-3 h-3 rounded-full bg-[#F5B942]/80" />
              <span className="w-3 h-3 rounded-full bg-[#20D477]/80" />
            </div>

            <div className="h-4 w-px bg-[#253039]" />

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#20D477]/10 text-[#20D477] flex items-center justify-center font-bold text-xs">
                SM
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#F4F7F5] truncate max-w-[200px] sm:max-w-none">
                SENSOR MERCADO <span className="text-[#A7B0AB] font-normal">| Redes SuperMais (12 Lojas)</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusDot status="ready" label="Matriz Conectada" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-[#171E24] border border-[#253039] text-[#A7B0AB] hover:text-[#20D477] flex items-center gap-1.5 transition-colors min-h-[36px]"
            >
              <RefreshCw className={`w-3 h-3 ${isPlaying ? 'animate-spin' : ''}`} />
              <span>{isPlaying ? 'Auto' : 'Pausado'}</span>
            </button>
          </div>
        </div>

        {/* Step Progress Controller */}
        <div className="bg-[#090D0F] border-b border-[#253039] px-4 py-2.5 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[650px] gap-2">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              const isDone = activeStep > idx;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-left transition-all duration-200 border min-h-[44px] ${
                    isActive
                      ? 'bg-[#171E24] border-[#20D477] text-[#20D477] shadow-[0_0_15px_rgba(32,212,119,0.15)]'
                      : isDone
                      ? 'bg-[#12181D] border-[#20D477]/30 text-[#F4F7F5]'
                      : 'bg-transparent border-transparent text-[#6F7B75] hover:text-[#A7B0AB]'
                  }`}
                >
                  <div className="text-[11px] font-bold truncate flex items-center justify-between">
                    <span>{st.title}</span>
                    {isDone && <CheckCircle2 className="w-3 h-3 text-[#20D477]" />}
                  </div>
                  <div className="text-[10px] text-[#A7B0AB] truncate">{st.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Software Dashboard Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] text-xs">
          {/* Left Column: MATRIZ CONTROLS */}
          <div className="lg:col-span-3 bg-[#12181D] p-4 border-r border-[#253039] flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#253039]">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#20D477]" />
                <span className="font-bold text-[#F4F7F5] uppercase tracking-wider text-[11px]">
                  Painel Matriz
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#20D477]/10 text-[#20D477] font-semibold">
                Central
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#171E24] border border-[#20D477]/40 flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#F4F7F5]">Campanha Ativa</div>
                  <div className="text-[10px] text-[#A7B0AB]">Semanão SuperMais</div>
                </div>
                <Sparkles className="w-4 h-4 text-[#20D477]" />
              </div>

              <div className="p-2.5 rounded-lg bg-[#090D0F] border border-[#253039] flex items-center justify-between">
                <div>
                  <div className="font-medium text-[#A7B0AB]">Manual de Marca</div>
                  <div className="text-[10px] text-[#6F7B75]">Cores & Fontes Travadas</div>
                </div>
                <ShieldCheck className="w-4 h-4 text-[#20D477]" />
              </div>

              <div className="p-2.5 rounded-lg bg-[#090D0F] border border-[#253039] flex items-center justify-between">
                <div>
                  <div className="font-medium text-[#A7B0AB]">Modelos de Encarte</div>
                  <div className="text-[10px] text-[#6F7B75]">A4, Feed & Stories</div>
                </div>
                <Layers className="w-4 h-4 text-[#A7B0AB]" />
              </div>
            </div>

            {/* Campaign Metrics Pill */}
            <div className="mt-auto p-3 rounded-xl bg-[#171E24] border border-[#253039]">
              <div className="text-[10px] text-[#A7B0AB] font-semibold uppercase tracking-wider">
                Status Global
              </div>
              <div className="text-xl font-extrabold text-[#20D477] mt-1 flex items-baseline gap-1">
                12 <span className="text-xs font-normal text-[#F4F7F5]">Lojas Sincronizadas</span>
              </div>
              <div className="text-[10px] text-[#6F7B75] mt-1">100% de adesão ao padrão visual</div>
            </div>
          </div>

          {/* Center Column: LIVE FLYER WORKSPACE */}
          <div className="lg:col-span-6 bg-[#090D0F] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient workspace glow */}
            <div className="absolute inset-0 bg-radial from-[#20D477]/5 via-transparent to-transparent pointer-events-none" />

            {/* Toolbar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#253039]">
              <div className="flex items-center gap-2 truncate">
                <FileText className="w-4 h-4 text-[#20D477] shrink-0" />
                <span className="font-bold text-[#F4F7F5] truncate">Encarte Semanão</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#253039] text-[#A7B0AB] shrink-0">
                  A4 Impresso
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded bg-[#171E24] text-[#A7B0AB] hover:text-[#20D477] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                <button className="p-1.5 rounded bg-[#171E24] text-[#A7B0AB] hover:text-[#20D477] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Live Simulated Retail Canvas */}
            <div className="relative rounded-xl bg-[#0D1215] border border-[#253039] p-3 sm:p-4 shadow-inner flex flex-col gap-3">
              {/* Header Banner inside Canvas */}
              <div className="rounded-lg bg-gradient-to-r from-[#0E8F4C] via-[#20D477] to-[#0E8F4C] p-2.5 sm:p-3 text-center shadow-md">
                <div className="text-[9px] sm:text-[10px] font-black tracking-widest text-[#090D0F] uppercase">
                  REDE SUPERMAIS • OFERTAS VÁLIDAS ATÉ DOMINGO
                </div>
                <div className="text-base sm:text-lg font-black text-[#090D0F] uppercase tracking-tight -mt-0.5">
                  SEMANÃO DA ECONOMIA
                </div>
              </div>

              {/* Product Grid inside Canvas */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {[
                  { 
                    name: 'Arroz Tipo 1 5kg', 
                    price: '21,90', 
                    orig: '28,90', 
                    badge: 'OFERTAÇO',
                    img: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=400&q=80' 
                  },
                  { 
                    name: 'Feijão Carioca 1kg', 
                    price: '5,99', 
                    orig: '8,50', 
                    badge: 'DESTAQUE',
                    img: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80' 
                  },
                  { 
                    name: 'Picanha Grill kg', 
                    price: '59,90', 
                    orig: '79,90', 
                    badge: 'PREMIUM',
                    img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' 
                  },
                  { 
                    name: 'Café Torrado 500g', 
                    price: '14,90', 
                    orig: '18,90', 
                    badge: 'DIÁRIO',
                    img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80' 
                  },
                ].map((prod, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="p-2 sm:p-2.5 rounded-lg bg-[#12181D] border border-[#253039] hover:border-[#20D477]/50 transition-all flex flex-col justify-between relative group overflow-hidden"
                  >
                    <span className="absolute top-2 left-2 z-10 text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#20D477] text-[#090D0F]">
                      {prod.badge}
                    </span>

                    <div className="h-20 sm:h-24 w-full rounded-md bg-[#171E24] overflow-hidden my-1 relative group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={prod.img}
                        alt={prod.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-[#F4F7F5] truncate">{prod.name}</div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-[9px] sm:text-[10px] text-[#6F7B75] line-through">R$ {prod.orig}</span>
                        <span className="text-xs sm:text-sm font-extrabold text-[#20D477]">R$ {prod.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Banner */}
              <div className="p-2 rounded-lg bg-[#171E24] border border-[#20D477]/30 flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] sm:text-[11px]">
                <span className="text-[#A7B0AB] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#20D477] animate-pulse" />
                  Visualização da Matriz sincronizada em tempo real
                </span>
                <span className="text-[#20D477] font-semibold">100% Protegido</span>
              </div>
            </div>
          </div>

          {/* Right Column: UNIDADES FEEDBACK */}
          <div className="lg:col-span-3 bg-[#12181D] p-4 border-l border-[#253039] flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#253039]">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-[#20D477]" />
                <span className="font-bold text-[#F4F7F5] uppercase tracking-wider text-[11px]">
                  Status Unidades
                </span>
              </div>
              <span className="text-[10px] text-[#A7B0AB] font-semibold">12 Lojas</span>
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[330px] pr-1">
              {[
                { name: 'Loja 01 — Centro (Matriz)', status: 'Pronto ✓', price: 'R$ 21,90' },
                { name: 'Loja 02 — Zona Norte', status: 'Pronto ✓', price: 'R$ 21,90' },
                { name: 'Loja 03 — Zona Sul', status: 'Pronto ✓', price: 'R$ 22,50' },
                { name: 'Loja 04 — Shopping Plaza', status: 'Pronto ✓', price: 'R$ 22,90' },
                { name: 'Loja 05 — Av. Jardim', status: 'Pronto ✓', price: 'R$ 21,90' },
                { name: 'Loja 06 — Aeroporto', status: 'Pronto ✓', price: 'R$ 22,90' },
              ].map((store, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border text-[11px] transition-all ${
                    activeStep >= 3
                      ? 'bg-[#171E24] border-[#20D477]/30 text-[#F4F7F5]'
                      : 'bg-[#090D0F] border-[#253039] text-[#6F7B75]'
                  }`}
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span className="truncate max-w-[130px]">{store.name}</span>
                    <span className="text-[#20D477] font-bold">{store.status}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-[#A7B0AB]">
                    <span>Preço Local: {store.price}</span>
                    <span className="text-[9px] text-[#6F7B75]">Autonomia OK</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom summary banner */}
            <div className="mt-auto p-3 rounded-xl bg-[#20D477]/10 border border-[#20D477]/30 text-center">
              <div className="text-xs font-bold text-[#20D477]">12 de 12 Lojas Prontas</div>
              <div className="text-[10px] text-[#A7B0AB] mt-0.5">Sem fila no WhatsApp ou designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
