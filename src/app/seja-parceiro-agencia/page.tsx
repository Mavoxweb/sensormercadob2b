import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { AgencyHero } from '@/components/agency/AgencyHero';
import { AgencyCommissionHighlight } from '@/components/agency/AgencyCommissionHighlight';
import { AgencyWhatIsIt } from '@/components/agency/AgencyWhatIsIt';
import { InteractiveDemo } from '@/components/sections/InteractiveDemo';
import { AgencyWhatYouOffer } from '@/components/agency/AgencyWhatYouOffer';
import { AgencyAppExtension } from '@/components/agency/AgencyAppExtension';
import { AgencyHowItWorks } from '@/components/agency/AgencyHowItWorks';
import { AgencyTargetAudience } from '@/components/agency/AgencyTargetAudience';
import { AgencyInPractice } from '@/components/agency/AgencyInPractice';
import { AgencyFAQ } from '@/components/agency/AgencyFAQ';
import { AgencyPartnerForm } from '@/components/agency/AgencyPartnerForm';
import { AgencyFinalCTA } from '@/components/agency/AgencyFinalCTA';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Programa de Parceria para Agências | Sensor Mercado',
  description: 'Criar e entregar encartes e aplicativos para redes de supermercados com a tecnologia da Sensor Mercado. Ganhe 20% de comissão em cada venda.',
};

export default function AgencyPartnerPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F3] text-[#2B2523] selection:bg-[#F59E0B] selection:text-[#2B2523]">
      <Navbar isAgencyPage={true} />
      <main>
        <AgencyHero />
        <AgencyCommissionHighlight />
        <AgencyWhatIsIt />
        <InteractiveDemo />
        <AgencyWhatYouOffer />
        <AgencyAppExtension />
        <AgencyHowItWorks />
        <AgencyTargetAudience />
        <AgencyInPractice />
        <AgencyFAQ />
        <AgencyPartnerForm />
        <AgencyFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
