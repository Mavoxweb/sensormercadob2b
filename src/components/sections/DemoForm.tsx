'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Store, 
  ShieldCheck, 
  User, 
  Briefcase, 
  Phone, 
  Mail, 
  Clock, 
  AlertCircle
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nameAndRole: '',
    supermarketName: '',
    unitCount: '5 a 10 unidades',
    contactInfo: '',
    preferredTime: 'Manhã (09h - 12h)',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nameAndRole || !formData.supermarketName || !formData.contactInfo) {
      setErrorMessage('Por favor, preencha os campos obrigatórios (*).');
      setStatus('error');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
    }, 1200);
  };

  const displayName = formData.supermarketName.trim() || 'Sua Rede de Supermercados';

  return (
    <section id="demonstracao" className="py-16 sm:py-20 lg:py-32 bg-[#F9F7F3] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="DEMONSTRAÇÃO PERSONALIZADA"
          title="Veja a plataforma com a sua marca."
          description="Numa conversa rápida, a gente mostra como fica com a sua cara, como funciona entre as suas lojas e quanto custa pra colocar no ar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mt-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#FFFFFF] border border-[#DFDFDD] p-6 sm:p-8 lg:p-10 shadow-sm">
            <h3 className="text-xl font-extrabold text-[#2B2523] mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#F59E0B]" />
              Agendar demonstração
            </h3>
            <p className="text-xs text-[#69433C] mb-6 font-medium">
              Sem compromisso. Conversa direta, sobre a sua rede.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B] text-center space-y-4 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-[#F59E0B] text-[#2B2523] flex items-center justify-center mx-auto font-black shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-[#2B2523]">
                  Solicitação Recebida com Sucesso!
                </h4>
                <p className="text-xs text-[#69433C] leading-relaxed max-w-md mx-auto font-medium">
                  Obrigado. Nossa equipe entrará em contato para agendar a demonstração personalizada da <strong className="text-[#F59E0B] font-black">{displayName}</strong>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStatus('idle')}
                  className="mt-4 border-[#DFDFDD] text-[#2B2523]"
                >
                  Nova solicitação
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#2B2523] text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#F59E0B]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Nome e cargo */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#69433C] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#F59E0B]" />
                    Nome e cargo *
                  </label>
                  <input
                    type="text"
                    name="nameAndRole"
                    value={formData.nameAndRole}
                    onChange={handleChange}
                    placeholder="Ex: Carlos Silva — Diretor de Operações"
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-[#2B2523] text-xs focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all font-medium placeholder:text-[#8F817A]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Rede de supermercados */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#69433C] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                      Rede de supermercados *
                    </label>
                    <input
                      type="text"
                      name="supermarketName"
                      value={formData.supermarketName}
                      onChange={handleChange}
                      placeholder="Ex: Supermercados Alvorada"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F7F3] border border-[#F59E0B]/50 text-[#2B2523] text-xs focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all font-medium placeholder:text-[#8F817A]"
                      required
                    />
                  </div>

                  {/* Número de lojas */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#69433C] flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-[#F59E0B]" />
                      Número de lojas
                    </label>
                    <select
                      name="unitCount"
                      value={formData.unitCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-[#2B2523] text-xs focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all font-medium"
                    >
                      <option value="5 a 10 lojas">5 a 10 lojas</option>
                      <option value="11 a 25 lojas">11 a 25 lojas</option>
                      <option value="26 a 50 lojas">26 a 50 lojas</option>
                      <option value="Mais de 50 lojas">Mais de 50 lojas</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp ou e-mail */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#69433C] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
                      WhatsApp ou e-mail *
                    </label>
                    <input
                      type="text"
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleChange}
                      placeholder="(00) 90000-0000 ou email@suarede.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-[#2B2523] text-xs focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all font-medium placeholder:text-[#8F817A]"
                      required
                    />
                  </div>

                  {/* Melhor horário pra contato */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#69433C] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                      Melhor horário pra contato
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] text-[#2B2523] text-xs focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-all font-medium"
                    >
                      <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                      <option value="Tarde (14h - 18h)">Tarde (14h - 18h)</option>
                      <option value="Qualquer Horário Comercial">Qualquer Horário Comercial</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={status === 'loading'}
                  className="w-full mt-6 min-h-[50px] font-black text-sm"
                  rightIcon={status !== 'loading' ? <Send className="w-4 h-4 text-[#2B2523]" /> : undefined}
                >
                  Agendar demonstração
                </Button>

                {/* Microcopy */}
                <p className="text-xs text-[#69433C] text-center pt-2 font-medium">
                  Sem compromisso. Conversa direta, sobre a sua rede.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Dynamic Live Preview Mockup */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/50 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DFDFDD]">
                <span className="text-[11px] font-black text-[#2B2523] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Demonstração da Plataforma
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#2B2523] font-black">
                  Ambiente Próprio
                </span>
              </div>

              {/* Dynamic Header mockup */}
              <div className="p-4 rounded-xl bg-[#F9F7F3] border border-[#DFDFDD] space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#F59E0B] text-[#2B2523] font-black text-xs flex items-center justify-center shadow-sm">
                    SM
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#2B2523] uppercase tracking-tight">
                      SENSOR MERCADO
                    </div>
                    <div className="text-[11px] font-extrabold text-[#F59E0B] truncate">
                      {displayName}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#DFDFDD] space-y-1.5 shadow-sm">
                  <div className="text-[10px] text-[#69433C] font-semibold">
                    Configuração de Demonstração:
                  </div>
                  <div className="text-xs font-black text-[#2B2523]">
                    {formData.unitCount}
                  </div>
                  <div className="text-[10px] text-[#8F817A] font-medium">
                    Acesso para Matriz + Gerentes de Unidade
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#69433C] pt-2 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                  <span>Atendimento dedicado e sem compromisso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                  <span>Apresentação objetiva e focada na operação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
