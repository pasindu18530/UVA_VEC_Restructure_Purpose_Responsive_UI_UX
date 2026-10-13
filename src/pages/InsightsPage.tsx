import React from 'react';

interface InsightsPageProps {
  onOpenAudit: () => void;
  onOpenTerminal: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onOpenAudit, onOpenTerminal }) => {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* DOSSIER HEADER TICKER */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-3 border-b border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-signal-success animate-ping"></span>
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
              SYSTEM RESEARCH DOSSIER // 2026 ARCHITECTURE
            </span>
            <span className="text-text-muted text-xs hidden sm:inline">•</span>
            <span className="font-label-mono text-label-mono text-text-muted uppercase">STATUS: PEER-REVIEWED SPECIFICATIONS</span>
          </div>
          <div className="flex items-center gap-6 font-label-mono text-label-mono text-text-muted">
            <span>RESEARCH FIRST. SYSTEMS FIRST.</span>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-surface-dim pt-12 pb-20 px-6 lg:px-12">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
              <a href="/" className="hover:text-primary transition-colors">HOME</a>
              <span>/</span>
              <span className="text-text-primary">RESEARCH &amp; INSIGHTS</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1 rounded bg-surface-container-high border border-border-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-index-tag text-index-tag text-primary tracking-widest uppercase">
                RESEARCH THESIS 02 // 11
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <span className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                STRATEGIC DECOMPOSITION &amp; VENTURE METHODOLOGY
              </span>
              <h1 className="font-headline-display text-headline-display text-text-primary tracking-tight uppercase">
                Research First. <span className="text-primary">Systems First.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                We approach products through deep strategic decomposition before implementation begins. We analyze bottlenecks, behaviors, friction, constraints, and AI integration opportunities to build scalable systems.
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
                  <span>Inspect System Terminal</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-border-glass relative aspect-[16/10] bg-surface-container-low">
              <img
                src="/assets/cinematic-engineering.png"
                alt="Cinematic dark-mode engineering operations center"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80 pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-surface-dim/90 backdrop-blur-md border border-border-glass flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-text-primary">OPERATIONAL THESIS</span>
                <span className="font-index-tag text-index-tag text-secondary uppercase">ACTIVE DISPATCH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INSIGHTS GRID */}
      <section className="w-full py-20 px-6 lg:px-12 bg-background border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
              01 // THEORETICAL FOUNDATIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">
              Six Structural Axioms of Venture Architecture
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Principles guiding the engineering of modern AI-native venture platforms, high-throughput SaaS, and algorithmic execution layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">AXIOM 01</span>
                  <span className="material-symbols-outlined text-secondary">architecture</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">
                  Beyond Development
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The UVA VEC does not operate as a conventional development agency. We architect operational ecosystems designed around execution behavior, operational bottlenecks, AI-enhanced workflows, and scalability vectors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                FOCUS // EXECUTION BEHAVIOR
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">AXIOM 02</span>
                  <span className="material-symbols-outlined text-secondary">psychology</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">
                  Cognitive Discipline in Live Markets
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  As proven by Anchor Room, retail platforms intentionally gamify gambling psychology. Sustainable algorithmic trading requires active mapping and algorithmic restriction of cognitive biases in real time.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                PROTOCOL // ANCHOR ROOM
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">AXIOM 03</span>
                  <span className="material-symbols-outlined text-secondary">flash_on</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">
                  Zero-Friction Lead Velocity
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Hunting for decision-makers with standard CRM clutter drains sales pipelines. Leadscraper AI directly merges high-fidelity intelligence enrichment, multi-threaded crawlers, and outbound AI workflows into sub-second execution layers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                PIPELINE // LEAD VELOCITY
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">AXIOM 04</span>
                  <span className="material-symbols-outlined text-secondary">hub</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">
                  Human-in-the-Loop Orchestration
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Frontier LLMs require continuous verification matrices. We architect distributed annotator pods synchronized with automated RLHF evaluators to ensure consistent zero-drift production alignment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                FRAMEWORK // RLHF PIPELINES
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">AXIOM 05</span>
                  <span className="material-symbols-outlined text-secondary">trending_up</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">
                  The 10× Cost of Late Architecture
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Building software before clarifying unit economics and customer acquisition is the single most expensive error. Fixing architecture later costs 10× more than pressure-testing on day one.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                METRIC // 10× RULE
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">AXIOM 06</span>
                  <span className="material-symbols-outlined text-secondary">neurology</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">
                  Autonomous Multi-Agent Systems
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Enterprises in 2026 operate through integrated agent swarms. From algorithmic crop yield prediction (Aswenna) to satellite mining analytics (GeoGem Scout), automation operates as a first-class business asset.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                HORIZON // 2026 DEPLOYMENTS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-16 border-t border-border-glass text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
            ENGAGE ARCHITECTURAL CONSULTATION
          </span>
          <h2 className="font-headline-display text-headline-display text-text-primary tracking-tight">
            Deploy Scalable Systems Today.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Schedule a diagnostic session to decompose your bottlenecks and evaluate custom venture architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
