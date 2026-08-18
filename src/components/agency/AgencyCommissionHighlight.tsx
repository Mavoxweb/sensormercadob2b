'use client';

import React from 'react';
import { 
  TrendingUp, 
  Coins, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Percent
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';


export const AgencyCommissionHighlight: React.FC = () => {
  const scrollToForm = () => {
    const el = document.querySelector('#seja-parceiro');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="comissao" className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="SEJA PARCEIRO • OPORTUNIDADE DE RECEITA"
          title="Vire parceiro e ganhe em cada venda."
          description="Leve o Sensor Mercado pros seus clientes de varejo e ganhe 20% de comissão recorrente em cada venda que fechar. Você entrega uma solução nova pro cliente, reduz o seu custo de produção e ainda cria uma nova fonte de receita pra agência."
        />

        {/* Main Highlight Card */}
        <div className="max-w-4xl mx-auto mt-12 rounded-3xl bg-[#FFFFFF] border border-[#F59E0B]/50 p-8 sm:p-12 shadow-sm relative overflow-hidden card-glow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Text & Key Advantages */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/20 text-[#2B2523] text-xs font-black tracking-wider uppercase">
                <Coins className="w-4 h-4 text-[#F59E0B]" />
                20% DE COMISSÃO RECORRENTE
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2523] leading-tight">
                Nova fonte de receita recorrente sem aumentar a folha de pagamento.
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#69433C] font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>Comissão recorrente garantida:</strong> 20% sobre cada licença e renovação da plataforma e do app.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>Redução drástica de custos:</strong> Elimine horas de refação de peças gráficas repetitivas da sua equipe.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <span><strong>Retenção de clientes:</strong> Entregue uma tecnologia proprietária com a marca da rede de varejo.</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToForm}
                  className="w-full sm:w-auto min-h-[50px] font-black text-sm"
                  rightIcon={<ArrowRight className="w-4 h-4 text-[#2B2523]" />}
                >
                  Quero me tornar parceiro
                </Button>
              </div>
            </div>

            {/* Right: Pure 20% Recurring Commission Highlight Card (No fixed prices) */}
            <div className="md:col-span-5 bg-[#F9F7F3] p-6 rounded-2xl border border-[#DFDFDD] space-y-4 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center mx-auto border border-[#F59E0B]/40">
                <Percent className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-black tracking-widest text-[#69433C] uppercase">MODELO DE PARCERIA</span>
                <h4 className="text-xl font-extrabold text-[#2B2523]">20% de Comissão Recorrente</h4>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#F59E0B]/50 space-y-2">
                <div className="text-4xl font-black text-[#F59E0B]">20%</div>
                <div className="text-xs font-extrabold text-[#2B2523] uppercase tracking-wider">Recorrente Por Venda</div>
                <p className="text-[11px] text-[#69433C] leading-relaxed font-medium pt-1">
                  Em cada novo cliente de varejo fechado e mantido pela sua agência.
                </p>
              </div>

              <p className="text-[11px] text-[#69433C] leading-relaxed font-medium">
                Sua agência aumenta o faturamento a cada nova rede ativada no seu portfólio.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
