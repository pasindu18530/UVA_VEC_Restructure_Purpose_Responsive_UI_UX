import React, { useState } from 'react';

export const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'enterprise' | 'micro'>('all');
  const [dispatchStatus, setDispatchStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    system: 'anchor',
    vector: 'whitelabel',
    requirements: '',
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatchStatus(true);
  };

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* Command Telemetry Background Pattern / Grid Canvas */}
      <div className="relative w-full overflow-hidden bg-background">
        {/* Ambient Structural Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-96 bg-primary-container/10 blur-[130px] pointer-events-none -z-0"></div>
        <div className="absolute -top-24 right-10 w-96 h-96 bg-secondary-container/10 blur-[100px] pointer-events-none -z-0"></div>

        {/* MAIN DOSSIER CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-space-2xl flex flex-col gap-space-xl">
          {/* CHAPTER 04 HEADER: ARCHITECTURAL DOSSIER BANNER */}
          <header className="flex flex-col gap-6 border-b border-border-glass pb-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-primary-container/30 text-primary font-index-tag text-index-tag uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  04 // PROPRIETARY VENTURE PORTFOLIO
                </span>
                <span className="font-label-mono text-label-mono text-text-muted hidden sm:inline-block">
                  SYS_STATUS: ACTIVE RUNTIMES [15 ENGINES]
                </span>
              </div>
              <div className="flex items-center gap-3 font-label-mono text-label-mono text-text-muted bg-surface-container-low px-3 py-1.5 rounded border border-border-glass">
                <span className="material-symbols-outlined text-signal-success text-base">verified</span>
                <span>VERIFIED IN-HOUSE ARCHITECTURE // 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-8 flex flex-col gap-3">
                <h1 className="font-headline-display text-headline-display text-text-primary uppercase tracking-tight">
                  Flagship Systems &amp; Scalable Product Ecosystems
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                  A curated portfolio of in-house platforms, enterprise SaaS engines, and micro-utilities engineered for maximum operational leverage. Zero off-the-shelf wrappers; designed strictly for sovereign execution.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 bg-surface-container/60 p-5 rounded-lg border border-border-glass">
                <div className="relative w-full h-28 rounded overflow-hidden border border-border-glass-bright mb-1 group">
                  <img
                    src="/assets/cinematic-engineering.png"
                    alt="Cinematic dark-mode engineering operations center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
                  <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-lowest/80 backdrop-blur-md border border-border-glass">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-ping"></span>
                    <span className="font-index-tag text-index-tag text-primary uppercase tracking-wider">
                      CLUSTER RUNTIME // ACTIVE
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-label-mono text-label-mono text-text-muted">
                    PORTFOLIO DEPLOYMENT METRIC
                  </span>
                  <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
                    99.98% TELEMETRY HEALTH
                  </span>
                </div>
                <a
                  className="font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all px-4 py-2.5 rounded shadow-[0_0_16px_rgba(14,165,233,0.3)] tracking-wider uppercase inline-flex items-center gap-2 w-full justify-center font-semibold"
                  href="#inquiry-terminal"
                >
                  <span>White-Label Inquiries</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* DYNAMIC FILTER MATRIX CONTROLLER */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex flex-wrap items-center gap-2 p-1 bg-surface-container-low rounded-lg border border-border-glass" id="portfolio-filters" role="tablist">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`filter-btn font-label-mono text-label-mono px-3.5 py-1.5 rounded uppercase tracking-wider transition-all ${
                    activeFilter === 'all'
                      ? 'active-filter bg-primary-container text-on-primary'
                      : 'text-on-surface-variant hover:text-text-primary'
                  }`}
                  type="button"
                >
                  All Systems (15)
                </button>
                <button
                  onClick={() => setActiveFilter('flagship')}
                  className={`filter-btn font-label-mono text-label-mono px-3.5 py-1.5 rounded uppercase tracking-wider transition-all ${
                    activeFilter === 'flagship'
                      ? 'active-filter bg-primary-container text-on-primary'
                      : 'text-on-surface-variant hover:text-text-primary'
                  }`}
                  type="button"
                >
                  Flagship Platforms (4)
                </button>
                <button
                  onClick={() => setActiveFilter('enterprise')}
                  className={`filter-btn font-label-mono text-label-mono px-3.5 py-1.5 rounded uppercase tracking-wider transition-all ${
                    activeFilter === 'enterprise'
                      ? 'active-filter bg-primary-container text-on-primary'
                      : 'text-on-surface-variant hover:text-text-primary'
                  }`}
                  type="button"
                >
                  Enterprise SaaS (6)
                </button>
                <button
                  onClick={() => setActiveFilter('micro')}
                  className={`filter-btn font-label-mono text-label-mono px-3.5 py-1.5 rounded uppercase tracking-wider transition-all ${
                    activeFilter === 'micro'
                      ? 'active-filter bg-primary-container text-on-primary'
                      : 'text-on-surface-variant hover:text-text-primary'
                  }`}
                  type="button"
                >
                  Micro-SaaS &amp; Utilities (5)
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-label-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-signal-success"></span> Live Platform
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Enterprise Deployment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-signal-warning"></span> Private Beta
                </span>
              </div>
            </div>
          </header>

          {/* SECTION 01: IN-HOUSE FLAGSHIP PLATFORMS */}
          {(activeFilter === 'all' || activeFilter === 'flagship') && (
            <section className="portfolio-group flex flex-col gap-8" data-category="flagship">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-l-2 border-primary pl-4">
                <div>
                  <span className="font-index-tag text-index-tag text-primary uppercase tracking-widest block">
                    01 // STRATEGIC ASSETS
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
                    In-House Flagship Platforms
                  </h2>
                </div>
                <p className="font-label-mono text-label-mono text-text-muted">
                  CORE VENTURE INFRASTRUCTURE // LIVE TELEMETRY
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* FLAGSHIP CARD 01: ANCHOR ROOM */}
                <article className="portfolio-card flex flex-col justify-between bg-slate-surface/85 backdrop-blur-xl rounded-xl border border-border-glass-bright hover:border-primary/50 transition-all duration-300 p-6 lg:p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all"></div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-primary uppercase tracking-wider">
                          Tier 01 // Algorithmic Protocol
                        </span>
                        <h3 className="font-headline-md text-headline-md text-text-primary tracking-tight mt-1">
                          Anchor Room
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-signal-success/10 border border-signal-success/30 text-signal-success font-index-tag text-index-tag uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
                        Live Platform
                      </span>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      A Cognitive Trading Protocol designed around real-time market truths. Built to eliminate behavioral gambling and strictly prioritize systematic execution. Actively maps and restricts cognitive biases in live market conditions—enforcing algorithmic trade execution discipline that retail platforms intentionally ignore.
                    </p>

                    <div className="relative w-full h-40 rounded-lg overflow-hidden border border-border-glass-bright shadow-lg group/img">
                      <img
                        src="/assets/trading-desk.png"
                        alt="High-fidelity digital trading desk and algorithmic financial intelligence room"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-label-mono text-text-muted">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
                          FEED: DUAL-BROKER COGNITIVE ENGINE
                        </span>
                        <span className="text-primary font-semibold">ALPHA PROTOCOL v3.2</span>
                      </div>
                    </div>

                    {/* LIVE TELEMETRY HUD PREVIEW */}
                    <div className="bg-surface-container-lowest/90 rounded-lg p-4 border border-border-glass flex flex-col gap-3 font-label-mono text-label-mono">
                      <div className="flex items-center justify-between border-b border-border-glass pb-2">
                        <span className="text-text-muted text-[11px] uppercase tracking-wider">
                          DISCIPLINE MONITOR // LIVE FEED
                        </span>
                        <span className="text-signal-success text-[11px]">RUN_STATE: ENFORCED</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-1">
                        <div>
                          <span className="text-text-muted text-[10px] block">COGNITIVE BIAS</span>
                          <span className="text-text-primary font-semibold text-xs">0.04 (NOMINAL)</span>
                        </div>
                        <div>
                          <span className="text-text-muted text-[10px] block">RULE DEVIATION</span>
                          <span className="text-signal-success font-semibold text-xs">0.00%</span>
                        </div>
                        <div>
                          <span className="text-text-muted text-[10px] block">EXECUTION LATENCY</span>
                          <span className="text-primary font-semibold text-xs">11.8ms</span>
                        </div>
                      </div>
                      <div className="w-full pt-1">
                        <div className="flex justify-between text-[10px] text-text-muted mb-1">
                          <span>RISK-ENFORCEMENT THRESHOLD</span>
                          <span className="text-primary">94.2%</span>
                        </div>
                        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full transition-all duration-700" style={{ width: '94.2%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-glass">
                    <span className="font-label-mono text-label-mono text-text-muted">anchorroom.xyz</span>
                    <a
                      className="font-label-mono text-label-mono text-text-primary hover:text-primary transition-colors inline-flex items-center gap-2 group-hover:translate-x-1 duration-200"
                      href="https://anchorroom.xyz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Access Terminal</span>
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                  </div>
                </article>

                {/* FLAGSHIP CARD 02: GROWTH ENGINE */}
                <article className="portfolio-card flex flex-col justify-between bg-slate-surface/85 backdrop-blur-xl rounded-xl border border-border-glass-bright hover:border-primary/50 transition-all duration-300 p-6 lg:p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-container/20 transition-all"></div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-primary uppercase tracking-wider">
                          Tier 02 // Pipeline Acceleration
                        </span>
                        <h3 className="font-headline-md text-headline-md text-text-primary tracking-tight mt-1">
                          Growth Engine
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-signal-success/10 border border-signal-success/30 text-signal-success font-index-tag text-index-tag uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
                        Live Platform
                      </span>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Stop hunting. Start closing. A fully integrated Lead Velocity Ecosystem engineered to convert cold market segments into validated warm pipelines. Bypasses standard CRM clutter by directly merging high-fidelity intelligence enrichment, automated scraping vectors, and outbound AI workflows into a single execution layer.
                    </p>

                    {/* LIVE TELEMETRY HUD PREVIEW */}
                    <div className="bg-surface-container-lowest/90 rounded-lg p-4 border border-border-glass flex flex-col gap-3 font-label-mono text-label-mono">
                      <div className="flex items-center justify-between border-b border-border-glass pb-2">
                        <span className="text-text-muted text-[11px] uppercase tracking-wider">
                          PIPELINE VELOCITY STREAM
                        </span>
                        <span className="text-primary text-[11px]">VECTORS: 4 ACTIVE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-1">
                        <div>
                          <span className="text-text-muted text-[10px] block">ENRICHMENT DEPTH</span>
                          <span className="text-text-primary font-semibold text-xs">98.4% DATA VAL</span>
                        </div>
                        <div>
                          <span className="text-text-muted text-[10px] block">OUTBOUND CADENCE</span>
                          <span className="text-text-primary font-semibold text-xs">1,240 / HR</span>
                        </div>
                        <div>
                          <span className="text-text-muted text-[10px] block">CONVERSION INDEX</span>
                          <span className="text-signal-success font-semibold text-xs">+34.8% ALPHA</span>
                        </div>
                      </div>
                      <div className="w-full pt-1 flex items-center justify-between">
                        <span className="text-[10px] text-text-muted">SYNCHRONIZED OUTBOUND BURST</span>
                        <svg className="h-5 w-36 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20">
                          <path d="M0 15 L15 12 L30 18 L45 8 L60 14 L75 4 L90 9 L100 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-glass">
                    <span className="font-label-mono text-label-mono text-text-muted">engine.uvavec.com</span>
                    <a
                      className="font-label-mono text-label-mono text-text-primary hover:text-primary transition-colors inline-flex items-center gap-2 group-hover:translate-x-1 duration-200"
                      href="https://engine.uvavec.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Deploy Engine</span>
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                  </div>
                </article>

                {/* FLAGSHIP CARD 03: LEADSCRAPER AI */}
                <article className="portfolio-card flex flex-col justify-between bg-slate-surface/85 backdrop-blur-xl rounded-xl border border-border-glass-bright hover:border-primary/50 transition-all duration-300 p-6 lg:p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all"></div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-primary uppercase tracking-wider">
                          Tier 03 // Autonomous Prospecting
                        </span>
                        <h3 className="font-headline-md text-headline-md text-text-primary tracking-tight mt-1">
                          Leadscraper AI
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary font-index-tag text-index-tag uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Enterprise Deployment
                      </span>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      All-in-one autonomous prospecting system utilizing deep entity graphs to hunt for corporate decision-makers. Directly bypasses conventional gatekeepers and gatekeeper software, verifying email telemetry, LinkedIn nodes, and intent signals to stream warm opportunities directly into your CRM.
                    </p>

                    {/* TELEMETRY PREVIEW */}
                    <div className="bg-surface-container-lowest/90 rounded-lg p-4 border border-border-glass flex flex-col gap-3 font-label-mono text-label-mono">
                      <div className="flex items-center justify-between border-b border-border-glass pb-2">
                        <span className="text-text-muted text-[11px] uppercase tracking-wider">
                          AUTONOMOUS CRAWLER HARVEST
                        </span>
                        <span className="text-primary text-[11px]">PRECISION: 99.1%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 py-1">
                        <div className="flex items-center justify-between bg-surface-container p-2 rounded">
                          <span className="text-text-muted text-[10px]">C-LEVEL ACCURACY</span>
                          <span className="text-text-primary font-semibold text-xs">96.8%</span>
                        </div>
                        <div className="flex items-center justify-between bg-surface-container p-2 rounded">
                          <span className="text-text-muted text-[10px]">BOUNCE RATE DAMPING</span>
                          <span className="text-signal-success font-semibold text-xs">&lt; 0.8%</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-text-muted leading-tight">
                        Native direct connectors configured: Salesforce, HubSpot, Close, custom Webhooks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-glass">
                    <span className="font-label-mono text-label-mono text-text-muted">SYSTEM ID: LS-901-AI</span>
                    <a
                      className="font-label-mono text-label-mono text-text-primary hover:text-primary transition-colors inline-flex items-center gap-2 group-hover:translate-x-1 duration-200"
                      href="#inquiry-terminal"
                    >
                      <span>Request API Access</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </article>

                {/* FLAGSHIP CARD 04: PINNACLE CMS */}
                <article className="portfolio-card flex flex-col justify-between bg-slate-surface/85 backdrop-blur-xl rounded-xl border border-border-glass-bright hover:border-primary/50 transition-all duration-300 p-6 lg:p-8 shadow-xl relative overflow-hidden group">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/20 transition-all"></div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col">
                        <span className="font-label-mono text-label-mono text-secondary uppercase tracking-wider">
                          Tier 04 // Next-Gen Discovery Engine
                        </span>
                        <h3 className="font-headline-md text-headline-md text-text-primary tracking-tight mt-1">
                          Pinnacle CMS
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-signal-success/10 border border-signal-success/30 text-signal-success font-index-tag text-index-tag uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
                        Live Platform
                      </span>
                    </div>

                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      The next-generation organic discovery engine built for the synthetic web. An AI-powered headless CMS scoring publication content in real time across traditional SEO, Answer Engine Optimization (AEO - Perplexity/Claude), and Generative Engine Optimization (GEO - OpenAI Search).
                    </p>

                    {/* LIVE SCORING RADAR MINI MATRIX */}
                    <div className="bg-surface-container-lowest/90 rounded-lg p-4 border border-border-glass flex flex-col gap-3 font-label-mono text-label-mono">
                      <div className="flex items-center justify-between border-b border-border-glass pb-2">
                        <span className="text-text-muted text-[11px] uppercase tracking-wider">
                          SYNTHETIC DISCOVERY COMPLIANCE
                        </span>
                        <span className="text-secondary text-[11px]">ENGINE: V4.8</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 py-1 text-center">
                        <div className="bg-surface-container/60 p-2 rounded">
                          <span className="text-text-muted text-[10px] block">SEO INDEX</span>
                          <span className="text-text-primary font-semibold text-xs">98 / 100</span>
                        </div>
                        <div className="bg-surface-container/60 p-2 rounded">
                          <span className="text-text-muted text-[10px] block">AEO (ANSWER)</span>
                          <span className="text-signal-success font-semibold text-xs">96 / 100</span>
                        </div>
                        <div className="bg-surface-container/60 p-2 rounded">
                          <span className="text-text-muted text-[10px] block">GEO (SEARCHGPT)</span>
                          <span className="text-primary font-semibold text-xs">94 / 100</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-text-muted">
                        <span>Structured JSON-LD schema generated autonomously</span>
                        <span className="text-secondary font-bold">100% VALID</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border-glass">
                    <span className="font-label-mono text-label-mono text-text-muted">
                      SYSTEM ID: PINNACLE-HEADLESS
                    </span>
                    <a
                      className="font-label-mono text-label-mono text-text-primary hover:text-primary transition-colors inline-flex items-center gap-2 group-hover:translate-x-1 duration-200"
                      href="#inquiry-terminal"
                    >
                      <span>Inspect Sandbox</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </article>
              </div>
            </section>
          )}

          {/* SECTION 02: ENTERPRISE & INDUSTRY SAAS SUITE */}
          {(activeFilter === 'all' || activeFilter === 'enterprise') && (
            <section className="portfolio-group flex flex-col gap-8 pt-6" data-category="enterprise">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-l-2 border-secondary pl-4">
                <div>
                  <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest block">
                    02 // VERTICAL INTEGRATIONS
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
                    Enterprise &amp; Industry SaaS Suite
                  </h2>
                </div>
                <p className="font-label-mono text-label-mono text-text-muted">
                  PROPRIETARY IP DEPLOYED ACROSS GLOBAL SECTORS
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AgriOMS */}
                <article className="portfolio-card bg-slate-surface/75 backdrop-blur-md rounded-lg p-6 border border-border-glass hover:border-border-glass-bright transition-all flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">warehouse</span>
                        <span className="font-index-tag text-index-tag text-text-muted uppercase">Agritech</span>
                      </div>
                      <span className="font-index-tag text-index-tag text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                        Enterprise
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">AgriOMS</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Intelligent supply chain and order management software built for large-scale agricultural enterprises, enabling real-time yield logistics and tracking inventory across decentralized distribution points.
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded font-label-mono text-label-mono text-xs flex justify-between border border-border-glass">
                      <span className="text-text-muted">Inventory Shrinkage</span>
                      <span className="text-signal-success font-semibold">-22.4%</span>
                    </div>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between text-xs font-label-mono">
                    <span className="text-text-muted">DEPLOYMENT: SCALED</span>
                    <a className="text-primary hover:underline inline-flex items-center gap-1" href="#inquiry-terminal">
                      Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </article>

                {/* Lead Conversion AI */}
                <article className="portfolio-card bg-slate-surface/75 backdrop-blur-md rounded-lg p-6 border border-border-glass hover:border-border-glass-bright transition-all flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-signal-success text-xl">smart_toy</span>
                        <span className="font-index-tag text-index-tag text-text-muted uppercase">B2B Sales</span>
                      </div>
                      <span className="font-index-tag text-index-tag text-signal-success px-2 py-0.5 rounded bg-signal-success/10 border border-signal-success/20">
                        Live Platform
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">Lead Conversion AI</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Autonomous B2B sales copilot that operates natively inside enterprise CRM environments to nurture inbound inquiries, parse budget authority, and execute meeting scheduling 24/7.
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded font-label-mono text-label-mono text-xs flex justify-between border border-border-glass">
                      <span className="text-text-muted">Mean Response Latency</span>
                      <span className="text-signal-success font-semibold">42 Seconds</span>
                    </div>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between text-xs font-label-mono">
                    <span className="text-text-muted">DEPLOYMENT: SCALED</span>
                    <a className="text-primary hover:underline inline-flex items-center gap-1" href="#inquiry-terminal">
                      Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </article>

                {/* SignPal Class */}
                <article className="portfolio-card bg-slate-surface/75 backdrop-blur-md rounded-lg p-6 border border-border-glass hover:border-border-glass-bright transition-all flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-xl">sign_language</span>
                        <span className="font-index-tag text-index-tag text-text-muted uppercase">EdTech Infra</span>
                      </div>
                      <span className="font-index-tag text-index-tag text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                        Enterprise
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">SignPal Class</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Breakthrough accessibility system rendering real-time, interactive 3D sign-language avatars inside live videoconferencing streams with ultra-low latency gesture synthesis.
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded font-label-mono text-label-mono text-xs flex justify-between border border-border-glass">
                      <span className="text-text-muted">Gesture Sync Accuracy</span>
                      <span className="text-text-primary font-semibold">99.4% F1 Score</span>
                    </div>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between text-xs font-label-mono">
                    <span className="text-text-muted">DEPLOYMENT: SCALED</span>
                    <a className="text-primary hover:underline inline-flex items-center gap-1" href="#inquiry-terminal">
                      Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </article>

                {/* Aswenna */}
                <article className="portfolio-card bg-slate-surface/75 backdrop-blur-md rounded-lg p-6 border border-border-glass hover:border-border-glass-bright transition-all flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-signal-warning text-xl">agriculture</span>
                        <span className="font-index-tag text-index-tag text-text-muted uppercase">Agritech Predictive</span>
                      </div>
                      <span className="font-index-tag text-index-tag text-signal-warning px-2 py-0.5 rounded bg-signal-warning/10 border border-signal-warning/20">
                        Private Beta
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">Aswenna</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Predictive crop harvesting digital ecosystem enabling collectors and farming collectives to run macro-yield forecasting based on regional weather models and soil metrics.
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded font-label-mono text-label-mono text-xs flex justify-between border border-border-glass">
                      <span className="text-text-muted">Yield Variance Model</span>
                      <span className="text-signal-success font-semibold">&plusmn;3.1% Precision</span>
                    </div>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between text-xs font-label-mono">
                    <span className="text-text-muted">PILOT STATUS: ACTIVE</span>
                    <a className="text-primary hover:underline inline-flex items-center gap-1" href="#inquiry-terminal">
                      Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </article>

                {/* GeoGem Scout */}
                <article className="portfolio-card bg-slate-surface/75 backdrop-blur-md rounded-lg p-6 border border-border-glass hover:border-border-glass-bright transition-all flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">satellite_alt</span>
                        <span className="font-index-tag text-index-tag text-text-muted uppercase">Geospatial Data</span>
                      </div>
                      <span className="font-index-tag text-index-tag text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                        Enterprise
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">GeoGem Scout</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Satellite-driven mining analytics copilot mapping multi-spectral orbital imagery and geological topologies to accelerate mineral identification and vein reconnaissance.
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded font-label-mono text-label-mono text-xs flex justify-between border border-border-glass">
                      <span className="text-text-muted">Resolution Grid</span>
                      <span className="text-text-primary font-semibold">0.5m Multispectral</span>
                    </div>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between text-xs font-label-mono">
                    <span className="text-text-muted">DEPLOYMENT: SCALED</span>
                    <a className="text-primary hover:underline inline-flex items-center gap-1" href="#inquiry-terminal">
                      Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </article>

                {/* HR Localization App */}
                <article className="portfolio-card bg-slate-surface/75 backdrop-blur-md rounded-lg p-6 border border-border-glass hover:border-border-glass-bright transition-all flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-xl">translate</span>
                        <span className="font-index-tag text-index-tag text-text-muted uppercase">Human Ops</span>
                      </div>
                      <span className="font-index-tag text-index-tag text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                        Enterprise
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">HR Localization App</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Enterprise document adaptation pipeline translating legal frameworks, onboarding manuals, and internal employee communications while maintaining strict regulatory compliance across jurisdictions.
                    </p>
                    <div className="bg-surface-container-lowest p-3 rounded font-label-mono text-label-mono text-xs flex justify-between border border-border-glass">
                      <span className="text-text-muted">Regulatory Conformance</span>
                      <span className="text-signal-success font-semibold">ISO 27001 / GDPR</span>
                    </div>
                  </div>
                  <div className="border-t border-border-glass pt-4 flex items-center justify-between text-xs font-label-mono">
                    <span className="text-text-muted">DEPLOYMENT: SCALED</span>
                    <a className="text-primary hover:underline inline-flex items-center gap-1" href="#inquiry-terminal">
                      Specs <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </a>
                  </div>
                </article>
              </div>
            </section>
          )}

          {/* SECTION 03: MICRO-SAAS & UTILITY INNOVATIONS */}
          {(activeFilter === 'all' || activeFilter === 'micro') && (
            <section className="portfolio-group flex flex-col gap-8 pt-6" data-category="micro">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-l-2 border-primary-container pl-4">
                <div>
                  <span className="font-index-tag text-index-tag text-primary-container uppercase tracking-widest block">
                    03 // HIGH-VELOCITY LEVERAGE
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
                    Micro-SaaS &amp; Utility Innovations
                  </h2>
                </div>
                <p className="font-label-mono text-label-mono text-text-muted">
                  FOCUSED WORKFLOW ENGINES ENGINEERED FOR ZERO FRICTION
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {/* MICRO 01: STORYBOARD AI */}
                <article className="portfolio-card bg-surface-container-low/90 rounded-lg p-5 border border-border-glass hover:border-primary/40 transition-all flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-primary text-xl">movie</span>
                      <span className="font-index-tag text-index-tag text-signal-success">LIVE</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">Storyboard AI</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Instant script-to-visual continuity generator for creative production agencies. Converts raw dialogue lines into timed visual storyboard sketches.
                    </p>
                  </div>
                  <span className="font-label-mono text-label-mono text-[11px] text-text-muted pt-2 border-t border-border-glass">
                    CREATIVE OPS // V2.1
                  </span>
                </article>

                {/* MICRO 02: RESUMEREDESIGN.AI */}
                <article className="portfolio-card bg-surface-container-low/90 rounded-lg p-5 border border-border-glass hover:border-primary/40 transition-all flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-secondary text-xl">badge</span>
                      <span className="font-index-tag text-index-tag text-signal-success">LIVE</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">ResumeRedesign.AI</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Physical-to-digital career bridge. Extracts content from camera photos of physical printed resumes and compiles modern, ATS-optimized executive layouts.
                    </p>
                  </div>
                  <span className="font-label-mono text-label-mono text-[11px] text-text-muted pt-2 border-t border-border-glass">
                    CONSUMER UTILITY // LIVE
                  </span>
                </article>

                {/* MICRO 03: REMOTION AI */}
                <article className="portfolio-card bg-surface-container-low/90 rounded-lg p-5 border border-border-glass hover:border-primary/40 transition-all flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-primary text-xl">video_settings</span>
                      <span className="font-index-tag text-index-tag text-primary">SCALED</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">Remotion AI</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Automated video director engine producing high-fidelity rendered marketing assets programmatically from single copy and asset prompts.
                    </p>
                  </div>
                  <span className="font-label-mono text-label-mono text-[11px] text-text-muted pt-2 border-t border-border-glass">
                    MARKETING ENGINES // V1.8
                  </span>
                </article>

                {/* MICRO 04: STOIC FINANCE */}
                <article className="portfolio-card bg-surface-container-low/90 rounded-lg p-5 border border-border-glass hover:border-primary/40 transition-all flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-signal-warning text-xl">account_balance_wallet</span>
                      <span className="font-index-tag text-index-tag text-signal-warning">BETA</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">Stoic Finance</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Voice &amp; vision behavioral economics companion designed to curb impulse spending through structured psychological friction checks.
                    </p>
                  </div>
                  <span className="font-label-mono text-label-mono text-[11px] text-text-muted pt-2 border-t border-border-glass">
                    BEHAVIORAL OPS // PILOT
                  </span>
                </article>

                {/* MICRO 05: THE TIE BREAKER */}
                <article className="portfolio-card bg-surface-container-low/90 rounded-lg p-5 border border-border-glass hover:border-primary/40 transition-all flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-signal-success text-xl">balance</span>
                      <span className="font-index-tag text-index-tag text-signal-success">LIVE</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-text-primary">The Tie Breaker</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Executive decision sounding board decomposing complex organizational crossroads with calibrated objective scoring matrices and risk modeling.
                    </p>
                  </div>
                  <span className="font-label-mono text-label-mono text-[11px] text-text-muted pt-2 border-t border-border-glass">
                    EXECUTIVE DECISION // LIVE
                  </span>
                </article>
              </div>
            </section>
          )}

          {/* SECTION 04: ARCHITECTURAL COMPARISON & VALIDATION SPEC */}
          <section className="flex flex-col gap-6 pt-10 border-t border-border-glass">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="font-index-tag text-index-tag text-primary uppercase tracking-widest">
                  DEPLOYMENT PRINCIPLE
                </span>
                <h2 className="font-headline-lg text-headline-lg text-text-primary">
                  Sovereign Architecture Over Commodity SaaS
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every platform in our ecosystem is built on direct API infrastructure, modular orchestrations, and proprietary models. We do not white-label brittle no-code platforms. You own the execution leverage.
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-3 text-body-sm text-text-primary">
                    <span className="material-symbols-outlined text-signal-success text-lg">check_circle</span>
                    <span>Fully auditable codebases &amp; zero vendor lock-in</span>
                  </div>
                  <div className="flex items-center gap-3 text-body-sm text-text-primary">
                    <span className="material-symbols-outlined text-signal-success text-lg">check_circle</span>
                    <span>Engineered for sub-100ms algorithmic latency pipelines</span>
                  </div>
                  <div className="flex items-center gap-3 text-body-sm text-text-primary">
                    <span className="material-symbols-outlined text-signal-success text-lg">check_circle</span>
                    <span>White-label &amp; sovereign instance licenses available</span>
                  </div>
                </div>
              </div>

              {/* COMPARISON SPEC MATRIX */}
              <div className="lg:col-span-7 bg-surface-container-low rounded-xl border border-border-glass p-6 overflow-hidden">
                <div className="flex items-center justify-between border-b border-border-glass pb-4 mb-4">
                  <span className="font-label-mono text-label-mono text-text-muted uppercase">
                    CAPABILITY BENCHMARK
                  </span>
                  <div className="flex items-center gap-6 font-label-mono text-label-mono">
                    <span className="text-primary font-semibold">UVA VEC PLATFORMS</span>
                    <span className="text-text-muted">TYPICAL AGENCIES</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 font-body-sm text-body-sm">
                  <div className="flex items-center justify-between py-2 border-b border-border-glass/40">
                    <span className="text-on-surface">Data Sovereignty &amp; Isolated Tenants</span>
                    <div className="flex items-center gap-14">
                      <span className="material-symbols-outlined text-signal-success text-base">check</span>
                      <span className="material-symbols-outlined text-signal-danger text-base">close</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-glass/40">
                    <span className="text-on-surface">Real-time LLM / RLHF Pipeline Adaptation</span>
                    <div className="flex items-center gap-14">
                      <span className="material-symbols-outlined text-signal-success text-base">check</span>
                      <span className="material-symbols-outlined text-signal-danger text-base">close</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-border-glass/40">
                    <span className="text-on-surface">Custom Behavioral &amp; Algorithmic Logic</span>
                    <div className="flex items-center gap-14">
                      <span className="material-symbols-outlined text-signal-success text-base">check</span>
                      <span className="material-symbols-outlined text-text-muted text-base">remove</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-on-surface">Dedicated Infrastructure SLA Guarantee</span>
                    <div className="flex items-center gap-14">
                      <span className="text-signal-success font-label-mono text-xs font-semibold">99.98%</span>
                      <span className="text-text-muted font-label-mono text-xs">Unspecified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 05: WHITE-LABEL & ENTERPRISE ACCESS INQUIRY TERMINAL */}
          <section className="bg-surface-container rounded-2xl border border-primary/30 p-8 lg:p-12 shadow-[0_0_32px_rgba(14,165,233,0.15)] relative overflow-hidden" id="inquiry-terminal">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-primary/30 text-primary font-index-tag text-index-tag uppercase tracking-wider w-fit">
                    NO. 11 // THE NEXT STEP
                  </span>
                  <h2 className="font-headline-display text-headline-display text-text-primary tracking-tight">
                    Request Platform Access
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Whether deploying a verified engine in-house, exploring white-label redistribution rights, or provisioning an enterprise tier license, connect directly with our venture architects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-label-mono text-label-mono text-text-muted">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">encrypted</span>
                    <span>Direct encrypted pipeline to UVA VEC partner desk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-signal-success text-base">timer</span>
                    <span>Typical review response window: &lt; 4 Hours</span>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE TERMINAL DISPATCH FORM */}
              <div className="lg:col-span-7 bg-surface-container-lowest/80 backdrop-blur-xl p-6 sm:p-8 rounded-xl border border-border-glass-bright flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-border-glass pb-3">
                  <span className="font-label-mono text-label-mono text-text-primary font-semibold">
                    PORTAL DISPATCH PROTOCOL
                  </span>
                  <span className="font-index-tag text-index-tag text-secondary uppercase">SYS_SEC_V3</span>
                </div>

                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4" id="portfolio-inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[11px]">
                        Executive Name
                      </label>
                      <input
                        className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                        placeholder="e.g. Marcus Vance"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[11px]">
                        Corporate Email
                      </label>
                      <input
                        className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                        placeholder="m.vance@enterprise.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[11px]">
                        Target System / Platform
                      </label>
                      <select
                        className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                        value={formData.system}
                        onChange={(e) => setFormData({ ...formData, system: e.target.value })}
                      >
                        <option value="anchor">Anchor Room (Cognitive Trading)</option>
                        <option value="growth">Growth Engine (Lead Velocity)</option>
                        <option value="scraper">Leadscraper AI (Prospecting)</option>
                        <option value="pinnacle">Pinnacle CMS (GEO/AEO Headless)</option>
                        <option value="agri">AgriOMS (Agri Supply Chain)</option>
                        <option value="signpal">SignPal Class (Avatar EdTech)</option>
                        <option value="geogem">GeoGem Scout (Satellite Mining)</option>
                        <option value="suite">Entire Portfolio / White-Label Rights</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[11px]">
                        Engagement Vector
                      </label>
                      <select
                        className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                        value={formData.vector}
                        onChange={(e) => setFormData({ ...formData, vector: e.target.value })}
                      >
                        <option value="whitelabel">White-Label / Redistribution License</option>
                        <option value="enterprise">Dedicated Enterprise Instance</option>
                        <option value="api">High-Volume API Integration</option>
                        <option value="invest">Venture Acceleration Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-mono text-label-mono text-on-surface-variant uppercase text-[11px]">
                      Operational Context &amp; Requirements
                    </label>
                    <textarea
                      className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Outline user volume, target markets, or technical integration requirements..."
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    className="w-full font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all py-3 rounded font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(14,165,233,0.4)] mt-2"
                    type="submit"
                  >
                    [ Transmit Platform Inquiry ]
                  </button>
                </form>

                {dispatchStatus && (
                  <div
                    className="mt-2 p-3 bg-signal-success/10 border border-signal-success/30 rounded text-center font-label-mono text-label-mono text-signal-success animate-fadeIn"
                    id="dispatch-status"
                  >
                    &check; ENCRYPTED DISPATCH RECEIVED. PARTNER DESK ASSIGNED ROUTE ID: UV-2026-X.
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
