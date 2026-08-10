'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, 
  MessageSquare, 
  Clock, 
  Building2, 
  Store, 
  Zap, 
  XCircle, 
  CheckCircle2, 
  UserX,
  ShieldCheck,
  ZapOff,
  Palette
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const OperationalProblem: React.FC = () => {
  const [activeNotification, setActiveNotification] = useState<number>(0);

  const notifications = [
    { text: '💬 WhatsApp: "Trocar preço do arroz na Loja 02 urgente"', delay: 0 },
    { text: '⚠️ E-mail: "Loja 07 pediu alteração de encarte para amanhã"', delay: 1 },
    { text: '✏️ Designer: "Banner do hortifrúti precisa ser corrigido de novo"', delay: 2 },
    { text: '⏳ Marketing: "Aguardando aprovação da diretoria desde ontem"', delay: 3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notifications.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [notifications.length]);

  const painPoints = [
    {
      title: "Ofertas demorando pra ir ao ar",
      description: "A oportunidade passa enquanto a arte ainda está sendo produzida ou aprovada.",
      icon: Clock
    },
    {
      title: "Cada loja comunicando de um jeito",
      description: "Cores, formatos e mensagens diferentes enfraquecem a marca da rede.",
      icon: Palette
    },
    {
      title: "Dependência de designer ou agência",
      description: "Uma troca simples de produto ou preço vira fila, retrabalho e custo.",
      icon: UserX
    },
    {
      title: "Pouca velocidade pras campanhas locais",
      description: "As lojas conhecem sua região, mas não têm autonomia pra agir rápido.",
      icon: ZapOff
    }
  ];

  return (
    <section id="produto" className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="O PROBLEMA"
          title="Sua rede cresceu. O jeito de anunciar continuou o mesmo."
          description="Quando cada campanha depende de pedido, aprovação e ajuste manual, a oferta demora, a rede perde o padrão e a operação fica presa."
        />

        {/* 4 Pain Points Cards Grid from Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] hover:border-[#F59E0B]/60 transition-all flex items-start gap-4 group shadow-sm"
              >
                <div className="p-3 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/40 shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-extrabold text-[#2B2523] group-hover:text-[#F59E0B] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#69433C] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Visual Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: HOJE (Gargalo Tradicional) */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#EF4444]/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#EF4444]/10 text-[#EF4444] text-xs font-bold rounded-bl-xl border-l border-b border-[#EF4444]/30 flex items-center gap-1.5">
              <XCircle className="w-4 h-4" />
              COMO É HOJE (LENTO & IMPROVISADO)
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/30">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2523]">Gargalo Operacional</h3>
                  <p className="text-xs text-[#69433C]">WhatsApp, e-mails soltos e dependência de terceiros</p>
                </div>
              </div>

              {/* Animated Bottleneck Diagram */}
              <div className="space-y-2.5">
                {[
                  { role: 'Gerente da Loja', action: 'Pede alteração de preço via WhatsApp', icon: MessageSquare },
                  { role: 'E-mail / Grupo', action: 'Solicitação perdida ou esquecida', icon: Clock },
                  { role: 'Marketing Central', action: 'Fila de aprovações acumuladas', icon: AlertTriangle },
                  { role: 'Designer Terceirizado', action: 'Demora 48h para refazer arte', icon: UserX },
                  { role: 'Aprovação Manual', action: 'Erro de digitação e retrabalho', icon: XCircle },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#EF4444]/10 flex items-center justify-center text-[#EF4444] font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-[#2B2523]">{item.role}</div>
                          <div className="text-[11px] text-[#69433C]">{item.action}</div>
                        </div>
                      </div>
                      <Icon className="w-4 h-4 text-[#EF4444]/70" />
                    </div>
                  );
                })}
              </div>

              {/* Live Animated Notification Simulator */}
              <div className="p-3.5 rounded-xl bg-[#F9F7F3] border border-[#EF4444]/40 text-xs relative min-h-[58px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNotification}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#EF4444] font-semibold flex items-center gap-2"
                  >
                    <span>{notifications[activeNotification].text}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DFDFDD] text-xs text-[#EF4444] font-semibold flex items-center justify-between">
              <span>Resultado: Atrasos, erros e perda de identidade da rede</span>
              <XCircle className="w-4 h-4" />
            </div>
          </div>

          {/* RIGHT: COM SENSOR MERCADO */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden card-glow group shadow-sm">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#F59E0B]/15 text-[#2B2523] text-xs font-black rounded-bl-xl border-l border-b border-[#F59E0B]/40 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              COM SENSOR MERCADO (INFRAESTRUTURA)
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40">
                  <Zap className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#2B2523]">Administração + Autonomia</h3>
                  <p className="text-xs text-[#69433C]">Matriz padroniza, lojas adaptam e publicam em minutos</p>
                </div>
              </div>

              {/* Streamlined Workflow Diagram */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F59E0B]/15 text-[#2B2523]">
                      <Building2 className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="font-extrabold text-[#2B2523] text-sm">01. MATRIZ CENTRAL</div>
                      <div className="text-[11px] text-[#69433C]">Cria modelos, trava marcas e libera campanha</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
                </div>

                <div className="flex justify-center my-1">
                  <div className="w-px h-6 bg-gradient-to-b from-[#F59E0B] to-transparent" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {['LOJA 01', 'LOJA 02', 'LOJA 03'].map((loja, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/30 text-center flex flex-col items-center gap-1.5"
                    >
                      <Store className="w-4 h-4 text-[#F59E0B]" />
                      <span className="font-bold text-[11px] text-[#2B2523]">{loja}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F59E0B]/20 text-[#2B2523] font-bold">
                        Adapta Preço
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center my-1">
                  <div className="w-px h-6 bg-gradient-to-b from-[#F59E0B] to-transparent" />
                </div>

                <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F59E0B]/15 text-[#2B2523]">
                      <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="font-extrabold text-[#2B2523] text-sm">PUBLICAÇÃO INSTANTÂNEA</div>
                      <div className="text-[11px] text-[#69433C]">Encarte A4, WhatsApp, Feed, Stories & TVs de loja</div>
                    </div>
                  </div>
                  <span className="font-extrabold text-[#F59E0B] text-xs">Pronto ✓</span>
                </div>
              </div>
            </div>

            {/* Bottom Highlights Message */}
            <div className="mt-8 pt-4 border-t border-[#DFDFDD] text-xs text-[#2B2523] font-bold flex flex-wrap items-center justify-between gap-2">
              <span className="text-[#F59E0B] uppercase tracking-wider text-[11px]">
                Menos fila. Mais controle. Mais velocidade.
              </span>
              <span className="text-[#69433C] font-semibold">Tempo médio: 3 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
