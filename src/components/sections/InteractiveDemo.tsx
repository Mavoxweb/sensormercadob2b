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
    <section id="prototipo" className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] relative overflow-hidden border-t border-[#DFDFDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="EXPERIMENTE AGORA"
          title="Não acredita? Faz um agora."
          description="Escolha alguns produtos e veja o encarte pronto na hora. É só uma amostra. A plataforma da sua rede vem com a sua marca e as suas lojas."
        />

        {/* Live Demo Banner Card */}
        <div className="max-w-4xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-[#2B2523]">
                Ambiente Completo de Demonstração On-line
              </div>
              <div className="text-xs text-[#69433C]">
                Acesse o ambiente oficial de teste: <span className="text-[#F59E0B] font-bold">https://www.sensormercado.com.br/demo</span>
              </div>
            </div>
          </div>
          <a
            href="https://www.sensormercado.com.br/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-black bg-[#F59E0B] text-[#2B2523] hover:bg-[#E89005] transition-colors shrink-0 shadow-sm active:scale-95 min-h-[44px]"
          >
            <span>ACESSAR DEMO LIVE</span>
            <ExternalLink className="w-4 h-4 text-[#2B2523]" />
          </a>
        </div>

        {/* Simulator Main Card */}
        <div className="rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] p-4 sm:p-8 lg:p-10 shadow-sm">
          {/* Top Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[#DFDFDD]">
            {/* 1. Segmento */}
            <div className="space-y-2.5">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#69433C] flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#F59E0B]" />
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
                    className={`px-3 py-3 rounded-xl text-xs font-bold border transition-all text-left truncate min-h-[44px] ${
                      segment === seg
                        ? 'bg-[#FFFFFF] border-[#F59E0B] text-[#2B2523] shadow-sm font-extrabold'
                        : 'bg-[#F9F7F3] border-[#DFDFDD] text-[#69433C] hover:text-[#2B2523]'
                    }`}
                  >
                    {segmentLabels[seg]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Campanha */}
            <div className="space-y-2.5">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#69433C] flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#F59E0B]" />
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
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold border transition-all text-left min-h-[44px] ${
                      campaign === camp
                        ? 'bg-[#FFFFFF] border-[#F59E0B] text-[#2B2523] shadow-sm font-extrabold'
                        : 'bg-[#F9F7F3] border-[#DFDFDD] text-[#69433C] hover:text-[#2B2523]'
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
                <label className="text-xs font-extrabold uppercase tracking-wider text-[#69433C] flex items-center gap-2">
                  <Store className="w-4 h-4 text-[#F59E0B]" />
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
                      className={`py-2.5 rounded-xl text-xs font-black border transition-all min-h-[44px] ${
                        unitCount === count
                          ? 'bg-[#F59E0B] border-[#E89005] text-[#2B2523] shadow-sm'
                          : 'bg-[#F9F7F3] border-[#DFDFDD] text-[#69433C] hover:text-[#2B2523]'
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
                  leftIcon={!isGenerating ? <Play className="w-4 h-4 fill-current text-[#2B2523]" /> : undefined}
                >
                  {isGenerating ? 'GERANDO ENCARTE...' : 'Gerar meu encarte'}
                </Button>

                {/* Microcopy: Leva menos de 1 minuto. Sem cadastro pra testar. */}
                <p className="text-[11px] text-[#69433C] text-center font-semibold">
                  Leva menos de 1 minuto. Sem cadastro pra testar.
                </p>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="pt-8">
            {/* Generating Loading Progress */}
            {isGenerating && (
              <div className="py-12 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/50 flex items-center justify-center text-[#F59E0B] animate-pulse shadow-md">
                  <RefreshCw className="w-8 h-8 animate-spin" />
                </div>
                <div className="space-y-2">
                  <div className="text-base sm:text-lg font-extrabold text-[#2B2523]">
                    {generationStep === 1 && '1. Gerando encarte na Matriz...'}
                    {generationStep === 2 && '2. Carregando imagens de produtos...'}
                    {generationStep === 3 && '3. Aplicando identidade e molduras da marca...'}
                    {generationStep === 4 && `4. Distribuindo encarte para ${unitCount} unidades...`}
                    {generationStep === 5 && '5. Encarte finalizado com sucesso!'}
                  </div>
                  <div className="w-full max-w-xs h-2.5 rounded-full bg-[#F4EDE2] mx-auto overflow-hidden">
                    <motion.div
                      className="h-full bg-[#F59E0B]"
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
                <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#F59E0B]/40 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#FFFFFF] text-[#F59E0B] border border-[#F59E0B]/30 shrink-0 shadow-sm">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-extrabold text-[#2B2523]">
                        Encarte da Rede: {campaignLabels[campaign]} ({segmentLabels[segment]})
                      </div>
                      <div className="text-xs text-[#69433C]">
                        Distribuído para {unitCount} unidades com autonomia de preços locais ativada
                      </div>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#2B2523] font-extrabold text-xs flex items-center gap-1.5 border border-[#F59E0B]/40">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                    Status: {unitCount} de {unitCount} Prontas
                  </span>
                </div>

                {/* Generated Flyer Canvas + Stores Status Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Generated Flyer Artwork Canvas */}
                  <div className="lg:col-span-7 bg-[#F9F7F3] rounded-xl border border-[#DFDFDD] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      {/* Flyer Header Banner */}
                      <div className="rounded-lg bg-gradient-to-r from-[#F59E0B] via-[#E89005] to-[#F59E0B] p-3 sm:p-4 text-center mb-4 shadow-sm">
                        <div className="text-[10px] font-black tracking-widest text-[#2B2523] uppercase">
                          SUA REDE DE SUPERMERCADOS • MATRIZ
                        </div>
                        <div className="text-lg sm:text-xl font-black text-[#2B2523] uppercase tracking-tight drop-shadow-sm">
                          {campaignLabels[campaign]}
                        </div>
                      </div>

                      {/* 6 Products Grid with Product Images */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                        {currentProducts.slice(0, 6).map((prod) => (
                          <div
                            key={prod.id}
                            className="p-2.5 sm:p-3 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] flex flex-col justify-between relative group hover:border-[#F59E0B] transition-all overflow-hidden shadow-sm"
                          >
                            {prod.tag && (
                              <span className="text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded bg-[#F59E0B] text-[#2B2523] uppercase self-start mb-1 z-10 shadow-sm">
                                {prod.tag}
                              </span>
                            )}

                            {/* Product Image Container */}
                            <div className="h-20 sm:h-24 rounded-md bg-[#F9F7F3] overflow-hidden my-1.5 relative group-hover:scale-105 transition-transform duration-300 border border-[#DFDFDD]/60">
                              {prod.imageUrl ? (
                                <img
                                  src={prod.imageUrl}
                                  alt={prod.name}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-[#8F817A] text-[10px] font-bold p-1 text-center">
                                  {prod.name}
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="text-[10px] sm:text-[11px] font-extrabold text-[#2B2523] truncate">{prod.name}</div>
                              <div className="flex items-baseline gap-1 mt-0.5">
                                <span className="text-[9px] sm:text-[10px] text-[#8F817A] line-through">{prod.originalPrice}</span>
                                <span className="text-xs font-black text-[#F59E0B]">{prod.offerPrice}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DFDFDD] flex flex-col sm:flex-row items-center justify-between gap-1 text-xs text-[#69433C]">
                      <span>Manual de Marca: 100% Protegido</span>
                      <span className="text-[#F59E0B] font-extrabold">Formatos: A4 Impresso, Feed 1:1, Stories 9:16</span>
                    </div>
                  </div>

                  {/* Right: Store Units Status Breakdown */}
                  <div className="lg:col-span-5 bg-[#F9F7F3] rounded-xl border border-[#DFDFDD] p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DFDFDD]">
                        <span className="font-extrabold text-sm text-[#2B2523] flex items-center gap-2">
                          <Store className="w-4 h-4 text-[#F59E0B]" />
                          Unidades Recebedoras
                        </span>
                        <span className="text-xs text-[#F59E0B] font-black">{unitCount} Lojas</span>
                      </div>

                      <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                        {Array.from({ length: Math.min(unitCount, 8) }).map((_, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-[#FFFFFF] border border-[#F59E0B]/30 flex items-center justify-between text-xs shadow-sm"
                          >
                            <div>
                              <div className="font-extrabold text-[#2B2523]">
                                Loja {String(idx + 1).padStart(2, '0')} — {['Centro', 'Norte', 'Sul', 'Shopping', 'Jardim', 'Vila Nova', 'Aeroporto', 'Parque'][idx % 8]}
                              </div>
                              <div className="text-[10px] text-[#69433C]">
                                Preço adaptado regionalmente
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#2B2523] font-black text-[10px]">
                              Pronto ✓
                            </span>
                          </div>
                        ))}
                        {unitCount > 8 && (
                          <div className="p-2 text-center text-xs text-[#8F817A] font-semibold">
                            + {unitCount - 8} unidades sincronizadas simultaneamente
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Final Conclusion Copy & CTA from BLOCO 3 */}
                    <div className="pt-4 border-t border-[#DFDFDD] space-y-3">
                      <p className="text-xs sm:text-sm text-[#2B2523] font-bold text-center leading-relaxed">
                        Agora imagina todas as suas lojas criando assim, com a sua marca.
                      </p>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={scrollToDemo}
                        className="w-full justify-center min-h-[44px] font-black text-xs"
                        rightIcon={<ArrowRight className="w-4 h-4 text-[#2B2523]" />}
                      >
                        Agendar demonstração
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Default Initial State Message when not yet generated */}
            {!hasGenerated && !isGenerating && (
              <div className="py-10 sm:py-12 bg-[#F4EDE2] rounded-xl border border-[#DFDFDD] text-center space-y-3 p-4">
                <Sparkles className="w-8 h-8 text-[#F59E0B] mx-auto" />
                <h4 className="text-base sm:text-lg font-extrabold text-[#2B2523]">Configure acima e clique em "Gerar meu encarte"</h4>
                <p className="text-xs text-[#69433C] max-w-md mx-auto font-semibold">
                  Leva menos de 1 minuto. Sem cadastro pra testar.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
