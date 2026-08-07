'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Produto', href: '#produto' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Matriz + Unidades', href: '#matriz-unidades' },
    { label: 'Multiformato', href: '#multiformato' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#090D0F]/95 backdrop-blur-md border-b border-[#253039] py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20D477] rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#171E24] border border-[#20D477]/40 flex items-center justify-center group-hover:border-[#20D477] transition-all shadow-[0_0_12px_rgba(32,212,119,0.2)]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#20D477] group-hover:scale-110 transition-transform"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#F4F7F5] flex items-center gap-1">
                sensor<span className="text-[#20D477]">mercado</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#A7B0AB] uppercase -mt-1">
                Enterprise B2B
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12181D]/80 border border-[#253039] px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-medium text-[#A7B0AB] hover:text-[#F4F7F5] px-3.5 py-1.5 rounded-full hover:bg-[#171E24] transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.sensormercado.com.br/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#20D477]/10 text-[#20D477] border border-[#20D477]/40 hover:bg-[#20D477] hover:text-[#090D0F] transition-all shadow-[0_0_15px_rgba(32,212,119,0.15)] active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acessar Demo Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={(e: any) => handleScrollTo(e, '#demonstracao')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Agendar demonstração
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://www.sensormercado.com.br/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-2 rounded-xl text-[11px] font-extrabold bg-[#20D477] text-[#090D0F] flex items-center gap-1 shadow-[0_0_12px_rgba(32,212,119,0.3)]"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar Menu Mobile"
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-[#12181D] border border-[#253039] text-[#F4F7F5] hover:text-[#20D477] focus:outline-none focus:ring-2 focus:ring-[#20D477] flex items-center justify-center"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1215]/98 backdrop-blur-xl border-b border-[#253039] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-semibold text-[#A7B0AB] hover:text-[#20D477] py-3 border-b border-[#253039]/40 flex items-center justify-between min-h-[44px]"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://www.sensormercado.com.br/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] px-4 py-3 rounded-xl text-xs font-black bg-[#20D477] text-[#090D0F] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(32,212,119,0.3)] active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              <span>ACESSAR DEMO LIVE ONLINE</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Button
              variant="secondary"
              size="md"
              className="w-full justify-center min-h-[48px]"
              onClick={(e: any) => handleScrollTo(e, '#demonstracao')}
              rightIcon={<ArrowRight className="w-4 h-4 text-[#20D477]" />}
            >
              Agendar demonstração comercial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
