import { useEffect } from 'react';

import CoffeeHero from '../components/coffee/CoffeeHero.jsx';
import CoffeeOfferings from '../components/coffee/CoffeeOfferings.jsx';
import CoffeeHours from '../components/coffee/CoffeeHours.jsx';
import CoffeeBackCTA from '../components/coffee/CoffeeBackCTA.jsx';

export default function CoffeeSnacksPage() {
  // Per-page document title for share previews & browser tab.
  useEffect(() => {
    const previous = document.title;
    document.title = 'Coffee & Snacks - Airport Energy';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <CoffeeHero />
      <CoffeeOfferings />
      <CoffeeHours />
      <CoffeeBackCTA />
    </>
  );
}
