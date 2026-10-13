import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onRequestAudit: () => void;
  onOpenTerminal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestAudit, onOpenTerminal }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products & Platforms', path: '/products-and-platforms' },
    { label: 'Business Idea Support', path: '/business-idea-support' },
    { label: 'Insights', path: '/insights' },
    { label: 'About', path: '/about' },
    { label: 'Careers', path: '/careers' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '/home';
    return location.pathname === path;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4 flex-shrink-0 group">
            <img
              alt="Image from https://uvavec.com/brief/logo.png"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="/assets/logo.png"
            />
            <div className="flex items-center gap-2.5">
              <span className="font-headline-sm text-headline-sm tracking-tight text-text-primary uppercase">
                UVA VEC
              </span>
              <span className="font-index-tag text-index-tag text-secondary px-2 py-0.5 rounded bg-surface-container-high tracking-wider uppercase hidden sm:inline-block">
                2026 ARCHITECTURE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7" data-active-classes="text-text-primary font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={
                  isActive(link.path)
                    ? 'transition-colors text-text-primary font-semibold'
                    : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <button
              onClick={onOpenTerminal}
              className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors hidden md:inline-flex items-center"
              data-path="client-terminal"
            >
              Client Terminal
            </button>
            <button
              onClick={onRequestAudit}
              className="font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all px-3.5 sm:px-4 py-2 rounded shadow-[0_0_16px_rgba(14,165,233,0.3)] tracking-wider uppercase text-xs sm:text-sm font-semibold"
              data-path="request-growth-audit"
            >
              Request Growth Audit
            </button>
            <button
              onClick={onOpenTerminal}
              aria-label="User Profile and Diagnostic Status"
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:brightness-110 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded bg-surface-container text-on-surface-variant hover:text-text-primary focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-surface-dim/95 backdrop-blur-2xl xl:hidden flex flex-col p-6 border-b border-border-glass overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-4 max-w-lg mx-auto w-full pt-4">
            <div className="font-index-tag text-index-tag text-secondary uppercase tracking-widest pb-2 border-b border-border-glass">
              NAVIGATION PORTAL // 2026
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded flex items-center justify-between text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-surface-container-high text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-text-primary hover:bg-surface-container'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-sm text-text-muted">chevron_right</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border-glass flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full py-3 rounded bg-surface-container border border-border-glass text-text-primary font-label-mono text-label-mono uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm text-primary">terminal</span>
                <span>Client Terminal</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestAudit();
                }}
                className="w-full py-3.5 rounded bg-primary-container text-on-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold shadow-lg shadow-primary-container/20 text-center flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">bolt</span>
                <span>Request Growth Audit</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
