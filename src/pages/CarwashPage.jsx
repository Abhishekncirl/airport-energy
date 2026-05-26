import { useEffect } from 'react';

import CarwashHero from '../components/carwash/CarwashHero.jsx';
import WashPackages from '../components/carwash/WashPackages.jsx';
import CarwashOffers from '../components/carwash/CarwashOffers.jsx';
import HowItWorks from '../components/carwash/HowItWorks.jsx';
import WhyOurWashPod from '../components/carwash/WhyOurWashPod.jsx';
import CarwashBackCTA from '../components/carwash/CarwashBackCTA.jsx';

export default function CarwashPage() {
  // Per-page document title for browser tab + share previews.
  useEffect(() => {
    const previous = document.title;
    document.title = 'WashPod Carwash — Airport Energy';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <CarwashHero />
      <WashPackages />
      <CarwashOffers />
      <HowItWorks />
      <WhyOurWashPod />
      <CarwashBackCTA />
    </>
  );
}
