'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Smartphone, CheckCircle2, Leaf } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const PrintToDigital: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="EFICIÊNCIA OPERACIONAL E SUSTENTABILIDADE"
          title="Menos papel e menos custo de impressão"
          description="Reduza drasticamente o gasto com impressão física direcionando clientes para a versão digital."
        />

        {/* Visual Demonstration Container: Printed Stack -> Arrow -> Smartphone App */}
        <div className="mt-12 max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#DFDFDD] shadow-sm relative overflow-hidden">
          
          {/* Top Eco & Cost Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#2B2523] text-xs font-black flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#F59E0B]" />
              Sustentabilidade (ESG)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#69433C]/10 border border-[#69433C]/30 text-[#69433C] text-xs font-black flex items-center gap-1.5">
              💰 Redução de Custos Recorrentes
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#F9F7F3] border border-[#DFDFDD] text-[#2B2523] text-xs font-extrabold">
              Operação de Varejo + Eficiente
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* LEFT: Printed Materials Stack */}
            <div className="md:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-[#F9F7F3] border border-[#DFDFDD]">
              <div className="relative mb-4">
                {/* Visual Stack of Paper Flyers */}
                <div className="w-24 h-32 rounded-lg bg-[#DFDFDD] border border-[#BDA78B]/40 transform -rotate-6 shadow-sm absolute inset-0 -translate-x-2 translate-y-2 opacity-60" />
                <div className="w-24 h-32 rounded-lg bg-[#E89005]/20 border border-[#F59E0B]/40 transform rotate-3 shadow-sm absolute inset-0 translate-x-1 -translate-y-1 opacity-80" />
                <div className="w-24 h-32 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] shadow-md relative z-10 flex flex-col p-2.5 justify-between">
                  <div className="flex items-center justify-between border-b border-[#DFDFDD] pb-1">
                    <span className="text-[8px] font-black text-[#69433C]">ENCARTE FÍSICO</span>
                    <FileText className="w-3 h-3 text-[#69433C]" />
                  </div>
                  <div className="space-y-1 my-auto">
                    <div className="h-1.5 bg-[#DFDFDD] rounded w-full" />
                    <div className="h-1.5 bg-[#DFDFDD] rounded w-3/4" />
                    <div className="h-1.5 bg-[#DFDFDD] rounded w-5/6" />
                  </div>
                  <span className="text-[7px] text-[#EF4444] font-bold uppercase tracking-wider">Desperdício de Papel</span>
                </div>
              </div>

              <h4 className="text-sm font-extrabold text-[#2B2523] mt-2">Modelo Tradicional em Papel</h4>
              <p className="text-xs text-[#69433C] mt-1 leading-relaxed">
                Alto volume de impressos descartáveis, custo gráfico semanal recorrente e logística lenta.
              </p>
            </div>

            {/* CENTER: Visual Directional Connector */}
            <div className="md:col-span-2 flex flex-col items-center justify-center py-2">
              <div className="flex flex-col items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-[#F59E0B] text-[#2B2523] font-black text-[11px] uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <span>IMPRESSÃO</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2B2523]" />
                  <span>DIGITAL</span>
                </div>
                <span className="text-[10px] font-bold text-[#69433C] text-center">Transição Sustentável</span>
              </div>
            </div>

            {/* RIGHT: Digital App Smartphone */}
            <div className="md:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-[#F9F7F3] border border-[#F59E0B]/50 shadow-sm relative card-glow">
              <div className="relative mb-4">
                {/* Smartphone Card Simulation */}
                <div className="w-24 h-36 rounded-2xl bg-[#2B2523] p-1.5 shadow-lg border border-[#DFDFDD] relative">
                  <div className="w-full h-full rounded-xl bg-[#F9F7F3] overflow-hidden flex flex-col text-[8px]">
                    <div className="bg-[#FFFFFF] p-1 border-b border-[#DFDFDD] font-black text-[#2B2523] flex items-center justify-between">
                      <span>Sensor Mercado</span>
                      <Smartphone className="w-2.5 h-2.5 text-[#F59E0B]" />
                    </div>
                    <div className="p-1.5 space-y-1 flex-1">
                      <div className="p-1 rounded bg-[#F59E0B]/20 text-[#2B2523] font-extrabold">
                        Encarte Digital Eco
                      </div>
                      <div className="p-1 rounded bg-[#FFFFFF] border border-[#DFDFDD] text-[#2B2523] font-bold flex justify-between">
                        <span>Arroz 5kg</span>
                        <span className="text-[#F59E0B]">R$ 24,90</span>
                      </div>
                      <div className="p-1 rounded bg-[#FFFFFF] border border-[#DFDFDD] text-[#2B2523] font-bold flex justify-between">
                        <span>Café 500g</span>
                        <span className="text-[#F59E0B]">R$ 18,90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-extrabold text-[#2B2523] mt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                App Próprio Sem Papel
              </h4>
              <p className="text-xs text-[#69433C] mt-1 leading-relaxed">
                Ofertas direto no celular do cliente com custo marginal zero de impressão física.
              </p>
            </div>

          </div>

          {/* 3 Pillars: Sustainability + Cost Reduction + Instant Reach */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#DFDFDD]">
            <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/30 text-center space-y-1">
              <div className="text-xs font-black text-[#2B2523] flex items-center justify-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#F59E0B]" />
                Sustentabilidade Ambiental
              </div>
              <div className="text-[11px] text-[#69433C]">
                Elimine o desperdício de toneladas de papel e reduza a pegada de carbono da rede.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/40 text-center space-y-1">
              <div className="text-xs font-black text-[#F59E0B]">
                💰 Redução Drástica de Custos
              </div>
              <div className="text-[11px] text-[#69433C]">
                Corte gastos recorrentes com tiragens gráficas, transporte e distribuição de folhetos.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-center space-y-1">
              <div className="text-xs font-extrabold text-[#2B2523]">
                📲 Alcance Digital Imediato
              </div>
              <div className="text-[11px] text-[#69433C]">
                O cliente consulta o encarte atualizado a qualquer momento direto no aplicativo.
              </div>
            </div>
          </div>

          {/* Footer Statement */}
          <div className="mt-6 pt-4 border-t border-[#DFDFDD] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#2B2523] font-bold flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#F59E0B]" />
              Menos dependência de impressão física + maior alcance digital das ofertas
            </span>
            <span className="text-xs text-[#69433C] font-semibold">
              Sensor Mercado • Plataforma B2B para Varejo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
