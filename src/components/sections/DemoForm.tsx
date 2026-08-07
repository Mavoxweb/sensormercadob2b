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
    name: '',
    role: '',
    supermarketName: '',
    unitCount: '5-10',
    whatsapp: '',
    email: '',
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

    if (!formData.name || !formData.supermarketName || !formData.whatsapp || !formData.email) {
      setErrorMessage('Por favor, preencha os campos obrigatórios (*).');
      setStatus('error');
      return;
    }

    setStatus('loading');

    /* 
      ARQUITETURA DE INTEGRAÇÃO FUTURA COM CRM / WEBHOOK:
      Para conectar a um webhook N8N, HubSpot, RD Station ou Salesforce:
      
      const response = await fetch('/api/leads/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    */

    // Simulated API response delay
    setTimeout(() => {
      setStatus('success');
      setErrorMessage('');
    }, 1200);
  };

  const displayName = formData.supermarketName.trim() || 'Sua Rede de Supermercados';

  return (
    <section id="demonstracao" className="py-20 lg:py-32 bg-[#0D1215] border-t border-[#253039]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="DEMONSTRAÇÃO PERSONALIZADA"
          title="Agora veja o Sensor Mercado com a sua marca."
          description="Mostramos como a plataforma pode ser estruturada para a identidade, matriz e unidades da sua rede."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mt-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#12181D] border border-[#253039] p-6 sm:p-8 lg:p-10 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#F4F7F5] mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#20D477]" />
              Solicite uma Apresentação Executiva
            </h3>
            <p className="text-xs text-[#A7B0AB] mb-6">
              Preencha os dados da sua operação para que nosso time prepare uma prévia da plataforma com o nome e estrutura da sua empresa.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-[#20D477]/10 border border-[#20D477] text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#20D477] text-[#090D0F] flex items-center justify-center mx-auto font-bold shadow-[0_0_20px_rgba(32,212,119,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-[#20D477]">
                  Solicitação Recebida com Sucesso!
                </h4>
                <p className="text-xs text-[#F4F7F5] leading-relaxed max-w-md mx-auto">
                  Obrigado, <strong className="text-[#20D477]">{formData.name}</strong>. Nossa equipe comercial entrará em contato via WhatsApp/E-mail para apresentar o protótipo personalizado da <strong className="text-[#20D477]">{displayName}</strong>.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStatus('idle')}
                  className="mt-4"
                >
                  Nova solicitação
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-[#EF5B5B]/10 border border-[#EF5B5B]/40 text-[#EF5B5B] text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#20D477]" />
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#253039] text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                      required
                    />
                  </div>

                  {/* Cargo */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#20D477]" />
                      Cargo na Empresa
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Ex: Diretor de Operações / Gestor"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#253039] text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Rede de supermercados */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#20D477]" />
                      Rede de Supermercados *
                    </label>
                    <input
                      type="text"
                      name="supermarketName"
                      value={formData.supermarketName}
                      onChange={handleChange}
                      placeholder="Ex: Supermercados Alvorada"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#20D477]/50 text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                      required
                    />
                  </div>

                  {/* Número de unidades */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5 text-[#20D477]" />
                      Número de Lojas / Unidades
                    </label>
                    <select
                      name="unitCount"
                      value={formData.unitCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#253039] text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                    >
                      <option value="5-10">5 a 10 unidades</option>
                      <option value="11-25">11 a 25 unidades</option>
                      <option value="26-50">26 a 50 unidades</option>
                      <option value="50+">Mais de 50 unidades</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#20D477]" />
                      WhatsApp Corporativo *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="(00) 90000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#253039] text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                      required
                    />
                  </div>

                  {/* E-mail corporativo */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#20D477]" />
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nome@suarede.com.br"
                      className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#253039] text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Melhor horário */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#A7B0AB] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#20D477]" />
                    Melhor Horário para Contato
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D0F] border border-[#253039] text-[#F4F7F5] text-xs focus:outline-none focus:border-[#20D477] focus:ring-1 focus:ring-[#20D477] transition-all"
                  >
                    <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                    <option value="Tarde (14h - 18h)">Tarde (14h - 18h)</option>
                    <option value="Qualquer Horário">Qualquer Horário Comercial</option>
                  </select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={status === 'loading'}
                  className="w-full mt-6"
                  rightIcon={status !== 'loading' ? <Send className="w-4 h-4" /> : undefined}
                >
                  AGENDAR DEMONSTRAÇÃO
                </Button>

                <p className="text-[10px] text-[#6F7B75] text-center pt-2">
                  Seus dados estão protegidos. Atendimento exclusivo para redes de supermercados.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Dynamic Live Preview Mockup */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-[#090D0F] border border-[#20D477]/40 p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#253039]">
                <span className="text-[11px] font-extrabold text-[#20D477] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Prévia em Tempo Real
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#20D477]/10 text-[#20D477] font-semibold">
                  Personalizado
                </span>
              </div>

              {/* Dynamic Header mockup showing typed brand name */}
              <div className="p-4 rounded-xl bg-[#12181D] border border-[#20D477]/40 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#20D477] text-[#090D0F] font-bold text-xs flex items-center justify-center">
                    SM
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#F4F7F5] uppercase tracking-tight">
                      SENSOR MERCADO
                    </div>
                    <div className="text-[11px] font-bold text-[#20D477] truncate">
                      {displayName}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#090D0F] border border-[#253039] space-y-1.5">
                  <div className="text-[10px] text-[#A7B0AB] font-semibold">
                    Painel da Matriz Configurado:
                  </div>
                  <div className="text-xs font-extrabold text-[#F4F7F5]">
                    {formData.unitCount} Unidades Sincronizadas
                  </div>
                  <div className="text-[10px] text-[#6F7B75]">
                    Manual de Marca & Permissões Ativadas
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#A7B0AB] pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#20D477]" />
                  <span>Ambiente seguro isolado para a sua rede</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#20D477]" />
                  <span>Sem necessidade de instalação no computador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
