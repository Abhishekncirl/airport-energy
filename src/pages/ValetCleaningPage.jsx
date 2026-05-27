import { useEffect } from 'react';

import ValetHero from '../components/valet/ValetHero.jsx';
import ValetPricingBanner from '../components/valet/ValetPricingBanner.jsx';
import ValetMachines from '../components/valet/ValetMachines.jsx';
import ValetHowItWorks from '../components/valet/ValetHowItWorks.jsx';
import ValetWhyChoose from '../components/valet/ValetWhyChoose.jsx';
import ValetProTips from '../components/valet/ValetProTips.jsx';
import ValetBackCTA from '../components/valet/ValetBackCTA.jsx';

export default function ValetCleaningPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Self-Service Valet Centre - Airport Energy';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <ValetHero />
      <ValetPricingBanner />
      <ValetMachines />
      <ValetHowItWorks />
      <ValetWhyChoose />
      <ValetProTips />
      <ValetBackCTA />
    </>
  );
}
