import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';

import HomePage from './pages/HomePage.jsx';
import CoffeeSnacksPage from './pages/CoffeeSnacksPage.jsx';
import ConvenienceStorePage from './pages/ConvenienceStorePage.jsx';

export default function App() {
  const location = useLocation();

  // Reveal-on-scroll for any element with `.reveal`. Re-runs on every route
  // change so new pages also animate their content in.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coffee-snacks" element={<CoffeeSnacksPage />} />
          <Route path="/convenience-store" element={<ConvenienceStorePage />} />
          {/* Fallback: anything unknown → home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
