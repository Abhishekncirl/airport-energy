import { useEffect } from 'react';

import StoreHero from '../components/store/StoreHero.jsx';
import StoreCategories from '../components/store/StoreCategories.jsx';
import StoreOpen247 from '../components/store/StoreOpen247.jsx';
import StoreWhyShopWithUs from '../components/store/StoreWhyShopWithUs.jsx';
import StoreBackCTA from '../components/store/StoreBackCTA.jsx';

export default function ConvenienceStorePage() {
  // Per-page document title for browser tab + share previews.
  useEffect(() => {
    const previous = document.title;
    document.title = 'Convenience Store — Airport Energy';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <StoreHero />
      <StoreCategories />
      <StoreOpen247 />
      <StoreWhyShopWithUs />
      <StoreBackCTA />
    </>
  );
}
