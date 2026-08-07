'use client';

import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Produto', href: '#produto', isExternal: false },
    { label: 'Como funciona', href: '#como-funciona', isExternal: false },
    { label: 'Demo On-line', href: 'https://www.sensormercado.com.br/demo', isExternal: true },
    { label: 'Demonstração', href: '#demonstracao', isExternal: false },
    { label: 'FAQ', href: '#faq', isExternal: false },
  ];

  return (
    <footer className="bg-[#090D0F] border-t border-[#253039] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#253039]/60">
          {/* Brand Info */}
          <div className="flex flex-col gap-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#171E24] border border-[#20D477]/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-sm bg-[#20D477]"></span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#F4F7F5]">
                sensor<span className="text-[#20D477]">mercado</span>
              </span>
            </div>
            <p className="text-sm text-[#A7B0AB] leading-relaxed">
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
                className="text-sm text-[#A7B0AB] hover:text-[#20D477] transition-colors flex items-center gap-1"
              >
                <span>{link.label}</span>
                {link.isExternal && <ExternalLink className="w-3 h-3 text-[#20D477]" />}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7B75]">
          <p>© {currentYear} Sensor Mercado. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#20D477]"></span>
            <span>Operação Vitalícia Enterprise • Governança Matriz & Unidades</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
