import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { OperationalProblem } from '@/components/sections/OperationalProblem';
import { InteractiveDemo } from '@/components/sections/InteractiveDemo';
import { MatrixUnits } from '@/components/sections/MatrixUnits';
import { ProductWorkflow } from '@/components/sections/ProductWorkflow';
import { MultiFormat } from '@/components/sections/MultiFormat';
import { AppFeature } from '@/components/sections/AppFeature';
import { PrintToDigital } from '@/components/sections/PrintToDigital';
import { ScaleNetwork } from '@/components/sections/ScaleNetwork';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { EnterpriseOffer } from '@/components/sections/EnterpriseOffer';
import { DemoForm } from '@/components/sections/DemoForm';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F7F3] text-[#2B2523] selection:bg-[#F59E0B] selection:text-[#2B2523]">
      <Navbar />
      <main>
        <Hero />
        <TargetAudience />
        <OperationalProblem />
        <InteractiveDemo />
        <MatrixUnits />
        <ProductWorkflow />
        <MultiFormat />
        <AppFeature />
        <PrintToDigital />
        <ScaleNetwork />
        <BeforeAfter />
        <EnterpriseOffer />
        <DemoForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
