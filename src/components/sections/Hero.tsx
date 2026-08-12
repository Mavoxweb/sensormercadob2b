'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroProductMockup } from '../hero/HeroProductMockup';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 lg:pb-24 overflow-hidden bg-[#F9F7F3]">
      {/* Background Radial Glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#F59E0B]/8 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#69433C]/5 blur-3xl" />
      </div>

      {/* Subtle Grid Background Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#DFDFDD60_1px,transparent_1px),linear-gradient(to_bottom,#DFDFDD60_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-column Hero Grid: Copy Left, Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* ─── LEFT: Copy Column ─── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">

            {/* Eyebrow */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Badge variant="amber" className="py-1.5 px-4 text-xs tracking-widest uppercase">
                PARA REDES DE VAREJO COM 5 LOJAS OU MAIS
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#2B2523] tracking-tight leading-[1.08] break-words"
            >
              Sua rede cresceu.{' '}
              <span className="block text-[#F59E0B] mt-1 sm:mt-2">
                O jeito de anunciar continuou o mesmo.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-base sm:text-xl text-[#69433C] font-normal leading-relaxed max-w-lg"
            >
              Quando cada campanha depende de pedido, aprovação e ajuste manual, a oferta demora, a rede perde o padrão e a operação fica presa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 pt-2 w-full"
            >
              {/* Primary Action */}
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto min-h-[44px] font-black text-sm"
                onClick={() => scrollTo('#prototipo')}
                leftIcon={<Sparkles className="w-4 h-4 text-[#2B2523]" />}
              >
                Testar o protótipo
              </Button>

              {/* Tertiary Action */}
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto min-h-[44px] border-[#F59E0B]/50 hover:bg-[#F59E0B]/10 text-[#2B2523] font-extrabold"
                onClick={() => scrollTo('#demonstracao')}
                rightIcon={<ArrowRight className="w-4 h-4 text-[#F59E0B]" />}
              >
                Agendar demonstração
              </Button>
            </motion.div>

            {/* Advantages Highlights Grid */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 w-full border-t border-[#DFDFDD]/60"
            >
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-[#EBE7DF] shadow-xs">
                <div className="p-1.5 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2B2523] leading-tight">Agilidade Total</p>
                  <p className="text-[11px] text-[#69433C] leading-tight">Campanhas em minutos</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-[#EBE7DF] shadow-xs">
                <div className="p-1.5 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2B2523] leading-tight">100% Padrão Visual</p>
                  <p className="text-[11px] text-[#69433C] leading-tight">Controle da matriz</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-[#EBE7DF] shadow-xs">
                <div className="p-1.5 rounded-lg bg-[#F59E0B]/15 text-[#F59E0B] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2B2523] leading-tight">Escala sem Gargalo</p>
                  <p className="text-[11px] text-[#69433C] leading-tight">De 5 a 50+ lojas</p>
                </div>
              </div>
            </motion.div>

            {/* Microcopy */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs font-bold text-[#69433C] pt-1"
            >
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>Teste em menos de 1 minuto, sem cadastro e sem compromisso.</span>
            </motion.div>
          </div>

          {/* ─── RIGHT: Product Mockup Column ─── */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:flex lg:justify-center lg:items-center"
          >
            <HeroProductMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
