import React from 'react';

interface BusinessSupportPageProps {
  onOpenAudit: () => void;
}

export const BusinessSupportPage: React.FC<BusinessSupportPageProps> = ({ onOpenAudit }) => {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* HERO SECTION: Architectural Framework & Execution Dossier */}
      <section className="relative w-full overflow-hidden bg-surface-dim pt-12 pb-24 md:py-28 px-6 lg:px-12">
        {/* Ambient glow backdrop */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
          {/* Breadcrumb & Classification Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
              <a href="/" className="hover:text-primary transition-colors">HOME</a>
              <span className="text-outline-variant">/</span>
              <span>VENTURE ADVISORY</span>
              <span className="text-primary">//</span>
              <span className="text-primary-fixed">PROSPECT</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1 rounded bg-slate-surface text-secondary border border-border-glass shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
              <span className="font-index-tag text-index-tag tracking-widest uppercase">07 // VENTURE INCUBATION &amp; COMMERCIALIZATION</span>
            </div>
          </div>

          {/* Main Header Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h1 className="font-headline-display text-headline-display text-text-primary tracking-tight max-w-4xl">
                We Build Your Business Idea <span className="text-primary">So It Actually Works.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Most people waste their budget building software that fails. We architect how your business makes money first, and then we engineer the systems to run it. No guesswork.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <a
                  className="px-6 py-3.5 bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono font-semibold tracking-wider uppercase rounded shadow-[0_0_24px_rgba(14,165,233,0.35)] transition-all flex items-center gap-2 group"
                  href="https://calendly.com/inyoweng/new-meeting"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Book a Free 15-Minute Strategy Call</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
                <div className="flex items-center gap-2 text-text-muted font-label-mono text-label-mono">
                  <span className="material-symbols-outlined text-signal-success text-[16px]">verified</span>
                  <span>Takes 30 seconds • No selling • 100% Free</span>
                </div>
              </div>
            </div>

            {/* Metric Command Terminal Widget */}
            <div className="lg:col-span-4 bg-slate-surface/90 backdrop-blur-xl p-6 rounded-xl shadow-xl flex flex-col gap-5 border border-border-glass">
              <div className="w-full h-28 rounded-lg overflow-hidden relative border border-border-glass mb-1 group">
                <img
                  alt="Engineering lab telemetry and algorithmic pipelines"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="/assets/ai-lab.png"
                />
                <div className="absolute inset-0 bg-slate-surface/60 backdrop-blur-[1px]"></div>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-dim/90 font-index-tag text-index-tag text-secondary uppercase tracking-wider border border-border-glass flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[13px]">hub</span>
                  <span>AI ARCHITECTURE LAB</span>
                </div>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-border-glass">
                <span className="font-label-mono text-label-mono text-text-muted">SYSTEM TELEMETRY</span>
                <span className="font-index-tag text-index-tag text-primary uppercase">ACTIVE STATUS</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-3.5 rounded flex flex-col gap-1">
                  <span className="font-label-mono text-label-mono text-text-muted">CAPITAL PRESERVATION</span>
                  <span className="font-headline-md text-headline-md text-text-primary">94.2%</span>
                  <span className="font-index-tag text-index-tag text-signal-success">PRE-DEV SAVED</span>
                </div>
                <div className="bg-surface-container-low p-3.5 rounded flex flex-col gap-1">
                  <span className="font-label-mono text-label-mono text-text-muted">LAUNCH CERTAINTY</span>
                  <span className="font-headline-md text-headline-md text-primary">100%</span>
                  <span className="font-index-tag text-index-tag text-primary-fixed-dim">REVENUE ARCHITECTURED</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-primary text-[20px] flex-shrink-0">terminal</span>
                <span className="line-clamp-2">Direct strategy mapping deployed prior to code commit.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: Core Problem Deconstruction */}
      <section className="w-full py-20 px-6 lg:px-12 bg-background relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-glass">
            <div>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-signal-danger uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                <span>02 // CORE PROBLEM &amp; SYSTEM FAILURE MODES</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">The Expensive Mistake: Building Too Early</h2>
            </div>
            <p className="font-body-md text-body-md text-text-muted max-w-md">
              Most businesses fail long before development fails. They waste thousands rebuilding assumptions that should have been pressure-tested on day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-surface/80 p-6 rounded-lg flex flex-col justify-between gap-6 hover:bg-slate-surface transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-text-muted/40 font-bold">01</span>
                  <span className="material-symbols-outlined text-signal-warning text-[20px]">blur_on</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Fuzzy Idea</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Nobody can articulate what the business actually does in one sentence. Customers cannot comprehend the core value proposition.
                </p>
              </div>
              <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-signal-danger w-3/4"></div>
              </div>
            </div>

            <div className="bg-slate-surface/80 p-6 rounded-lg flex flex-col justify-between gap-6 hover:bg-slate-surface transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-text-muted/40 font-bold">02</span>
                  <span className="material-symbols-outlined text-signal-danger text-[20px]">account_tree</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">No Clear Process</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Workflow is completely unmapped — who does what, when, and how. Operational bottlenecks accumulate silently prior to software launch.
                </p>
              </div>
              <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-signal-warning w-4/5"></div>
              </div>
            </div>

            <div className="bg-slate-surface/80 p-6 rounded-lg flex flex-col justify-between gap-6 hover:bg-slate-surface transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-text-muted/40 font-bold">03</span>
                  <span className="material-symbols-outlined text-signal-danger text-[20px]">call_split</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Disjointed Teams</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Developers, marketers, and designers pulling in completely different directions with zero architectural alignment or unified target metrics.
                </p>
              </div>
              <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-signal-danger w-2/3"></div>
              </div>
            </div>

            <div className="bg-slate-surface/80 p-6 rounded-lg flex flex-col justify-between gap-6 hover:bg-slate-surface transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline-md text-headline-md text-text-muted/40 font-bold">04</span>
                  <span className="material-symbols-outlined text-signal-danger text-[20px]">layers_clear</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Compounding Mess</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Spending months and tens of thousands rebuilding flawed foundational assumptions that should have been locked down on day one.
                </p>
              </div>
              <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-signal-danger w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: 5-Step Venture Maturation Framework */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="font-label-mono text-label-mono text-primary uppercase tracking-wider">04 // ARCHITECTURAL PIPELINE</div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">The 5-Step Venture Maturation Framework</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A verified sequential funnel that takes a raw idea signal and matures it into a hardened, scalable digital business engine.</p>
          </div>

          <div className="w-full h-48 md:h-72 rounded-xl overflow-hidden relative border border-border-glass group">
            <img
              alt="Visionary tech leaders and software architects analyzing holographic data architecture"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/assets/executive-boardroom.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-text-primary pointer-events-none">
              <div className="flex items-center gap-2 font-label-mono text-label-mono bg-slate-surface/80 px-3 py-1 rounded backdrop-blur-md border border-border-glass">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>VENTURE ARCHITECTURE LAB // LIVE TELEMETRY</span>
              </div>
              <span className="hidden sm:inline-block font-index-tag text-index-tag text-primary uppercase tracking-widest">STAGE VERIFICATION ENVIRONMENT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            <div className="bg-surface-dim p-5 rounded-lg flex flex-col justify-between gap-6 relative group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-text-muted">STAGE 01</span>
                  <span className="material-symbols-outlined text-text-muted text-[18px]">lightbulb</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Just an Idea</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">A raw concept in your mind. Unstructured assumptions, potential targets, and unrefined ambition.</p>
              </div>
              <div className="font-index-tag text-index-tag text-text-muted uppercase">INPUT: RAW SIGNAL</div>
            </div>

            <div className="bg-surface-dim p-5 rounded-lg flex flex-col justify-between gap-6 relative group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary">STAGE 02</span>
                  <span className="material-symbols-outlined text-primary text-[18px]">troubleshoot</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Getting Clear</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Engineering unit economics, monetization vectors, customer journey mapping, and competitor deconstruction.</p>
              </div>
              <div className="font-index-tag text-index-tag text-primary uppercase">CLARITY ENGINE</div>
            </div>

            <div className="bg-surface-dim p-5 rounded-lg flex flex-col justify-between gap-6 relative group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-secondary">STAGE 03</span>
                  <span className="material-symbols-outlined text-secondary text-[18px]">touch_app</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Clickable Prototype</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">An interactive preview to test and validate with real users, stakeholders, and prospective buyers before writing code.</p>
              </div>
              <div className="font-index-tag text-index-tag text-secondary uppercase">RAPID VALIDATION</div>
            </div>

            <div className="bg-surface-dim p-5 rounded-lg flex flex-col justify-between gap-6 relative group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary-fixed">STAGE 04</span>
                  <span className="material-symbols-outlined text-primary-fixed text-[18px]">code</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Working Tech</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Writing clean, production-grade software, automating key back-office tasks, and hooking in live transaction channels.</p>
              </div>
              <div className="font-index-tag text-index-tag text-primary-fixed uppercase">SYSTEM BUILD</div>
            </div>

            <div className="bg-surface-dim p-5 rounded-lg flex flex-col justify-between gap-6 relative group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-signal-success">STAGE 05</span>
                  <span className="material-symbols-outlined text-signal-success text-[18px]">rocket_launch</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Scalable Ecosystem</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">A hardened business engine built to handle millions in volume without performance degradation or staff bloat.</p>
              </div>
              <div className="font-index-tag text-index-tag text-signal-success uppercase">COMMERCIAL SCALE</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Four Verified Packages */}
      <section className="w-full py-20 px-6 lg:px-12 bg-background relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="font-label-mono text-label-mono text-primary uppercase tracking-wider">06 // PACKAGES &amp; COMMERCIAL ENGAGEMENT</div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Four packages. Pick where you are.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Whether you just have a rough idea or you are ready to engineer the complete multi-tenant production engine, our pricing is transparent and execution-focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Tier 01: Get Clear */}
            <div className="bg-slate-surface/90 p-6 rounded-xl flex flex-col justify-between gap-8 border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-text-muted">TIER 01 // STARTING POINT</span>
                  <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-text-muted">DISCOVERY</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">Get Clear</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-headline-lg text-headline-lg text-text-primary font-bold">$109</span>
                    <span className="font-label-mono text-label-mono text-text-muted">Package</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                    You have an idea but you're not sure how to turn it into a real, revenue-generating business.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">We dig into your idea</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">We map out where you're headed</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Market fit &amp; competitor positioning</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Architectural blueprint of full system</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Actionable step-by-step next plan</span>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-3 bg-surface-container hover:bg-slate-elevated text-text-primary font-label-mono text-label-mono uppercase tracking-wider text-center rounded transition-colors border border-border-glass cursor-pointer"
                href="https://calendly.com/inyoweng/new-meeting"
                rel="noopener noreferrer"
                target="_blank"
              >
                Select Tier 01
              </a>
            </div>

            {/* Tier 02: See It Working */}
            <div className="bg-slate-elevated p-6 rounded-xl flex flex-col justify-between gap-8 relative shadow-[0_0_24px_rgba(14,165,233,0.25)] border-2 border-primary-container">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary-container text-on-primary font-index-tag text-index-tag rounded uppercase tracking-wider font-semibold">
                MOST POPULAR
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-primary font-semibold">TIER 02 // VALIDATION</span>
                  <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-primary/10 text-primary">RECOMMENDED</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">See It Working</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-headline-lg text-headline-lg text-primary font-bold">$199</span>
                    <span className="font-label-mono text-label-mono text-text-muted">Package</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                    We turn your concept into an interactive asset you can physically click, test, and demonstrate to stakeholders.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary font-medium">Technical feasibility verification</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary font-medium">Interactive clickable prototype</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary font-medium">End-to-end UX/UI architecture</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary font-medium">Visual brand design &amp; ergonomics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary font-medium">Live hosted preview for user feedback</span>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-3 bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono uppercase tracking-wider text-center rounded transition-colors font-semibold shadow-md cursor-pointer"
                href="https://calendly.com/inyoweng/new-meeting"
                rel="noopener noreferrer"
                target="_blank"
              >
                Select Tier 02
              </a>
            </div>

            {/* Tier 03: Test the Business */}
            <div className="bg-slate-surface/90 p-6 rounded-xl flex flex-col justify-between gap-8 border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-text-muted">TIER 03 // PRE-SEED</span>
                  <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-secondary">PREMIUM</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">Test the Business</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-headline-lg text-headline-lg text-text-primary font-bold">$449</span>
                    <span className="font-label-mono text-label-mono text-text-muted">Package</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                    A working version of your business — ready to test, show investors, or prepare for immediate commercial monetization.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Automated AI systems for heavy lifting</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Real-time metrics &amp; telemetry dashboard</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Operational business engine execution</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Payment &amp; monetization integration</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Investor-ready diagnostic deck setup</span>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-3 bg-surface-container hover:bg-slate-elevated text-text-primary font-label-mono text-label-mono uppercase tracking-wider text-center rounded transition-colors border border-border-glass cursor-pointer"
                href="https://calendly.com/inyoweng/new-meeting"
                rel="noopener noreferrer"
                target="_blank"
              >
                Select Tier 03
              </a>
            </div>

            {/* Tier 04: Build It All */}
            <div className="bg-slate-surface/90 p-6 rounded-xl flex flex-col justify-between gap-8 border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-text-muted">TIER 04 // COMMERCIAL</span>
                  <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary-fixed">ENTERPRISE</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">Build It All</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-headline-lg text-headline-lg text-text-primary font-bold">$749</span>
                    <span className="font-label-mono text-label-mono text-text-muted">Package</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                    The full build. Production software. Real automated systems. Ready to service high-volume enterprise customer loads.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Full production software build</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Native AI agents &amp; autonomous workflows</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Enterprise CRM &amp; customer pipeline</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Structured multi-tenant data engine</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] flex-shrink-0">check_circle</span>
                    <span className="font-body-sm text-body-sm text-text-primary">Operational team controls &amp; tooling</span>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-3 bg-surface-container hover:bg-slate-elevated text-text-primary font-label-mono text-label-mono uppercase tracking-wider text-center rounded transition-colors border border-border-glass cursor-pointer"
                href="https://calendly.com/inyoweng/new-meeting"
                rel="noopener noreferrer"
                target="_blank"
              >
                Select Tier 04
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: The Real Difference vs Traditional Agencies & 10x Cost Rule */}
      <section className="w-full py-20 px-6 lg:px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="font-label-mono text-label-mono text-primary uppercase tracking-wider">07 // COMPARATIVE VALUE ENGINE</div>
                <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">The Real Difference</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Agencies just give advice. Coders just write code. We build integrated digital systems that bring you customers and cash.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-lg bg-surface-dim border border-border-glass flex flex-col gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-text-primary">Built Only For Sales</span>
                  <p className="font-body-sm text-body-sm text-text-muted">No useless features or empty pages. If an asset or tool doesn't bring you customers or cash, we do not engineer it.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-dim border border-border-glass flex flex-col gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-text-primary">We Turn Anything Digital</span>
                  <p className="font-body-sm text-body-sm text-text-muted">Manual tasks, paperwork, or raw thoughts. We transform them into high-speed web apps and frictionless workflows.</p>
                </div>
                <div className="p-4 rounded-lg bg-surface-dim border border-border-glass flex flex-col gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-text-primary">Automatic Sales</span>
                  <p className="font-body-sm text-body-sm text-text-muted">Autonomous systems that capture leads, dispatch assets, and collect payments for you 24/7 without manual intervention.</p>
                </div>
              </div>
            </div>

            {/* Comparative Side-by-Side Matrix */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Traditional Agencies */}
              <div className="bg-surface-dim p-6 rounded-xl flex flex-col justify-between gap-6 opacity-70 border border-border-glass">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border-glass">
                    <span className="font-label-mono text-label-mono text-text-muted">TRADITIONAL AGENCIES</span>
                    <span className="material-symbols-outlined text-signal-danger text-[20px]">cancel</span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-signal-danger text-[18px]">close</span>
                      <span className="font-body-sm text-body-sm text-text-muted">They build cosmetic pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-signal-danger text-[18px]">close</span>
                      <span className="font-body-sm text-body-sm text-text-muted">They hand over unintegrated design files</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-signal-danger text-[18px]">close</span>
                      <span className="font-body-sm text-body-sm text-text-muted">Teams operate in isolated silos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-signal-danger text-[18px]">close</span>
                      <span className="font-body-sm text-body-sm text-text-muted">Only scratch the surface of unit economics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-signal-danger text-[18px]">close</span>
                      <span className="font-body-sm text-body-sm text-text-muted">No automation or execution tooling</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-surface-container-low rounded text-text-muted font-label-mono text-label-mono text-center">
                  OUTCOME: REWORK &amp; SUNK CAPITAL
                </div>
              </div>

              {/* UVA VEC */}
              <div className="bg-slate-surface p-6 rounded-xl flex flex-col justify-between gap-6 shadow-xl border border-primary/40 relative">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border-glass">
                    <span className="font-label-mono text-label-mono text-primary font-semibold">UVA VEC ARCHITECTURE</span>
                    <span className="material-symbols-outlined text-signal-success text-[20px]">check_circle</span>
                  </div>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px]">done_all</span>
                      <span className="font-body-sm text-body-sm text-text-primary">We engineer how the business makes money</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px]">done_all</span>
                      <span className="font-body-sm text-body-sm text-text-primary">We connect every system into a single machine</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px]">done_all</span>
                      <span className="font-body-sm text-body-sm text-text-primary">Hardened to scale to millions in throughput</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px]">done_all</span>
                      <span className="font-body-sm text-body-sm text-text-primary">Automate redundant manual workflows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px]">done_all</span>
                      <span className="font-body-sm text-body-sm text-text-primary">Direct telemetry on user acquisition &amp; cash</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-primary-container/20 text-primary-fixed rounded font-label-mono text-label-mono text-center font-semibold">
                  OUTCOME: RESILIENT REVENUE ENGINE
                </div>
              </div>
            </div>
          </div>

          {/* 10x Cost Rule Callout */}
          <div className="bg-slate-elevated p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-border-glass">
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-signal-warning">
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                <span>10 // RISK REDUCTION METRIC</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-text-primary">Fixing architecture later costs 10× more than getting it right now.</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rebuilding from scratch, breaking when volume arrives, and unravelling bad assumptions drains startup runways. UVA VEC ensures clarity before code.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-low px-6 py-4 rounded-lg flex-shrink-0 border border-border-glass">
              <div className="flex flex-col items-center">
                <span className="font-headline-lg text-headline-lg text-primary font-bold">1×</span>
                <span className="font-index-tag text-index-tag text-text-muted uppercase">NOW (PLAN)</span>
              </div>
              <div className="flex items-center text-text-muted font-label-mono text-label-mono px-2">VS</div>
              <div className="flex flex-col items-center">
                <span className="font-headline-lg text-headline-lg text-signal-danger font-bold">10×</span>
                <span className="font-index-tag text-index-tag text-signal-danger uppercase">LATER (REWORK)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Step-by-Step Execution Journey */}
      <section className="w-full py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <div className="font-label-mono text-label-mono text-primary uppercase tracking-wider">08 // SEQUENTIAL WORKFLOW</div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">From first conversation to full launch.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">01 // CONVERSATION</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">First Chat</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Simple questions to figure out exactly what you want to build.</p>
            </div>
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">02 // RESEARCH</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">Check Facts</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Competitor analysis to make sure your model can actually win.</p>
            </div>
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">03 // BLUEPRINT</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">Map the Steps</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Step-by-step maps of operations and unit economics.</p>
            </div>
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">04 // WIREFRAME</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">Make a Draft</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Clickable preview so you touch it before code is written.</p>
            </div>
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">05 // DIAGNOSIS</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">Test it Out</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Feedback from real buyers to patch weaknesses early.</p>
            </div>
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">06 // ENGINE</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">Build it Real</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Clean code, robust databases, automated sales conduits.</p>
            </div>
            <div className="bg-surface-dim p-4 rounded-lg flex flex-col gap-3 border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-bold">07 // HORIZON</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary text-[16px]">Grow it Safe</h4>
              <p className="font-body-sm text-body-sm text-text-muted">Safely scaling client loads without systemic latency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: Fit Qualification Dossier */}
      <section className="w-full py-16 px-6 lg:px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-surface p-8 rounded-xl flex flex-col gap-6 border-l-4 border-signal-success">
            <div>
              <span className="font-index-tag text-index-tag text-signal-success uppercase tracking-wider">09 // QUALIFICATION PROFILE</span>
              <h3 className="font-headline-md text-headline-md text-text-primary mt-1">This is built for:</h3>
            </div>
            <ul className="flex flex-col gap-3 text-on-surface-variant font-body-md text-body-md">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-success text-[20px]">check</span>
                <span>People with big ideas who want to build something real.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-success text-[20px]">check</span>
                <span>Businesses stuck in messy, manual, disjointed processes.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-success text-[20px]">check</span>
                <span>Teams that need resilient technical systems designed to scale.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-success text-[20px]">check</span>
                <span>Products that can be exponentially smarter with AI workflows.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-success text-[20px]">check</span>
                <span>Founders wanting to get unit economics right before going big.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-surface p-8 rounded-xl flex flex-col gap-6 border-l-4 border-signal-danger">
            <div>
              <span className="font-index-tag text-index-tag text-signal-danger uppercase tracking-wider">09 // DISQUALIFICATION PROFILE</span>
              <h3 className="font-headline-md text-headline-md text-text-primary mt-1">This is NOT for:</h3>
            </div>
            <ul className="flex flex-col gap-3 text-on-surface-variant font-body-md text-body-md">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-danger text-[20px]">close</span>
                <span>Cheap website jobs or generic WordPress template tweaks.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-danger text-[20px]">close</span>
                <span>Quick logo designs or isolated aesthetic exercises.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-danger text-[20px]">close</span>
                <span>Businesses not serious about actual customer growth or monetization.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-signal-danger text-[20px]">close</span>
                <span>Founders seeking vanity code without clear return on capital.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 07: Final Conversion Module */}
      <section className="w-full py-20 px-6 lg:px-12 bg-background relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-slate-surface rounded-2xl p-8 md:p-12 border border-border-glass relative z-10 shadow-2xl flex flex-col items-center text-center gap-8">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary font-label-mono text-label-mono uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>NEXT STEP // CALENDLY DISCOVERY PIPELINE</span>
          </div>
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-headline-display text-headline-display text-text-primary tracking-tight">The Best 15 Minutes You'll Spend</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Absolutely free. No sales pitch. Just an eye-opening tactical chat about turning your idea into a real, cash-flowing business.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <a
              className="w-full py-4 bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono font-bold tracking-wider uppercase rounded shadow-[0_0_24px_rgba(14,165,233,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer"
              href="https://calendly.com/inyoweng/new-meeting"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Claim My Free 15 Minutes</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </a>
            <div className="flex items-center justify-center gap-4 text-text-muted font-label-mono text-label-mono">
              <span>Takes 30 seconds to book</span>
              <span>•</span>
              <span>No commitment required</span>
            </div>
          </div>
          <div className="pt-6 border-t border-border-glass w-full flex flex-col sm:flex-row items-center justify-between text-text-muted font-label-mono text-label-mono gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal-success"></span>
              <span>Direct Founder Architecture Access</span>
            </div>
            <div>
              <span>UVA VEC VENTURE ACCELERATOR</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
