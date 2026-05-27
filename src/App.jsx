import { useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';

import HomePage from './pages/HomePage.jsx';
import CoffeeSnacksPage from './pages/CoffeeSnacksPage.jsx';
import ConvenienceStorePage from './pages/ConvenienceStorePage.jsx';
import CarwashPage from './pages/CarwashPage.jsx';
import ValetCleaningPage from './pages/ValetCleaningPage.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminDashboardPage from './pages/admin/AdminDashboardPage.jsx';

// Public-site layout: Navbar + Footer wrap every public route.
function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// Admin layout is supplied inside each admin page so the login screen can
// render full-bleed without a chrome. Nothing to wrap here.
function AdminBareLayout() {
  return <Outlet />;
}

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
      <Routes>
        {/* Public site */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/coffee-snacks" element={<CoffeeSnacksPage />} />
          <Route path="/convenience-store" element={<ConvenienceStorePage />} />
          <Route path="/carwash" element={<CarwashPage />} />
          <Route path="/valet-cleaning" element={<ValetCleaningPage />} />
        </Route>

        {/* Admin (no public Navbar/Footer) */}
        <Route element={<AdminBareLayout />}>
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Anything else → public home */}
        <Route element={<PublicLayout />}>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
