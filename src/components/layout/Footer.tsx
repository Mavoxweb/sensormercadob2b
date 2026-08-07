'use client';

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Produto', href: '#produto' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Demonstração', href: '#demonstracao' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Privacidade & Termos', href: '#faq' },
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
                className="text-sm text-[#A7B0AB] hover:text-[#20D477] transition-colors"
              >
                {link.label}
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
