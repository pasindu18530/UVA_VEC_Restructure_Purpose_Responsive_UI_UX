import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { TerminalModal } from './components/TerminalModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { BusinessSupportPage } from './pages/BusinessSupportPage';
import { CareersPage } from './pages/CareersPage';
import { InsightsPage } from './pages/InsightsPage';
import { AboutPage } from './pages/AboutPage';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  const handleOpenTerminal = () => {
    setIsTerminalModalOpen(true);
  };

  const handleCloseTerminal = () => {
    setIsTerminalModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container flex flex-col justify-between">
      <ScrollToTop />
      
      {/* Global Interactive Header */}
      <Header
        onRequestAudit={handleOpenAudit}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content View with route rendering */}
      <main className="w-full pt-20 bg-background flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenAudit={handleOpenAudit}
                onOpenTerminal={handleOpenTerminal}
              />
            }
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenAudit={handleOpenAudit} />}
          />
          <Route
            path="/products-and-platforms"
            element={<ProductsPage onOpenAudit={handleOpenAudit} />}
          />
          <Route
            path="/business-idea-support"
            element={<BusinessSupportPage onOpenAudit={handleOpenAudit} />}
          />
          <Route
            path="/careers"
            element={<CareersPage onOpenAudit={handleOpenAudit} />}
          />
          <Route
            path="/insights"
            element={
              <InsightsPage
                onOpenAudit={handleOpenAudit}
                onOpenTerminal={handleOpenTerminal}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenAudit={handleOpenAudit}
                onOpenTerminal={handleOpenTerminal}
              />
            }
          />
          {/* Fallback route */}
          <Route
            path="*"
            element={
              <HomePage
                onOpenAudit={handleOpenAudit}
                onOpenTerminal={handleOpenTerminal}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Interactive Footer */}
      <Footer onRequestAudit={handleOpenAudit} />

      {/* Global Modals */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
      />
      <TerminalModal
        isOpen={isTerminalModalOpen}
        onClose={handleCloseTerminal}
        onOpenAudit={() => {
          handleCloseTerminal();
          handleOpenAudit();
        }}
      />
    </div>
  );
};

export default App;
