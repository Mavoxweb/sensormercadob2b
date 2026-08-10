'use client';

import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';

export const AGENCY_FAQ_ITEMS = [
  {
    question: "Como a minha agência ganha?",
    answer: "Você ganha 20% de comissão em cada venda da plataforma e do app."
  },
  {
    question: "Quem cria o material, eu ou vocês?",
    answer: "Você, com a nossa plataforma. A gente dá a ferramenta e o suporte; a criação e a entrega ficam com a sua agência."
  },
  {
    question: "Vocês falam direto com o meu cliente?",
    answer: "Não. Quem conduz é você. A gente fica por trás, cuidando da parte técnica."
  },
  {
    question: "De quem é a marca no material?",
    answer: "Do seu cliente. O material sai com a marca do supermercado, nunca com a nossa."
  },
  {
    question: "Preciso de programador?",
    answer: "Não. Toda a parte técnica é com a gente."
  },
  {
    question: "Como é o suporte?",
    answer: "Acessível e humano. Você e sua equipe falam com gente de verdade."
  }
];

export const AgencyFAQ: React.FC = () => {
  return (
    <section id="faq-agencia" className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="FAQ • PERGUNTAS FREQUENTES"
          title="Dúvidas frequentes sobre a parceria"
          description="Tudo o que você precisa saber sobre a modelo de comissionamento e atuação conjunta com a Senso Mercado."
        />

        <Accordion items={AGENCY_FAQ_ITEMS} className="mt-12" />
      </div>
    </section>
  );
};
