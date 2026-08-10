'use client';

import React, { useState } from 'react';
import { Smartphone, Bell, Gift, Sparkles, CheckCircle2, DollarSign, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const AgencyAppExtension: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'encarte' | 'patrocinio' | 'push'>('encarte');

  const scrollToForm = () => {
    const el = document.querySelector('#seja-parceiro');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="app-supermercado" className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="NOVO PRODUTO NO PORTFÓLIO DA AGÊNCIA"
          title="Leve também o app pro seu cliente."
          description="Além do encarte, você pode entregar um app pro seu cliente supermercado. Nele, os clientes do supermercado veem os encartes e as ofertas promocionais direto no celular."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-center">
          
          {/* Left Column: Key Agency Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="amber" className="py-1 px-3 text-xs tracking-wider font-extrabold uppercase">
              VENDA ADICIONAL COM 20% RECORRENTE
            </Badge>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2B2523] leading-tight">
              Seu cliente ganha um app próprio. Você ganha mais comissão.
            </h3>

            <p className="text-base sm:text-lg text-[#69433C] leading-relaxed font-medium">
              Você entrega, o supermercado tem o próprio app, os clientes dele veem as ofertas e você ganha comissão.
            </p>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/40 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#2B2523]">Venda conjunta ou separada</h4>
                  <p className="text-xs text-[#69433C] leading-relaxed">
                    O app pode ir junto com a plataforma de encartes ou ser comercializado à parte para os clientes da sua agência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#DFDFDD]/60">
                <DollarSign className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#2B2523]">20% de Comissão Recorrente</h4>
                  <p className="text-xs text-[#69433C] leading-relaxed">
                    Também dá 20% de comissão pra sua agência em cada assinatura ou licença de aplicativo vendida.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToForm}
                className="font-black text-sm min-h-[50px]"
              >
                Quero me tornar parceiro
              </Button>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] bg-[#1F1917] p-4 rounded-[40px] border-4 border-[#3D3330] shadow-2xl space-y-4 relative">
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-[#3D3330] rounded-full mx-auto" />

              {/* App Screen Frame */}
              <div className="bg-[#F9F7F3] rounded-[28px] overflow-hidden border border-[#DFDFDD] p-4 space-y-4 text-left">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#DFDFDD] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#F59E0B] flex items-center justify-center text-[#2B2523] font-black text-xs">
                      S
                    </div>
                    <span className="text-xs font-black text-[#2B2523]">Supermercado da Rede</span>
                  </div>
                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#2B2523]">
                    Seu App
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="grid grid-cols-3 gap-1 bg-[#F4EDE2] p-1 rounded-xl text-[10px] font-bold text-center">
                  <button
                    onClick={() => setActiveTab('encarte')}
                    className={`py-1 rounded-lg transition-all ${activeTab === 'encarte' ? 'bg-[#FFFFFF] text-[#2B2523] shadow-sm font-extrabold' : 'text-[#69433C]'}`}
                  >
                    Encarte
                  </button>
                  <button
                    onClick={() => setActiveTab('patrocinio')}
                    className={`py-1 rounded-lg transition-all ${activeTab === 'patrocinio' ? 'bg-[#FFFFFF] text-[#2B2523] shadow-sm font-extrabold' : 'text-[#69433C]'}`}
                  >
                    B2B Mídia
                  </button>
                  <button
                    onClick={() => setActiveTab('push')}
                    className={`py-1 rounded-lg transition-all ${activeTab === 'push' ? 'bg-[#FFFFFF] text-[#2B2523] shadow-sm font-extrabold' : 'text-[#69433C]'}`}
                  >
                    Push
                  </button>
                </div>

                {/* Dynamic Screen Content */}
                {activeTab === 'encarte' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#DFDFDD] space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-black text-[#F59E0B]">
                        <span>OFERTAS DA SEMANA</span>
                        <span>PDF / SOCIAL</span>
                      </div>
                      <div className="h-20 bg-[#F4EDE2] rounded-lg border border-dashed border-[#DFDFDD] flex items-center justify-center text-[10px] text-[#69433C] font-bold">
                        Encarte Digital Interativo
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'patrocinio' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <div className="p-3 bg-[#FFFFFF] rounded-xl border border-[#F59E0B]/50 space-y-1.5">
                      <span className="text-[9px] font-black text-[#F59E0B] uppercase">PATROCINADO • INDÚSTRIA</span>
                      <p className="text-[11px] font-extrabold text-[#2B2523]">Detergente Ypê 500ml</p>
                      <p className="text-[10px] text-[#69433C]">Leve 3 por R$ 1,99 cada no App!</p>
                    </div>
                  </div>
                )}

                {activeTab === 'push' && (
                  <div className="space-y-2 animate-in fade-in duration-200">
                    <div className="p-2.5 bg-[#FFFFFF] rounded-xl border border-[#DFDFDD] flex items-start gap-2 shadow-sm">
                      <Bell className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-black text-[#2B2523]">Alerta de Oferta Relâmpago!</p>
                        <p className="text-[9px] text-[#69433C]">Picanha Friboi com 30% OFF hoje até às 20h na loja Matriz.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-2 bg-[#F59E0B]/10 rounded-xl text-center text-[10px] font-black text-[#2B2523]">
                  Marca da Rede • 20% comissão pra Agência
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
