'use client';

import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Produto', href: '#produto', isExternal: false },
    { label: 'Como funciona', href: '#como-funciona', isExternal: false },
    { label: 'Seja Parceiro (Agências)', href: '/seja-parceiro-agencia', isExternal: false },
    { label: 'Demo On-line', href: 'https://www.sensormercado.com.br/demo', isExternal: true },
    { label: 'Demonstração', href: '#demonstracao', isExternal: false },
    { label: 'FAQ', href: '#faq', isExternal: false },
  ];

  return (
    <footer className="bg-[#F4EDE2] border-t border-[#DFDFDD] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#DFDFDD]">
          {/* Brand Info */}
          <div className="flex flex-col gap-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#FFFFFF] border border-[#F59E0B]/50 flex items-center justify-center shadow-sm">
                <span className="w-2 h-2 rounded-sm bg-[#F59E0B]"></span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#2B2523]">
                sensor<span className="text-[#F59E0B]">mercado</span>
              </span>
            </div>
            <p className="text-sm text-[#69433C] leading-relaxed">
              Plataforma de infraestrutura para criação e distribuição automatizada de campanhas comerciais para redes de supermercados.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="text-sm font-semibold text-[#69433C] hover:text-[#F59E0B] transition-colors flex items-center gap-1"
              >
                <span>{link.label}</span>
                {link.isExternal && <ExternalLink className="w-3 h-3 text-[#F59E0B]" />}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F817A]">
          <p>© {currentYear} Sensor Mercado. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            <span>Operação Vitalícia Enterprise • Administração Matriz & Unidades</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
