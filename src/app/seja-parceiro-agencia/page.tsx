import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { AgencyHero } from '@/components/agency/AgencyHero';
import { HeroProductDemo } from '@/components/sections/HeroProductDemo';
import { AgencyWhatIsIt } from '@/components/agency/AgencyWhatIsIt';
import { AgencyCommissionHighlight } from '@/components/agency/AgencyCommissionHighlight';
import { InteractiveDemo } from '@/components/sections/InteractiveDemo';
import { AgencyTargetAudience } from '@/components/agency/AgencyTargetAudience';
import { AgencyWhatYouOffer } from '@/components/agency/AgencyWhatYouOffer';
import { AgencyAppExtension } from '@/components/agency/AgencyAppExtension';
import { AgencyHowItWorks } from '@/components/agency/AgencyHowItWorks';
import { AgencyInPractice } from '@/components/agency/AgencyInPractice';
import { AgencyFAQ } from '@/components/agency/AgencyFAQ';
import { AgencyPartnerForm } from '@/components/agency/AgencyPartnerForm';
import { AgencyFinalCTA } from '@/components/agency/AgencyFinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Programa de Parceria para Agências | Sensor Mercado',
  description: 'Criar e entregar encartes e aplicativos para redes de varejo com a tecnologia da Sensor Mercado. Ganhe 20% de comissão em cada venda.',
};

export default function AgencyPartnerPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F3] text-[#2B2523] selection:bg-[#F59E0B] selection:text-[#2B2523]">
      <Navbar isAgencyPage={true} />
      <main>
        {/* 1. Headline */}
        <AgencyHero />

        {/* 2. Teste — demo */}
        <section id="demo-software" className="pb-16 lg:pb-24 bg-[#F9F7F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <HeroProductDemo />
          </div>
        </section>

        {/* 3. O que é — O que é o Sensor Mercado */}
        <AgencyWhatIsIt />

        {/* 4. Vire parceiro — Vire parceiro e ganhe em cada venda (20%) */}
        <AgencyCommissionHighlight />

        {/* 5. Experimente agora — Não acredita? Faz um agora. */}
        <InteractiveDemo />

        {/* 6. Pra quem é — Feita pra agência que atende varejo */}
        <AgencyTargetAudience />

        {/* 7. Portfólio da agência — O que você passa a oferecer */}
        <AgencyWhatYouOffer />

        {/* 8. App — Leve também o app pro seu cliente */}
        <AgencyAppExtension />

        {/* 9. Modelo de atuação — Você mantém o cliente */}
        <AgencyHowItWorks />

        {/* 10. Sem equipe técnica */}
        <AgencyInPractice />

        {/* 11. FAQ */}
        <AgencyFAQ />

        {/* 12. Formulário + chamada final */}
        <AgencyPartnerForm />
        <AgencyFinalCTA />
      </main>
      <Footer />
    </div>
  );
}

