'use client';

import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const BeforeAfter: React.FC = () => {
  const beforeList = [
    'Solicitações de alterações espalhadas no WhatsApp',
    'Arquivos de imagem e fontes perdidos em pastas locais',
    'Dependência constante de designer para trocas simples de preço',
    'Inconsistência da marca entre as diferentes unidades da rede',
    'Campanhas demoram dias para saírem da matriz para a gôndola',
    'Cada loja improvisa materiais no Canva ou Word sem autorização',
  ];

  const afterList = [
    'Campanhas centralizadas e padronizadas no painel da matriz',
    'Modelos oficiais organizados por tipo de produto e formato',
    'Lojas adaptam preços e estoques regionais com segurança',
    'Identidade visual protegida por regras e permissões automáticas',
    'Execução completa da matriz ao PDV em questão de minutos',
    'Autonomia controlada que elimina retrabalho e riscos de marca',
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F4EDE2] border-t border-[#DFDFDD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TRANSFORMAÇÃO OPERACIONAL"
          title="Troque improviso operacional por um processo."
          description="Veja a diferença clara entre manter um fluxo manual descentralizado e implementar uma infraestrutura comercial automatizada para a sua rede."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* HOJE Card */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#EF4444]/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[#DFDFDD]">
                <div className="p-2.5 rounded-xl bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/30">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#EF4444] uppercase tracking-wider">
                    FLUXO TRADICIONAL
                  </span>
                  <h3 className="text-xl font-extrabold text-[#2B2523]">HOJE (IMPROVISO)</h3>
                </div>
              </div>

              <div className="space-y-3">
                {beforeList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#69433C] font-medium">
                    <XCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DFDFDD] text-xs font-black text-[#EF4444]">
              Perda de tempo, atraso nas ofertas e ruído de marca.
            </div>
          </div>

          {/* COM SENSOR MERCADO Card */}
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#F59E0B]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm card-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[#DFDFDD]">
                <div className="p-2.5 rounded-xl bg-[#F59E0B]/20 text-[#2B2523] border border-[#F59E0B]/40">
                  <CheckCircle2 className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#F59E0B] uppercase tracking-wider">
                    NOVO PADRÃO ENTERPRISE
                  </span>
                  <h3 className="text-xl font-extrabold text-[#2B2523]">COM SENSOR MERCADO</h3>
                </div>
              </div>

              <div className="space-y-3">
                {afterList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#2B2523] font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#DFDFDD] text-xs font-black text-[#F59E0B] flex items-center justify-between">
              <span>Processo padronizado, ágil e escalável para N lojas.</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
