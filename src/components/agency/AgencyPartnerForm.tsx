'use client';

import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, ShieldCheck, Sparkles, Building2, Users, Phone } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const AgencyPartnerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nameRole: '',
    agencyName: '',
    retailClientsCount: '1-3',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="seja-parceiro" className="py-16 sm:py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="SEJA PARCEIRO"
          title="Quero me tornar agência parceira"
          description="Preencha os dados abaixo e nossa equipe entrará em contato para apresentar as condições de parceria e liberar o protótipo da sua agência."
        />

        <div className="max-w-2xl mx-auto mt-12 bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#DFDFDD] shadow-lg relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#F59E0B]/20 text-[#F59E0B] rounded-full flex items-center justify-center mx-auto border border-[#F59E0B]/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#2B2523]">Solicitação enviada com sucesso!</h3>
              <p className="text-sm text-[#69433C] max-w-md mx-auto">
                Em breve nosso time comercial de parcerias entrará em contato pelo WhatsApp fornecido para formalizar o credenciamento da sua agência.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nome e Cargo */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2523]">
                  Seu nome completo e cargo na agência *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva - Diretor de Atendimento"
                  value={formData.nameRole}
                  onChange={(e) => setFormData({ ...formData, nameRole: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFDFDD] bg-[#F9F7F3] text-sm text-[#2B2523] focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
              </div>

              {/* Nome da Agência */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2523]">
                  Nome da sua agência *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Agência Criativa Comunicação"
                  value={formData.agencyName}
                  onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFDFDD] bg-[#F9F7F3] text-sm text-[#2B2523] focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
              </div>

              {/* Clientes Varejo Alimentar */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2523]">
                  Quantos clientes de varejo sua agência atende? *
                </label>
                <select
                  value={formData.retailClientsCount}
                  onChange={(e) => setFormData({ ...formData, retailClientsCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFDFDD] bg-[#F9F7F3] text-sm text-[#2B2523] focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                >
                  <option value="1-3">1 a 3 clientes de varejo</option>
                  <option value="4-10">4 a 10 clientes de varejo</option>
                  <option value="10+">Mais de 10 clientes de varejo</option>
                  <option value="prospectando">Estou prospectando clientes do setor</option>
                </select>
              </div>

              {/* WhatsApp ou E-mail */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2523]">
                  WhatsApp com DDD ou E-mail comercial *
                </label>
                <input
                  type="text"
                  required
                  placeholder="(11) 99999-9999 ou contato@agencia.com.br"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFDFDD] bg-[#F9F7F3] text-sm text-[#2B2523] focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
              </div>

              {/* Mensagem / Observações */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2523]">
                  Mensagem ou dúvida (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de entender mais sobre o modelo de implantação white-label."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#DFDFDD] bg-[#F9F7F3] text-sm text-[#2B2523] focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full min-h-[52px] font-black text-sm"
                rightIcon={<Send className="w-4 h-4 text-[#2B2523]" />}
              >
                Quero me tornar parceiro
              </Button>

              <p className="text-center text-xs text-[#69433C] font-semibold pt-1">
                Sem compromisso. Conversa direta sobre comissão e tecnologia.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
