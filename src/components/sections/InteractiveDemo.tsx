'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Store, 
  ShoppingBag, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  Tag, 
  Play,
  FileCheck,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { PRODUCTS_BY_SEGMENT } from '@/data/mockData';
import { SegmentType, CampaignType, UnitCount } from '@/types';

export const InteractiveDemo: React.FC = () => {
  const [segment, setSegment] = useState<SegmentType>('supermercado');
  const [campaign, setCampaign] = useState<CampaignType>('semana');
  const [unitCount, setUnitCount] = useState<UnitCount>(10);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStep, setGenerationStep] = useState<number>(0);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);

  const segmentLabels: Record<SegmentType, string> = {
    supermercado: 'Supermercado',
    hortifruti: 'Hortifrúti',
    acougue: 'Açougue',
    padaria: 'Padaria',
  };

  const campaignLabels: Record<CampaignType, string> = {
    semana: 'Ofertas da semana',
    fim_de_semana: 'Fim de semana',
    especiais: 'Ofertas especiais',
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setHasGenerated(false);
    setGenerationStep(1);

    setTimeout(() => setGenerationStep(2), 700);
    setTimeout(() => setGenerationStep(3), 1500);
    setTimeout(() => setGenerationStep(4), 2200);
    setTimeout(() => {
      setGenerationStep(5);
      setIsGenerating(false);
      setHasGenerated(true);
    }, 2900);
  };

  const currentProducts = PRODUCTS_BY_SEGMENT[segment] || PRODUCTS_BY_SEGMENT['supermercado'];

  const scrollToDemo = () => {
    const el = document.querySelector('#demonstracao');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="prototipo" className="py-16 sm:py-20 lg:py-32 bg-[#090D0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="EXPERIMENTE AGORA"
          title="Não imagine. Gere um encarte em tempo real."
          description="Escolha entre algumas opções guiadas e veja um encarte ganhar forma na hora. Esta é uma versão demonstrativa — a plataforma da sua rede será personalizada com sua marca, regras e unidades."
        />

        {/* Live Demo Banner Card */}
        <div className="max-w-4xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-[#12181D] border border-[#20D477]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#20D477]/10 text-[#20D477] flex items-center justify-center shrink-0 border border-[#20D477]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F4F7F5]">
                Ambiente Completo de Demonstração On-line
              </div>
              <div className="text-xs text-[#A7B0AB]">
                Acesse o ambiente oficial de teste: <span className="text-[#20D477] font-semibold">https://www.sensormercado.com.br/demo</span>
              </div>
            </div>
          </div>
          <a
            href="https://www.sensormercado.com.br/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black bg-[#20D477] text-[#090D0F] hover:bg-[#18BC68] transition-colors shrink-0 shadow-[0_0_15px_rgba(32,212,119,0.3)] active:scale-95 min-h-[44px]"
          >
            <span>ACESSAR DEMO LIVE</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Simulator Main Card */}
        <div className="rounded-2xl bg-[#0D1215] border border-[#253039] p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Top Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[#253039]">
            {/* 1. Segmento */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#A7B0AB] flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#20D477]" />
                1. Segmento da Rede
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['supermercado', 'hortifruti', 'acougue', 'padaria'] as SegmentType[]).map((seg) => (
                  <button
                    key={seg}
                    onClick={() => {
                      setSegment(seg);
                      setHasGenerated(false);
                    }}
                    className={`px-3 py-3 rounded-xl text-xs font-semibold border transition-all text-left truncate min-h-[44px] ${
                      segment === seg
                        ? 'bg-[#171E24] border-[#20D477] text-[#20D477] shadow-[0_0_12px_rgba(32,212,119,0.2)]'
                        : 'bg-[#12181D] border-[#253039] text-[#A7B0AB] hover:text-[#F4F7F5]'
                    }`}
                  >
                    {segmentLabels[seg]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Campanha */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#A7B0AB] flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#20D477]" />
                2. Tipo de Campanha
              </label>
              <div className="flex flex-col gap-2">
                {(['semana', 'fim_de_semana', 'especiais'] as CampaignType[]).map((camp) => (
                  <button
                    key={camp}
                    onClick={() => {
                      setCampaign(camp);
                      setHasGenerated(false);
                    }}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all text-left min-h-[44px] ${
                      campaign === camp
                        ? 'bg-[#171E24] border-[#20D477] text-[#20D477] shadow-[0_0_12px_rgba(32,212,119,0.2)]'
                        : 'bg-[#12181D] border-[#253039] text-[#A7B0AB] hover:text-[#F4F7F5]'
                    }`}
                  >
                    {campaignLabels[camp]}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Unidades */}
            <div className="space-y-2.5 flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#A7B0AB] flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#20D477]" />
                  3. Número de Unidades
                </label>
                <div className="grid grid-cols-4 gap-2 mt-2.5">
                  {([5, 10, 20, 50] as UnitCount[]).map((count) => (
                    <button
                      key={count}
                      onClick={() => {
                        setUnitCount(count);
                        setHasGenerated(false);
                      }}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all min-h-[44px] ${
                        unitCount === count
                          ? 'bg-[#20D477] border-[#52E79A] text-[#090D0F] shadow-[0_0_15px_rgba(32,212,119,0.3)]'
                          : 'bg-[#12181D] border-[#253039] text-[#A7B0AB] hover:text-[#F4F7F5]'
                      }`}
                    >
                      {count} lojas
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button with BLOCO 3 Copy & Microcopy */}
              <div className="mt-4 space-y-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGenerate}
                  isLoading={isGenerating}
                  className="w-full min-h-[50px] font-black text-sm"
                  leftIcon={!isGenerating ? <Play className="w-4 h-4 fill-current" /> : undefined}
                >
                  {isGenerating ? 'GERANDO ENCARTE...' : 'Gerar meu encarte'}
                </Button>

                {/* Microcopy: Leva menos de 1 minuto. Nenhum cadastro para testar. */}
                <p className="text-[11px] text-[#A7B0AB] text-center font-medium">
                  Leva menos de 1 minuto. Nenhum cadastro para testar.
                </p>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="pt-8">
            {/* Generating Loading Progress */}
            {isGenerating && (
              <div className="py-12 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#171E24] border border-[#20D477]/50 flex items-center justify-center text-[#20D477] animate-pulse green-shadow">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
                <div className="space-y-2">
                  <div className="text-base sm:text-lg font-bold text-[#F4F7F5]">
                    {generationStep === 1 && '1. Gerando encarte na Matriz...'}
                    {generationStep === 2 && '2. Carregando imagens de produtos...'}
                    {generationStep === 3 && '3. Aplicando identidade e molduras da marca...'}
                    {generationStep === 4 && `4. Distribuindo encarte para ${unitCount} unidades...`}
                    {generationStep === 5 && '5. Encarte finalizado com sucesso!'}
                  </div>
                  <div className="w-full max-w-xs h-2 rounded-full bg-[#12181D] mx-auto overflow-hidden">
                    <motion.div
                      className="h-full bg-[#20D477]"
                      initial={{ width: '0%' }}
                      animate={{ width: `${(generationStep / 5) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Generated Campaign Output View */}
            {hasGenerated && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Header Summary Bar */}
                <div className="p-4 rounded-xl bg-[#171E24] border border-[#20D477]/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/30 shrink-0">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-extrabold text-[#F4F7F5]">
                        Encarte da Rede: {campaignLabels[campaign]} ({segmentLabels[segment]})
                      </div>
                      <div className="text-xs text-[#A7B0AB]">
                        Distribuído para {unitCount} unidades com autonomia de preços locais ativada
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#20D477]/20 text-[#20D477] font-bold text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Status: {unitCount} de {unitCount} Prontas
                  </span>
                </div>

                {/* Generated Flyer Canvas + Stores Status Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Generated Flyer Artwork Canvas */}
                  <div className="lg:col-span-7 bg-[#12181D] rounded-xl border border-[#253039] p-4 sm:p-5 shadow-lg flex flex-col justify-between">
                    <div>
                      {/* Flyer Header Banner */}
                      <div className="rounded-lg bg-gradient-to-r from-[#0E8F4C] via-[#20D477] to-[#0E8F4C] p-3 sm:p-4 text-center mb-4">
                        <div className="text-[10px] font-black tracking-widest text-[#090D0F] uppercase">
                          SUA REDE DE SUPERMERCADOS • MATRIZ
                        </div>
                        <div className="text-lg sm:text-xl font-black text-[#090D0F] uppercase tracking-tight">
                          {campaignLabels[campaign]}
                        </div>
                      </div>

                      {/* 6 Products Grid with Product Images */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {currentProducts.slice(0, 6).map((prod) => (
                          <div
                            key={prod.id}
                            className="p-2.5 sm:p-3 rounded-lg bg-[#090D0F] border border-[#253039] flex flex-col justify-between relative group hover:border-[#20D477]/50 transition-all overflow-hidden"
                          >
                            {prod.tag && (
                              <span className="text-[8px] sm:text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#20D477] text-[#090D0F] uppercase self-start mb-1 z-10">
                                {prod.tag}
                              </span>
                            )}

                            {/* Product Image Container */}
                            <div className="h-20 sm:h-24 rounded-md bg-[#171E24] overflow-hidden my-1.5 relative group-hover:scale-105 transition-transform duration-300">
                              {prod.imageUrl ? (
                                <img
                                  src={prod.imageUrl}
                                  alt={prod.name}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#6F7B75] text-[10px] font-semibold p-1 text-center">
                                  {prod.name}
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="text-[10px] sm:text-[11px] font-bold text-[#F4F7F5] truncate">{prod.name}</div>
                              <div className="flex items-baseline gap-1 mt-0.5">
                                <span className="text-[9px] sm:text-[10px] text-[#6F7B75] line-through">{prod.originalPrice}</span>
                                <span className="text-xs font-extrabold text-[#20D477]">{prod.offerPrice}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#253039] flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-[#A7B0AB]">
                      <span>Manual de Marca: 100% Protegido</span>
                      <span className="text-[#20D477] font-semibold">Formatos: A4 Impresso, Feed 1:1, Stories 9:16</span>
                    </div>
                  </div>

                  {/* Right: Store Units Status Breakdown */}
                  <div className="lg:col-span-5 bg-[#12181D] rounded-xl border border-[#253039] p-4 sm:p-5 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#253039]">
                        <span className="font-bold text-sm text-[#F4F7F5] flex items-center gap-2">
                          <Store className="w-4 h-4 text-[#20D477]" />
                          Unidades Recebedoras
                        </span>
                        <span className="text-xs text-[#20D477] font-bold">{unitCount} Lojas</span>
                      </div>

                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                        {Array.from({ length: Math.min(unitCount, 8) }).map((_, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-[#090D0F] border border-[#20D477]/30 flex items-center justify-between text-xs"
                          >
                            <div>
                              <div className="font-bold text-[#F4F7F5]">
                                Loja {String(idx + 1).padStart(2, '0')} — {['Centro', 'Norte', 'Sul', 'Shopping', 'Jardim', 'Vila Nova', 'Aeroporto', 'Parque'][idx % 8]}
                              </div>
                              <div className="text-[10px] text-[#A7B0AB]">
                                Preço adaptado regionalmente
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-[#20D477]/10 text-[#20D477] font-bold text-[10px]">
                              Pronto ✓
                            </span>
                          </div>
                        ))}
                        {unitCount > 8 && (
                          <div className="p-2 text-center text-xs text-[#6F7B75]">
                            + {unitCount - 8} unidades sincronizadas simultaneamente
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Final Conclusion Copy & CTA from BLOCO 3 */}
                    <div className="pt-4 border-t border-[#253039] space-y-3">
                      <p className="text-xs sm:text-sm text-[#F4F7F5] font-semibold text-center leading-relaxed">
                        Agora imagine todas as suas unidades criando assim — com a identidade e o controle da sua rede.
                      </p>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={scrollToDemo}
                        className="w-full justify-center min-h-[44px] font-bold text-xs"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Agendar demonstração personalizada
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Default Initial State Message when not yet generated */}
            {!hasGenerated && !isGenerating && (
              <div className="py-10 sm:py-12 bg-[#12181D] rounded-xl border border-[#253039] text-center space-y-3 p-4">
                <Sparkles className="w-8 h-8 text-[#20D477] mx-auto" />
                <h4 className="text-base sm:text-lg font-bold text-[#F4F7F5]">Configure acima e clique em "Gerar meu encarte"</h4>
                <p className="text-xs text-[#A7B0AB] max-w-md mx-auto">
                  Leva menos de 1 minuto. Nenhum cadastro para testar.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
