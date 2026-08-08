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
          ? 'bg-[#F9F7F3]/95 backdrop-blur-md border-b border-[#DFDFDD] py-3 shadow-md'
          : 'bg-transparent py-4 sm:py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#F59E0B]/50 flex items-center justify-center group-hover:border-[#F59E0B] transition-all shadow-sm">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#F59E0B] group-hover:scale-110 transition-transform"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#2B2523] flex items-center gap-1">
                sensor<span className="text-[#F59E0B]">mercado</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#69433C] uppercase -mt-1">
                Enterprise B2B
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF] border border-[#DFDFDD] px-4 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-semibold text-[#69433C] hover:text-[#2B2523] px-3.5 py-1.5 rounded-full hover:bg-[#F4EDE2] transition-all duration-150"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-[#F59E0B]/15 text-[#2B2523] border border-[#F59E0B]/40 hover:bg-[#F59E0B] transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Acessar Demo Live</span>
              <ExternalLink className="w-3 h-3 text-[#69433C]" />
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
              className="sm:hidden px-3 py-2 rounded-xl text-[11px] font-extrabold bg-[#F59E0B] text-[#2B2523] flex items-center gap-1 shadow-sm"
            >
              <span>Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar Menu Mobile"
              className="p-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-[#FFFFFF] border border-[#DFDFDD] text-[#2B2523] hover:text-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] flex items-center justify-center shadow-sm"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F7F3]/98 backdrop-blur-xl border-b border-[#DFDFDD] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-semibold text-[#69433C] hover:text-[#2B2523] py-3 border-b border-[#DFDFDD]/60 flex items-center justify-between min-h-[44px]"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://www.sensormercado.com.br/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] px-4 py-3 rounded-xl text-xs font-black bg-[#F59E0B] text-[#2B2523] flex items-center justify-center gap-2 shadow-sm active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-[#2B2523]" />
              <span>ACESSAR DEMO LIVE ONLINE</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Button
              variant="secondary"
              size="md"
              className="w-full justify-center min-h-[48px]"
              onClick={(e: any) => handleScrollTo(e, '#demonstracao')}
              rightIcon={<ArrowRight className="w-4 h-4 text-[#F59E0B]" />}
            >
              Agendar demonstração comercial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
