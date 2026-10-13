import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onRequestAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestAudit }) => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-border-glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-space-lg">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                alt="Image from https://uvavec.com/brief/logo.png"
                className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
                src="/assets/logo.png"
              />
              <span className="font-headline-sm text-headline-sm tracking-tight text-text-primary uppercase">
                UVA VEC
              </span>
            </Link>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              A multidisciplinary AI-native venture infrastructure company operating across strategic systems, product ecosystems, growth automation, and execution platforms.
            </p>
            <div className="flex flex-col gap-1.5 pt-2">
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors"
                href="mailto:info@uvavec.com"
              >
                info@uvavec.com
              </a>
              <span className="font-label-mono text-label-mono text-text-muted">
                uvavec.com
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-index-tag text-index-tag text-text-primary uppercase tracking-widest">
              Solutions
            </span>
            <div className="flex flex-col gap-2">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="solutions"
                to="/services"
              >
                AI Workforce Ecosystems
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="solutions"
                to="/services"
              >
                Growth &amp; Automation
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="solutions"
                to="/services"
              >
                Knowledge Systems
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="solutions"
                to="/services"
              >
                Enterprise SaaS
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-index-tag text-index-tag text-text-primary uppercase tracking-widest">
              Ventures &amp; Products
            </span>
            <div className="flex flex-col gap-2">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="products-and-platforms"
                to="/products-and-platforms"
              >
                Anchor Room
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="products-and-platforms"
                to="/products-and-platforms"
              >
                Growth Engine
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="products-and-platforms"
                to="/products-and-platforms"
              >
                Leadscraper AI
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="products-and-platforms"
                to="/products-and-platforms"
              >
                Pinnacle CMS
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-index-tag text-index-tag text-text-primary uppercase tracking-widest">
              Advisory &amp; Programs
            </span>
            <div className="flex flex-col gap-2">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="business-idea-support"
                to="/business-idea-support"
              >
                Business Idea Support
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="services"
                to="/business-idea-support"
              >
                Tier Packages
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="services"
                to="/services"
              >
                Strategic Decomposition
              </Link>
              <button
                type="button"
                onClick={onRequestAudit}
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors text-left"
                data-path="request-growth-audit"
              >
                Growth Audit
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-index-tag text-index-tag text-text-primary uppercase tracking-widest">
              Company
            </span>
            <div className="flex flex-col gap-2">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="about"
                to="/about"
              >
                About UVA VEC
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="about"
                to="/about"
              >
                Executive Pedigree
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="careers"
                to="/careers"
              >
                Careers
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="about"
                to="/about"
              >
                Privacy Policy
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                data-path="about"
                to="/about"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-glass">
          <p className="font-label-mono text-label-mono text-text-muted text-center sm:text-left">
            &copy; 2026 THE UVA VEC. All Rights Reserved. Systems First. Research First.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
            <span className="font-label-mono text-label-mono text-text-muted uppercase">
              System Latency: 14ms (Operational)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
