import { useEffect } from 'react';

import OtherServicesHero from '../components/other/OtherServicesHero.jsx';
import OtherServicesGrid from '../components/other/OtherServicesGrid.jsx';
import WhyStopHere from '../components/other/WhyStopHere.jsx';
import OtherServicesBackCTA from '../components/other/OtherServicesBackCTA.jsx';

export default function OtherServicesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Other Services — Airport Energy';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <OtherServicesHero />
      <OtherServicesGrid />
      <WhyStopHere />
      <OtherServicesBackCTA />
    </>
  );
}
