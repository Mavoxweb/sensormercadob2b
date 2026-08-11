'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Smartphone, 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  Share2, 
  FileText, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Bell,
  Star,
  Zap,
  Tag
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const AppFeature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ofertas' | 'parcerias' | 'notificacoes'>('ofertas');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const appHighlights = [
    {
      title: 'Sua marca no celular do cliente, todo dia',
      desc: 'Presença diária na rotina do consumidor com a identidade visual da sua rede.',
      icon: Smartphone,
    },
    {
      title: 'Suas ofertas em destaque, fáceis de achar',
      desc: 'Encartes digitais navegáveis com busca rápida por produto e loja mais próxima.',
      icon: ShoppingBag,
    },
    {
      title: 'Espaço pra vender pros seus fornecedores',
      desc: 'Monte campanhas em parceria com as indústrias fornecedoras e crie uma nova fonte de receita.',
      icon: TrendingUp,
    },
    {
      title: 'Suas promoções no app e na rede social',
      desc: 'Comunicação integrada: publicou o encarte na plataforma, ele vai pro app e pro Instagram.',
      icon: Share2,
    },
    {
      title: 'Menos papel e menos custo de impressão',
      desc: 'Reduza drasticamente o gasto com impressão física direcionando clientes para a versão digital.',
      icon: FileText,
    },
    {
      title: 'Integração com app existente',
      desc: 'Já tem app? A gente integra a funcionalidade de encarte digital no aplicativo que sua rede já usa.',
      icon: Layers,
    },
  ];

  return (
    <section id="app-da-rede" className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="O APP DA SUA REDE"
          title="Sua rede também no bolso do cliente."
          description="Além do encarte, sua pode ter um app onde o cliente vê as suas ofertas todo dia, direto no celular. O que o app faz pela sua rede:"
        />

        {/* Main Content Grid: Left App Features & Right Interactive Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-center">
          
          {/* Left Column: 6 App Features List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] hover:border-[#F59E0B] transition-all flex flex-col justify-between group shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-extrabold text-[#2B2523] group-hover:text-[#F59E0B] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#69433C] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto min-h-[48px] font-black text-xs"
                onClick={() => scrollTo('#demonstracao')}
                leftIcon={<Sparkles className="w-4 h-4 text-[#2B2523]" />}
              >
                Agendar demonstração do app
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="w-full sm:w-auto min-h-[48px] font-extrabold text-xs"
                onClick={() => scrollTo('#prototipo')}
                rightIcon={<ArrowRight className="w-4 h-4 text-[#F59E0B]" />}
              >
                Testar o protótipo
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Interactive Smartphone Experience Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-[#2B2523] p-4 rounded-[40px] shadow-2xl border-4 border-[#DFDFDD] relative">
              
              {/* Phone Speaker & Notch */}
              <div className="w-32 h-4 bg-[#2B2523] mx-auto rounded-b-xl flex items-center justify-center gap-2 mb-2 z-20">
                <div className="w-10 h-1 bg-[#8F817A]/50 rounded-full" />
                <div className="w-2 h-2 bg-[#8F817A]/50 rounded-full" />
              </div>

              {/* Phone Screen Container */}
              <div className="bg-[#F9F7F3] rounded-[30px] overflow-hidden border border-[#DFDFDD] shadow-inner text-[#2B2523]">
                
                {/* App Status Header */}
                <div className="bg-[#FFFFFF] p-4 border-b border-[#DFDFDD] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#F59E0B] flex items-center justify-center text-[#2B2523] font-black text-xs">
                      SM
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-tight text-[#2B2523]">REDE SUPERMERCADOS</div>
                      <div className="text-[9px] font-bold text-[#F59E0B] uppercase">App Oficial da Rede</div>
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
                    onClick={() => setActiveTab('ofertas')}
                    className={`flex-1 py-2 text-center transition-colors border-b-2 ${
                      activeTab === 'ofertas'
                        ? 'border-[#F59E0B] text-[#F59E0B] font-extrabold'
                        : 'border-transparent text-[#69433C]'
                    }`}
                  >
                    Encarte Digital
                  </button>
                  <button
                    onClick={() => setActiveTab('parcerias')}
                    className={`flex-1 py-2 text-center transition-colors border-b-2 ${
                      activeTab === 'parcerias'
                        ? 'border-[#F59E0B] text-[#F59E0B] font-extrabold'
                        : 'border-transparent text-[#69433C]'
                    }`}
                  >
                    Patrocínios (B2B)
                  </button>
                  <button
                    onClick={() => setActiveTab('notificacoes')}
                    className={`flex-1 py-2 text-center transition-colors border-b-2 ${
                      activeTab === 'notificacoes'
                        ? 'border-[#F59E0B] text-[#F59E0B] font-extrabold'
                        : 'border-transparent text-[#69433C]'
                    }`}
                  >
                    Push Notificações
                  </button>
                </div>

                {/* App Screen Body Content */}
                <div className="p-4 space-y-3 min-h-[360px] bg-[#F9F7F3]">
                  
                  {activeTab === 'ofertas' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      {/* Banner Encarte Ativo */}
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#E89005] text-[#2B2523] shadow-sm">
                        <div className="flex items-center justify-between text-[9px] font-black uppercase opacity-90">
                          <span>Ofertas de Hoje</span>
                          <span className="bg-[#FFFFFF]/30 px-1.5 py-0.5 rounded">Válido até domingo</span>
                        </div>
                        <div className="text-sm font-black mt-1 uppercase">Encarte Especial da Semana</div>
                        <div className="text-[10px] font-extrabold opacity-90 mt-0.5">38 ofertas com desconto na sua loja favorita</div>
                      </div>

                      {/* Encarte Digital Cards Mock */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] text-center space-y-1">
                          <div className="h-16 bg-[#F4EDE2] rounded flex items-center justify-center text-[10px] font-bold text-[#69433C]">
                            Arroz 5kg
                          </div>
                          <div className="text-[10px] font-extrabold text-[#2B2523] truncate">Arroz Tipo 1</div>
                          <div className="text-xs font-black text-[#F59E0B]">R$ 19,90</div>
                        </div>

                        <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] text-center space-y-1">
                          <div className="h-16 bg-[#F4EDE2] rounded flex items-center justify-center text-[10px] font-bold text-[#69433C]">
                            Café 500g
                          </div>
                          <div className="text-[10px] font-extrabold text-[#2B2523] truncate">Café Tradicional</div>
                          <div className="text-xs font-black text-[#F59E0B]">R$ 14,80</div>
                        </div>
                      </div>

                      {/* Store Locator Pill */}
                      <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex items-center justify-between text-[10px]">
                        <span className="font-extrabold text-[#2B2523]">📍 Loja Selecionada: Loja 03 - Centro</span>
                        <span className="text-[#F59E0B] font-bold">Alterar</span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'parcerias' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#F59E0B]/40 space-y-2 shadow-sm">
                        <div className="flex items-center gap-1.5 text-[9px] font-black text-[#F59E0B] uppercase">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Espaço de Mídia B2B (Indústria)</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#F4EDE2] border border-[#DFDFDD] text-center">
                          <div className="text-xs font-extrabold text-[#2B2523]">Banner Patrocinado Ambev / Nestlé</div>
                          <div className="text-[9px] text-[#69433C] mt-0.5">Sua rede vende o espaço no app direto pros fornecedores.</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] space-y-1.5">
                        <div className="text-[10px] font-extrabold text-[#2B2523]">Monetização Direta</div>
                        <p className="text-[9px] text-[#69433C]">
                          Transforme o encarte digital da sua rede em um canal lucrativo de coop-marketing com a indústria.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'notificacoes' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2.5"
                    >
                      <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#F59E0B]/50 flex items-start gap-2.5 shadow-sm">
                        <div className="p-1.5 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] shrink-0">
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black text-[#2B2523]">🔥 Encarte do Fim de Semana!</div>
                          <div className="text-[9px] text-[#69433C]">As ofertas da Loja 02 acabaram de sair. Confira as carnes e cervejas em promoção!</div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] flex items-start gap-2.5">
                        <div className="p-1.5 rounded-lg bg-[#F4EDE2] text-[#69433C] shrink-0">
                          <Tag className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-extrabold text-[#2B2523]">Feira do Hortifrúti na Quarta</div>
                          <div className="text-[9px] text-[#69433C]">Produtos frescos com preços de atacado em toda a rede.</div>
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
                    <Smartphone className="w-4 h-4" />
                    <span>Lojas</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>A Minha Rede</span>
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
