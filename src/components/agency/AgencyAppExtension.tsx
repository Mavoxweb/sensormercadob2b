'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Bell, 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  ExternalLink,
  ShoppingBag,
  Star,
  Zap,
  Tag,
  Share2,
  TrendingUp,
  Store,
  Briefcase
} from 'lucide-react';
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
      {/* Background Radial Decorator */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

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

              <div className="flex items-start gap-3 pt-3 border-t border-[#DFDFDD]/60">
                <Briefcase className="w-5 h-5 text-[#F59E0B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-[#2B2523]">Gestão de Mídia B2B (Indústria)</h4>
                  <p className="text-xs text-[#69433C] leading-relaxed">
                    Sua agência pode gerenciar o espaço publicitário no app do supermercado e vender banners para grandes marcas e fornecedores.
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

          {/* Right Column: Premium High-Fidelity Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-[#2B2523] p-4 rounded-[42px] shadow-2xl border-4 border-[#DFDFDD] relative">
              
              {/* Phone Speaker & Notch */}
              <div className="w-32 h-4 bg-[#2B2523] mx-auto rounded-b-xl flex items-center justify-center gap-2 mb-2 z-20">
                <div className="w-10 h-1 bg-[#8F817A]/50 rounded-full" />
                <div className="w-2 h-2 bg-[#8F817A]/50 rounded-full" />
              </div>

              {/* Phone Screen Container */}
              <div className="bg-[#F9F7F3] rounded-[30px] overflow-hidden border border-[#DFDFDD] shadow-inner text-[#2B2523]">
                
                {/* App Status Header */}
                <div className="bg-[#FFFFFF] p-3.5 border-b border-[#DFDFDD] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#F59E0B] flex items-center justify-center text-[#2B2523] font-black text-xs shadow-sm">
                      SM
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-tight text-[#2B2523]">SUPERMERCADO DA REDE</div>
                      <div className="text-[9px] font-bold text-[#F59E0B] uppercase">App com a Marca do Cliente</div>
                    </div>
                  </div>
                  <div className="p-1.5 rounded-full bg-[#F9F7F3] border border-[#DFDFDD] text-[#69433C] relative">
                    <Bell className="w-3.5 h-3.5" />
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] absolute top-0 right-0 border border-[#FFFFFF]" />
                  </div>
                </div>

                {/* App Screen Interactive Tabs */}
                <div className="flex border-b border-[#DFDFDD] bg-[#FFFFFF] text-[10px] font-bold">
                  <button
                    onClick={() => setActiveTab('encarte')}
                    className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                      activeTab === 'encarte'
                        ? 'border-[#F59E0B] text-[#F59E0B] font-extrabold bg-[#F59E0B]/5'
                        : 'border-transparent text-[#69433C]'
                    }`}
                  >
                    Encarte Digital
                  </button>
                  <button
                    onClick={() => setActiveTab('patrocinio')}
                    className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                      activeTab === 'patrocinio'
                        ? 'border-[#F59E0B] text-[#F59E0B] font-extrabold bg-[#F59E0B]/5'
                        : 'border-transparent text-[#69433C]'
                    }`}
                  >
                    Mídia B2B
                  </button>
                  <button
                    onClick={() => setActiveTab('push')}
                    className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                      activeTab === 'push'
                        ? 'border-[#F59E0B] text-[#F59E0B] font-extrabold bg-[#F59E0B]/5'
                        : 'border-transparent text-[#69433C]'
                    }`}
                  >
                    Push Notificação
                  </button>
                </div>

                {/* App Screen Body Content */}
                <div className="p-3.5 space-y-3 min-h-[360px] bg-[#F9F7F3]">
                  
                  {activeTab === 'encarte' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      {/* Banner Encarte Ativo */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#E89005] text-[#2B2523] shadow-sm">
                        <div className="flex items-center justify-between text-[9px] font-black uppercase opacity-90">
                          <span>Ofertas da Semana</span>
                          <span className="bg-[#FFFFFF]/30 px-1.5 py-0.5 rounded">Válido até domingo</span>
                        </div>
                        <div className="text-xs font-black mt-1 uppercase">Encarte Especial da Rede</div>
                        <div className="text-[9px] font-extrabold opacity-90 mt-0.5">38 ofertas atualizadas na sua loja</div>
                      </div>

                      {/* Encarte Digital Cards Mock */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] text-center space-y-1 shadow-xs">
                          <div className="h-14 bg-[#F4EDE2] rounded flex items-center justify-center text-[9px] font-extrabold text-[#69433C]">
                            Cerveja Heineken 350ml
                          </div>
                          <div className="text-[9px] font-extrabold text-[#2B2523] truncate">Heineken Lta 350ml</div>
                          <div className="text-xs font-black text-[#F59E0B]">R$ 4,19</div>
                        </div>

                        <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] text-center space-y-1 shadow-xs">
                          <div className="h-14 bg-[#F4EDE2] rounded flex items-center justify-center text-[9px] font-extrabold text-[#69433C]">
                            Picanha Friboi kg
                          </div>
                          <div className="text-[9px] font-extrabold text-[#2B2523] truncate">Picanha Friboi</div>
                          <div className="text-xs font-black text-[#F59E0B]">R$ 49,90</div>
                        </div>
                      </div>

                      {/* Store Selector Pill */}
                      <div className="p-2 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex items-center justify-between text-[9px] shadow-xs">
                        <span className="font-extrabold text-[#2B2523]">📍 Loja: Loja 01 - Matriz</span>
                        <span className="text-[#F59E0B] font-bold">Alterar</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'patrocinio' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#F59E0B]/40 space-y-2 shadow-sm">
                        <div className="flex items-center justify-between text-[9px] font-black text-[#F59E0B] uppercase">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            PATROCINADO • INDÚSTRIA
                          </span>
                          <span className="bg-[#F59E0B]/15 px-1.5 py-0.5 rounded text-[8px]">Mídia Agência</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#F4EDE2] border border-[#DFDFDD] text-center space-y-1">
                          <div className="text-xs font-black text-[#2B2523]">Banner Nestlé / Ambev</div>
                          <div className="text-[9px] text-[#69433C]">Espaço comercializado pela sua agência direto para grandes marcas.</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] space-y-1">
                        <div className="text-[10px] font-extrabold text-[#2B2523]">Monetização Dupla</div>
                        <p className="text-[9px] text-[#69433C] leading-relaxed">
                          Sua agência ganha 20% na venda do app e ainda cobra taxa de gestão de mídia das marcas parceiras.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'push' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2.5"
                    >
                      <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#F59E0B]/50 flex items-start gap-2 shadow-sm">
                        <div className="p-1.5 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] shrink-0 mt-0.5">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-[#2B2523]">🔥 Oferta Relâmpago no App!</div>
                          <div className="text-[9px] text-[#69433C]">File Mignon Friboi com 30% OFF até as 20h. Válido em toda a rede.</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex items-start gap-2">
                        <div className="p-1.5 rounded-lg bg-[#F4EDE2] text-[#69433C] shrink-0 mt-0.5">
                          <Tag className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-extrabold text-[#2B2523]">Feira do Hortifrúti na Quarta</div>
                          <div className="text-[9px] text-[#69433C]">Frutas e verduras frescas com preço especial no aplicativo.</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>

                {/* App Bottom Navigation Bar Mock */}
                <div className="bg-[#FFFFFF] border-t border-[#DFDFDD] p-2 flex items-center justify-around text-[9px] font-bold text-[#69433C]">
                  <div className="flex flex-col items-center gap-0.5 text-[#F59E0B] font-extrabold">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Ofertas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <Store className="w-4 h-4" />
                    <span>Lojas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Minha Rede</span>
                  </div>
                </div>

              </div>

              {/* Phone Home Bar */}
              <div className="w-24 h-1 bg-[#8F817A]/50 mx-auto rounded-full mt-3" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
