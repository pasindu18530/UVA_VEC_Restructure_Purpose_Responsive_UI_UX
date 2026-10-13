import React from 'react';

interface AboutPageProps {
  onOpenAudit: () => void;
  onOpenTerminal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenAudit, onOpenTerminal }) => {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* DOSSIER HEADER TICKER */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-3 border-b border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-signal-success animate-ping"></span>
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
              CORPORATE DOSSIER // 2026 ARCHITECTURE
            </span>
            <span className="text-text-muted text-xs hidden sm:inline">•</span>
            <span className="font-label-mono text-label-mono text-text-muted uppercase">SYSTEM IDENTIFIER: THE UVA VEC</span>
          </div>
          <div className="flex items-center gap-6 font-label-mono text-label-mono text-text-muted">
            <span>REGISTERED: 2026 INFRASTRUCTURE</span>
          </div>
        </div>
      </section>

      {/* HERO: CORPORATE OVERVIEW */}
      <section className="relative w-full overflow-hidden bg-surface-dim pt-12 pb-20 px-6 lg:px-12">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
              <a href="/" className="hover:text-primary transition-colors">HOME</a>
              <span>/</span>
              <span className="text-text-primary">ABOUT UVA VEC</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1 rounded bg-surface-container-high border border-border-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
              <span className="font-index-tag text-index-tag text-primary tracking-widest uppercase">
                INDEX 01 // 11 • CORPORATE OVERVIEW
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/logo.png"
                  alt="UVA VEC Logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="font-headline-sm text-headline-sm text-text-primary uppercase tracking-tight">THE UVA VEC</span>
              </div>
              <h1 className="font-headline-display text-headline-display text-text-primary tracking-tight uppercase">
                Beyond Development. <span className="text-primary">Venture Infrastructure.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                A multidisciplinary AI-native venture infrastructure company operating across strategic systems, product ecosystems, growth automation, AI workforce infrastructure, venture acceleration, and scalable execution platforms.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3.5 bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono font-semibold tracking-wider uppercase rounded shadow-[0_0_24px_rgba(14,165,233,0.35)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Growth Audit</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  onClick={onOpenTerminal}
                  className="px-6 py-3.5 bg-surface-container hover:bg-surface-container-high text-text-primary font-label-mono text-label-mono tracking-wider uppercase rounded border border-border-glass flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                  <span>System Diagnostics</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="rounded-xl overflow-hidden border border-border-glass-bright shadow-2xl relative bg-surface-container-low aspect-[16/10]">
                <img
                  alt="Modern diverse team of tech professionals and engineers collaborating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  src="/assets/tech-team.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-surface-dim/90 backdrop-blur-md border border-border-glass flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-text-primary">GLOBAL ARCHITECTURE POD</span>
                  <span className="font-index-tag text-index-tag text-secondary uppercase">ASYNC DISPATCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE PILLARS */}
      <section className="w-full py-20 px-6 lg:px-12 bg-background border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
              02 // OPERATIONAL ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">
              The Four Vectors of Execution
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              We do not build generic applications. We engineer integrated systems designed around execution behavior and systemic leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">neurology</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">AI Systems</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  AI-native systems, operational intelligence, RLHF evaluations, human-in-the-loop workflows, and autonomous business automation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-secondary">
                VECTOR 01 // INTELLIGENCE
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">layers</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">SaaS Systems</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Execution-centric platforms, multi-tenant database clusters, and hardened venture systems engineered for durability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-secondary">
                VECTOR 02 // SOFTWARE MACHINES
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">settings_suggest</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Strategic Ops</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Workflow decomposition, operational bottleneck remediation, constraint theory mapping, and async collaboration protocol.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-secondary">
                VECTOR 03 // LEVERAGE &amp; RIGOR
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Growth Engines</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Autonomous lead velocity pipelines, algorithmic customer acquisition, and venture acceleration infrastructure.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-secondary">
                VECTOR 04 // REVENUE CONDUITS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE PEDIGREE & HISTORICAL EXPOSURE */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface-dim border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
              09 // 11 • EXECUTIVE PEDIGREE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">
              Strategic Exposure &amp; Engineering Pedigree
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
              The UVA VEC's operational thesis is deeply rooted in our leadership's historical engagements. Our infrastructure and systems are informed by high-level project exposure navigating complex workflows within tier-one AI ecosystems and global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 01</span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Tier-One AI Ecosystems</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Leading prompt evaluation rigs, large-scale RLHF pipelines, synthetic dataset engineering, and multi-turn reasoning benchmark curation.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                EXPOSURE: FRONTIER LABS
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 02</span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Algorithmic Trading &amp; Fintech</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Engineering ultra-low-latency market observation pipelines, systematic risk-containment protocols, and deterministic execution terminals.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                EXPOSURE: QUANTITATIVE PROTOCOLS
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 03</span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Enterprise Venture Architecture</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  End-to-end incubation of multi-tenant micro-SaaS platforms, distributed web crawling clusters, and automated CRM orchestration.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                EXPOSURE: VENTURE SCALE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO PARTNERSHIP */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-20 border-t border-border-glass text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
            10 // 11 • INITIATE PARTNERSHIP
          </span>
          <h2 className="font-headline-display text-headline-display text-text-primary tracking-tight">
            Build the Future With UVA VEC.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            You have a massive vision. We have the infrastructure to make it real. Stop wrestling with off-the-shelf software and start scaling your business with systems designed exclusively for how you operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenAudit}
              className="px-8 py-4 bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold rounded shadow-lg shadow-primary-container/20 cursor-pointer"
            >
              Request Growth Audit
            </button>
            <a
              href="https://calendly.com/inyoweng/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-surface-container hover:bg-surface-container-high text-text-primary font-label-mono text-label-mono uppercase tracking-wider rounded border border-border-glass"
            >
              Book 15-Min Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
