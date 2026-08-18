'use client';

import React from 'react';
import { UserCheck, Cpu, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export const AgencyHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Você no controle da conta',
      description: 'É a sua agência que cria e entrega o encarte e as campanhas pro seu cliente. Você segue na frente do relacionamento, como sempre.',
      badge: 'RELACIONAMENTO'
    },
    {
      step: '02',
      title: 'Tecnologia nos bastidores',
      description: 'A gente fica por trás, cuidando da infraestrutura de software, estabilidade, atualizações e infraestrutura técnica de encartes.',
      badge: 'TECNOLOGIA'
    },
    {
      step: '03',
      title: 'Marca 100% do cliente',
      description: 'Seu cliente continua seu. O material e o aplicativo saem exclusivamente com a marca do varejista dele, nunca com a nossa.',
      badge: 'WHITE LABEL'
    }
  ];

  return (
    <section id="como-funciona-agencia" className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="MODELO DE ATUAÇÃO DA PARCERIA"
          title="Você mantém o cliente. A gente entrega a tecnologia por trás."
          description="Com a nossa plataforma, é a sua agência que cria e entrega o encarte e as campanhas pro seu cliente. Você segue na frente da conta, como sempre. A gente fica nos bastidores, cuidando da tecnologia, da entrada no ar e do suporte."
        />

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#DFDFDD] shadow-sm space-y-6 hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#F59E0B] tracking-tight">{item.step}</span>
                  <Badge variant="amber" className="text-[10px] font-extrabold uppercase">{item.badge}</Badge>
                </div>

                <h3 className="text-xl font-extrabold text-[#2B2523] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-[#69433C] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFDFDD]/60 flex items-center gap-2 text-xs font-bold text-[#2B2523]">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                <span>100% transparente pro cliente</span>
              </div>
            </div>
          ))}
        </div>

        {/* High Impact Callout Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border-2 border-[#F59E0B]/50 text-center shadow-sm card-glow">
          <p className="text-lg sm:text-xl font-extrabold text-[#2B2523]">
            "Seu cliente continua seu. E o material sai com a marca dele, nunca com a nossa."
          </p>
        </div>

      </div>
    </section>
  );
};
