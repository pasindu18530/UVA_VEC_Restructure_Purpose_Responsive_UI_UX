import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onRequestAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRequestAudit }) => {
  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* =========================================================================
             HERO: HIGH-ALTITUDE COMMAND DOSSIER
             ========================================================================= */}
      <section className="relative w-full pt-12 pb-24 px-6 lg:px-12 overflow-hidden bg-surface">
        {/* Ambient technical grid overlay & deep radial bloom */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#89ceff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-container/10 blur-[140px] rounded-full pointer-events-none -z-0"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col gap-12 z-10">
          {/* Overline metadata banner */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-surface-container-high/90 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-signal-success animate-pulse"></span>
              <span className="font-index-tag text-index-tag text-primary tracking-widest uppercase">
                SYSTEMS FIRST • RESEARCH FIRST // 2026 INFRASTRUCTURE
              </span>
            </div>
            <div className="font-label-mono text-label-mono text-text-muted flex items-center gap-3">
              <span>LATITUDE: 38.0336° N</span>
              <span className="text-surface-container-highest">/</span>
              <span>PROTOCOL: RUNTIME-V5</span>
              <span className="text-surface-container-highest">/</span>
              <span className="text-primary font-semibold">ALL ENGINES ACTIVE</span>
            </div>
          </div>

          {/* Master Headline & Narrative Thesis */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="font-label-mono text-label-mono text-secondary uppercase tracking-widest flex items-center gap-2">
                <span>INDEX 00 // 11</span>
                <span className="w-8 h-px bg-secondary/40"></span>
                <span>ENTERPRISE VENTURE ARCHITECTURE</span>
              </div>
              <h1 className="font-headline-display text-headline-display tracking-tight text-text-primary uppercase leading-[1.05]">
                AI-Native Venture Infrastructure &amp; Autonomous Business Systems
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-2">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                A multidisciplinary engineering &amp; architecture firm. We decompose operational bottlenecks, deploy proprietary AI workforce infrastructure, and engineer revenue-generating software machines.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={onRequestAudit}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded bg-primary-container text-on-primary font-label-mono text-label-mono tracking-wider uppercase hover:bg-secondary transition-all shadow-[0_0_24px_rgba(14,165,233,0.35)]"
                  data-path="request-growth-audit"
                >
                  <span>Request Growth Audit</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <a
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-surface-container-high/60 hover:bg-surface-container-highest text-text-primary font-label-mono text-label-mono tracking-wider uppercase transition-colors"
                  href="#flagships"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
                  <span>Explore Flagships</span>
                </a>
              </div>
            </div>
          </div>

          {/* Real-Time Visual Tech Metric Grid */}
          <div className="w-full h-56 lg:h-72 rounded-xl overflow-hidden relative border border-border-glass group my-6">
            <img
              src="/assets/cinematic-engineering.png"
              alt="Cinematic dark-mode engineering operations center"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-text-primary pointer-events-none">
              <div className="flex items-center gap-2 font-label-mono text-label-mono bg-slate-surface/80 px-3 py-1 rounded backdrop-blur-md border border-border-glass">
                <span className="w-2 h-2 rounded-full bg-signal-success animate-ping"></span>
                <span>MISSION CONTROL // TELEMETRY PIPELINES</span>
              </div>
              <span className="hidden sm:inline-block font-index-tag text-index-tag text-secondary uppercase tracking-widest">
                REAL-TIME CLUSTER HEALTH
              </span>
            </div>
          </div>

          {/* Telemetry Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            {/* Metric 01 */}
            <div className="p-5 rounded bg-surface-container-low/90 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container transition-all">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-wider">
                  TELEMETRY 01
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
              </div>
              <div>
                <div className="font-headline-display text-[44px] leading-none text-text-primary font-bold tracking-tight">
                  10x
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mt-1">Multiplier</div>
                <p className="font-body-sm text-body-sm text-text-muted mt-2">
                  Pre-code strategic decomposition to eliminate execution drag &amp; architectural drift.
                </p>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[94%] transition-all duration-1000"></div>
              </div>
            </div>

            {/* Metric 02 */}
            <div className="p-5 rounded bg-surface-container-low/90 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container transition-all">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-wider">
                  TELEMETRY 02
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
              </div>
              <div>
                <div className="font-headline-display text-[40px] leading-none text-text-primary font-bold tracking-tight">
                  RLHF &amp; HITL
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mt-1">
                  Workforce Pipelines
                </div>
                <p className="font-body-sm text-body-sm text-text-muted mt-2">
                  Human-in-the-loop validation teams synchronized with algorithmic oversight engines.
                </p>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[82%] transition-all duration-1000"></div>
              </div>
            </div>

            {/* Metric 03 */}
            <div className="p-5 rounded bg-surface-container-low/90 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container transition-all">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-wider">
                  TELEMETRY 03
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">speed</span>
              </div>
              <div>
                <div className="font-headline-display text-[44px] leading-none text-text-primary font-bold tracking-tight">
                  &lt;850ms
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mt-1">
                  AI Lead Velocity
                </div>
                <p className="font-body-sm text-body-sm text-text-muted mt-2">
                  Autonomous decision-maker scraping, data hydration, and dynamic outbound triggering.
                </p>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[99%] transition-all duration-1000"></div>
              </div>
            </div>

            {/* Metric 04 */}
            <div className="p-5 rounded bg-surface-container-low/90 backdrop-blur-md flex flex-col justify-between gap-6 hover:bg-surface-container transition-all">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-wider">
                  TELEMETRY 04
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
              </div>
              <div>
                <div className="font-headline-display text-[44px] leading-none text-text-primary font-bold tracking-tight">
                  4 Core
                </div>
                <div className="font-headline-sm text-headline-sm text-text-primary mt-1">
                  Institutional Pillars
                </div>
                <p className="font-body-sm text-body-sm text-text-muted mt-2">
                  AI Systems, Enterprise SaaS, Ops Architecture &amp; Growth Acceleration Frameworks.
                </p>
              </div>
              <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
                <div className="bg-primary-container h-full w-[100%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 01: BEYOND CONVENTIONAL DEVELOPMENT (ARCHITECTURAL THESIS)
             ========================================================================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-surface-dim">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 bg-gradient-to-r from-surface-container-high/40 to-transparent p-6 rounded">
            <div className="flex flex-col gap-2">
              <div className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                01 // 11 • POSITIONING THESIS
              </div>
              <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
                Beyond Conventional Development.
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              The UVA VEC does not operate as a conventional development agency. We do not write code in a vacuum. We architect comprehensive operational ecosystems driven by behavior, friction analysis, and strategic leverage.
            </p>
          </div>

          {/* Mosaic Grid: 4 Core Distinctions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">account_tree</span>
                </div>
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
                  PHASE 01 // DECOMPOSITION
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Strategy Decomposition</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  We deconstruct business models into atomic operational nodes before writing a single line of application code, revealing critical unseen failure vectors.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-text-muted font-label-mono text-label-mono">
                <span>AUDIT SCORE: 99.4%</span>
                <span className="material-symbols-outlined text-[16px] text-primary">analytics</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[26px]">troubleshoot</span>
                </div>
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
                  PHASE 02 // DIAGNOSTICS
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Operational Bottlenecks</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pinpointing cognitive latency, manual handoff frictions, and execution drag across distributed team workflows to unlock non-linear capacity.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-text-muted font-label-mono text-label-mono">
                <span>FRICTION REDUCTION: 72%</span>
                <span className="material-symbols-outlined text-[16px] text-primary">speed</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">smart_toy</span>
                </div>
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
                  PHASE 03 // INTELLIGENCE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">AI-Enhanced Workflows</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Deploying autonomous agents directly into production workflows with deterministic guardrails, structured evaluation layers, and self-correcting logic.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-text-muted font-label-mono text-label-mono">
                <span>AUTOMATION INDEX: 8.4x</span>
                <span className="material-symbols-outlined text-[16px] text-primary">memory</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[26px]">balance</span>
                </div>
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
                  PHASE 04 // ASYMMETRY
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">Founder Leverage</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Eliminating operational busywork so leadership operates strictly at strategic scale, turning internal competencies into proprietary software monopolies.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between text-text-muted font-label-mono text-label-mono">
                <span>SCALE CAPACITY: EXPONENTIAL</span>
                <span className="material-symbols-outlined text-[16px] text-primary">rocket_launch</span>
              </div>
            </div>
          </div>

          {/* Architectural Schematic Callout */}
          <div className="rounded-xl p-8 bg-surface-container-lowest grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-border-glass">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="font-label-mono text-label-mono text-primary uppercase">
                  FOUNDATIONAL AXIOM
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-text-primary">
                &ldquo;Research First. Systems First. Implementation Last.&rdquo;
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Traditional engineering teams jump directly to UI mockups and boilerplate databases. UVA VEC establishes operational mathematical certainty before writing code. This protects capital, accelerates product-market capture, and guarantees platform longevity into 2026.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded bg-surface-container-high/60 border border-border-glass">
              <span className="font-index-tag text-index-tag text-text-muted uppercase">
                SYSTEM PROTOCOL SPECIFICATION
              </span>
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-on-surface-variant">Architecture Readiness</span>
                <span className="font-label-mono text-primary font-bold">100% SPEC</span>
              </div>
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-on-surface-variant">Code Waste Reduction</span>
                <span className="font-label-mono text-signal-success font-bold">-84.2%</span>
              </div>
              <div className="flex justify-between items-center text-body-sm">
                <span className="text-on-surface-variant">Execution Coherence</span>
                <span className="font-label-mono text-secondary font-bold">ENTERPRISE TIER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 02: PRIMARY OPERATIONAL PILLARS
             ========================================================================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
                02 // 11 • CORE CAPABILITIES
              </div>
              <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight mt-2">
                Primary Operational Pillars
              </h2>
            </div>
            <div className="font-label-mono text-label-mono text-text-muted flex items-center gap-2">
              <span>FOUR-PILLAR EXECUTION MATRIX</span>
              <span className="material-symbols-outlined text-[16px] text-primary">tune</span>
            </div>
          </div>

          {/* 4 High-Density Pillar Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 01: AI Workforce Ecosystems */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 relative overflow-hidden group border border-border-glass hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-primary tracking-wider uppercase">
                    PILLAR 01 // HUMAN-AI HYBRID
                  </span>
                  <span className="font-label-mono text-label-mono text-text-muted">RLHF • HITL • QA</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">
                    AI Workforce Ecosystems
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Distributed operational pipelines bridging human cognitive validation with frontier machine learning. We engineer RLHF environments, specialized prompt evaluation matrices, and human-in-the-loop workflows capable of training production models at enterprise grade.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Distributed Pipelines
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Global 24/7 annotator &amp; evaluator network
                    </span>
                  </div>
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      RLHF Orchestration
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Custom reward modeling &amp; fine-tuning loops
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded bg-surface-container-lowest flex items-center justify-between border border-border-glass">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-signal-success text-[20px]">verified</span>
                  <span className="font-label-mono text-label-mono text-text-primary">MODEL ACCURACY RATE</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-24 h-6 text-primary" fill="none" viewBox="0 0 100 24">
                    <path d="M0 20 L25 15 L45 18 L70 6 L100 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                  </svg>
                  <span className="font-label-mono text-label-mono text-primary font-bold">99.82%</span>
                </div>
              </div>
            </div>

            {/* Pillar 02: Growth & Automation */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 relative overflow-hidden group border border-border-glass hover:border-secondary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-secondary tracking-wider uppercase">
                    PILLAR 02 // REVENUE SYSTEMS
                  </span>
                  <span className="font-label-mono text-label-mono text-text-muted">SCRAPING • CRM • OUTBOUND</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">
                    Growth &amp; Automation
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Autonomous pipeline infrastructure transforming cold prospects into structured pipeline equity. Advanced lead scraping engines, intelligent multi-touch qualification loops, and custom CRM sync architectures that remove sales rep dependency.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Lead Intelligence
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Decision-maker detection &amp; deep enrichment
                    </span>
                  </div>
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Automated Funnels
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Multi-channel behavioral conversion sequences
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded bg-surface-container-lowest flex items-center justify-between border border-border-glass">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
                  <span className="font-label-mono text-label-mono text-text-primary">PIPELINE CONVERSION LIFT</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-24 h-6 text-secondary" fill="none" viewBox="0 0 100 24">
                    <path d="M0 22 L20 18 L50 14 L75 8 L100 3" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                  </svg>
                  <span className="font-label-mono text-label-mono text-secondary font-bold">+340%</span>
                </div>
              </div>
            </div>

            {/* Pillar 03: Knowledge Systems */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 relative overflow-hidden group border border-border-glass hover:border-primary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-primary tracking-wider uppercase">
                    PILLAR 03 // DATA ARCHITECTURE
                  </span>
                  <span className="font-label-mono text-label-mono text-text-muted">ONTOLOGY • GRAPH • SYNAPSE</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">
                    Knowledge Systems
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Transforming disconnected operational data silos into queryable entity graphs. Multilingual schema adaptation, deterministic RAG pipelines, and entity relationship mapping that empowers executive leadership with instant, verified clarity.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Entity Graphs
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Cross-relational taxonomy &amp; validation
                    </span>
                  </div>
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Multilingual Adaptation
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Global localized linguistic fidelity
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded bg-surface-container-lowest flex items-center justify-between border border-border-glass">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">dataset</span>
                  <span className="font-label-mono text-label-mono text-text-primary">ENTITY RETRIEVAL LATENCY</span>
                </div>
                <span className="font-label-mono text-label-mono text-primary font-bold">18ms AVG</span>
              </div>
            </div>

            {/* Pillar 04: Enterprise & Micro-SaaS Platforms */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 relative overflow-hidden group border border-border-glass hover:border-secondary/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-secondary tracking-wider uppercase">
                    PILLAR 04 // VENTURE ENGINES
                  </span>
                  <span className="font-label-mono text-label-mono text-text-muted">MULTI-TENANT • EDGE • SAAS</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">
                    Enterprise &amp; Micro-SaaS Platforms
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                    Hardened, production-ready software ventures designed for extreme modularity. Built with cutting-edge micro-service architecture, high-frequency edge execution, and frictionless billing logic engineered to compound venture valuation.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Edge Architecture
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Globally replicated sub-50ms endpoints
                    </span>
                  </div>
                  <div className="p-4 rounded bg-surface-container">
                    <span className="font-label-mono text-[11px] text-secondary block uppercase">
                      Monetization Stacks
                    </span>
                    <span className="font-body-sm text-body-sm text-text-primary mt-1 block">
                      Usage-based micro-billing engines
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded bg-surface-container-lowest flex items-center justify-between border border-border-glass">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-signal-success text-[20px]">layers</span>
                  <span className="font-label-mono text-label-mono text-text-primary">ACTIVE VENTURE PORTFOLIO</span>
                </div>
                <span className="font-label-mono text-label-mono text-signal-success font-bold">14+ PLATFORMS LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 03: FLAGSHIP PROPRIETARY PLATFORMS SPOTLIGHT
             ========================================================================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-surface-dim" id="flagships">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Section Title & Meta */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-container-high/60">
            <div>
              <div className="font-label-mono text-label-mono text-primary tracking-widest uppercase">
                04 // 11 • PROPRIETARY ASSETS
              </div>
              <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight mt-1">
                Flagship Systems Spotlight
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Industrial-grade software applications built in-house, tested under real-world economic stress, and generating autonomous yield across modern digital markets.
            </p>
          </div>

          {/* Spotlight Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Platform 01: Anchor Room */}
            <div className="p-8 rounded-lg bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-primary tracking-wider uppercase">
                    FINTECH PROTOCOL // 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-signal-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span> LIVE PROTOCOL
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md text-text-primary flex items-center justify-between">
                    <span>Anchor Room</span>
                    <span className="font-label-mono text-body-sm text-text-muted">anchorroom.xyz</span>
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    A Cognitive Trading Protocol designed around real-time market truths. Built to eliminate behavioral gambling and strictly prioritize systematic execution. It actively maps and restricts cognitive biases in live market conditions—enforcing algorithmically-backed trading discipline that retail platforms intentionally ignore.
                  </p>
                </div>
                {/* Visual Feature Matrix */}
                <div className="p-4 rounded bg-surface-container-lowest grid grid-cols-2 gap-4 text-body-sm border border-border-glass">
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Core Logic</span>
                    <span className="text-text-primary font-medium">Cognitive Bias Mapping</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Execution Mode</span>
                    <span className="text-primary font-medium">Zero-Gambling Engine</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Behavioral Guardrail</span>
                    <span className="text-text-primary font-medium">Algorithmic Stop-Enforce</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Latency</span>
                    <span className="text-secondary font-medium">&lt;12ms High-Frequency</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-border-glass">
                <a
                  className="group/btn inline-flex items-center gap-2 font-label-mono text-label-mono text-primary hover:text-text-primary uppercase tracking-wider transition-colors"
                  href="https://anchorroom.xyz/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Access Terminal</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <span className="font-label-mono text-[11px] text-text-muted">VERIFIED PROPRIETARY</span>
              </div>
            </div>

            {/* Platform 02: Growth Engine */}
            <div className="p-8 rounded-lg bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-secondary tracking-wider uppercase">
                    OUTBOUND PIPELINE // 02
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-signal-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span> DEPLOYED SYSTEM
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md text-text-primary flex items-center justify-between">
                    <span>Growth Engine</span>
                    <span className="font-label-mono text-body-sm text-text-muted">engine.uvavec.com</span>
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Stop hunting. Start closing. A fully integrated Lead Velocity Ecosystem designed to turn cold prospects into warm relationships with zero friction. It bypasses standard CRM clutter by directly merging high-fidelity intelligence enrichment, automated scraping vectors, and outbound AI workflows into a single execution layer.
                  </p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest grid grid-cols-2 gap-4 text-body-sm border border-border-glass">
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Architecture</span>
                    <span className="text-text-primary font-medium">Lead Velocity Engine</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Qualification</span>
                    <span className="text-secondary font-medium">Autonomous Enrichment</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Outbound Layer</span>
                    <span className="text-text-primary font-medium">Zero-Friction Cadence</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Throughput</span>
                    <span className="text-primary font-medium">10k+ Decision Makers/Wk</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-border-glass">
                <a
                  className="group/btn inline-flex items-center gap-2 font-label-mono text-label-mono text-secondary hover:text-text-primary uppercase tracking-wider transition-colors"
                  href="https://engine.uvavec.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Deploy Engine</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <span className="font-label-mono text-[11px] text-text-muted">ENTERPRISE SCALE</span>
              </div>
            </div>

            {/* Platform 03: Leadscraper AI */}
            <div className="p-8 rounded-lg bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-primary tracking-wider uppercase">
                    INTELLIGENCE SCRAPER // 03
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> CONTINUOUS CRAWLER
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md text-text-primary">Leadscraper AI</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    All-in-one assistant utilizing advanced neural parsers to hunt for decision-makers across fragmented digital registries. Bypasses gatekeeper walls and delivers active, verified direct contact profiles straight into enterprise CRMs with automated intent scoring.
                  </p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest grid grid-cols-2 gap-4 text-body-sm border border-border-glass">
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Targeting</span>
                    <span className="text-text-primary font-medium">B2B C-Suite &amp; Founders</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Verification</span>
                    <span className="text-primary font-medium">SMTP &amp; MX Handshake</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-border-glass">
                <Link
                  className="group/btn inline-flex items-center gap-2 font-label-mono text-label-mono text-primary hover:text-text-primary uppercase tracking-wider transition-colors"
                  to="/products-and-platforms"
                >
                  <span>Platform Specs</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-label-mono text-[11px] text-text-muted">GATEKEEPER BYPASS</span>
              </div>
            </div>

            {/* Platform 04: Pinnacle CMS */}
            <div className="p-8 rounded-lg bg-surface-container-low flex flex-col justify-between gap-8 group hover:bg-surface-container transition-all border border-border-glass">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-secondary tracking-wider uppercase">
                    ORGANIC GROWTH // 04
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> GEO/AEO COMPLIANT
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-headline-md text-headline-md text-text-primary">Pinnacle CMS</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    The next-generation organic distribution engine. An AI-powered headless CMS scoring published content in real-time across SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) to dominate synthesized search results in 2026.
                  </p>
                </div>
                <div className="p-4 rounded bg-surface-container-lowest grid grid-cols-2 gap-4 text-body-sm border border-border-glass">
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Search Paradigm</span>
                    <span className="text-text-primary font-medium">AEO &amp; GEO Evaluation</span>
                  </div>
                  <div>
                    <span className="font-label-mono text-[11px] text-text-muted uppercase block">Architecture</span>
                    <span className="text-secondary font-medium">Headless Edge Delivery</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-border-glass">
                <Link
                  className="group/btn inline-flex items-center gap-2 font-label-mono text-label-mono text-secondary hover:text-text-primary uppercase tracking-wider transition-colors"
                  to="/products-and-platforms"
                >
                  <span>Platform Specs</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1.5 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <span className="font-label-mono text-[11px] text-text-muted">REAL-TIME SCORING</span>
              </div>
            </div>
          </div>

          {/* Extended SaaS & Micro-SaaS Carousel Banner */}
          <div className="p-6 rounded-lg bg-surface-container-lowest flex flex-col md:flex-row items-center justify-between gap-6 border border-border-glass">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-text-primary">
                  10+ Extended Venture Systems in Production
                </div>
                <p className="font-body-sm text-body-sm text-text-muted">
                  Including AgriOMS, Aswenna, Lead Conversion AI, Storyboard AI, Remotion AI, and Stoic Finance.
                </p>
              </div>
            </div>
            <Link
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-surface-container-high hover:bg-surface-container text-primary font-label-mono text-label-mono uppercase tracking-wider transition-colors flex-shrink-0"
              to="/products-and-platforms"
            >
              <span>View Extended Portfolio</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 04: THE REAL DIFFERENCE: DIGITAL SYSTEMS THAT DRIVE SALES
             ========================================================================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-surface" id="insights">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <div className="font-label-mono text-label-mono text-secondary tracking-widest uppercase">
              05 // 11 • MARKET COMPARATIVE ANALYSIS
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">
              The Real Difference: Digital Systems That Drive Sales
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Most web development and creative firms deliver vanity brochures. UVA VEC engineers automated digital capital engines calibrated for sustainable customer acquisition.
            </p>
          </div>

          {/* Comparison Matrix Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Negative Matrix: Traditional Agencies */}
            <div className="p-8 rounded-lg bg-surface-container-lowest flex flex-col gap-6 opacity-85 border border-border-glass">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high/40">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-signal-danger text-[22px]">cancel</span>
                  <span className="font-headline-sm text-headline-sm text-text-muted">
                    Conventional Development Agencies
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-signal-danger font-semibold">
                  COSMETIC FOCUS
                </span>
              </div>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal-danger text-[18px] mt-0.5">close</span>
                  <div>
                    <span className="font-body-md font-medium text-text-muted block">Superficial Page Decor</span>
                    <span className="font-body-sm text-body-sm text-text-muted/80">
                      Treats websites as static brochures without underlying conversion infrastructure or behavioral tracking loops.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal-danger text-[18px] mt-0.5">close</span>
                  <div>
                    <span className="font-body-md font-medium text-text-muted block">Generic Off-the-Shelf Templates</span>
                    <span className="font-body-sm text-body-sm text-text-muted/80">
                      Bloated WordPress or Webflow setups loaded with unmaintainable plugins, slow response times, and zero API leverage.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal-danger text-[18px] mt-0.5">close</span>
                  <div>
                    <span className="font-body-md font-medium text-text-muted block">Disconnected From Revenue Operations</span>
                    <span className="font-body-sm text-body-sm text-text-muted/80">
                      Delivers client code and departs. No pipeline automation, zero lead enrichment, and detached from CRM execution.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-signal-danger text-[18px] mt-0.5">close</span>
                  <div>
                    <span className="font-body-md font-medium text-text-muted block">No AI Infrastructure Fluency</span>
                    <span className="font-body-sm text-body-sm text-text-muted/80">
                      Slaps generic third-party chatbot widgets on screens instead of architecting proprietary neural pipelines and RLHF evaluations.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Positive Matrix: The UVA VEC Standard */}
            <div className="p-8 rounded-lg bg-surface-container-low flex flex-col gap-6 shadow-[0_0_32px_-8px_rgba(14,165,233,0.18)] border border-primary/30">
              <div className="flex items-center justify-between pb-4 border-b border-primary/20">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                  <span className="font-headline-sm text-headline-sm text-text-primary">
                    THE UVA VEC Standard
                  </span>
                </div>
                <span className="font-label-mono text-label-mono text-primary font-semibold">
                  REVENUE ENGINE
                </span>
              </div>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                  <div>
                    <span className="font-body-md font-medium text-text-primary block">
                      Engineered Operational Ecosystems
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Every touchpoint is designed around founder psychology, behavioral bottlenecks, and algorithmic lead conversion.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                  <div>
                    <span className="font-body-md font-medium text-text-primary block">
                      Proprietary AI &amp; Sub-Second Edge Stacks
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Bespoke headless software engineered to run natively at edge nodes with 99.9% uptime and zero bloated third-party dependencies.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                  <div>
                    <span className="font-body-md font-medium text-text-primary block">
                      Native Lead Velocity &amp; CRM Synchronization
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Automated enrichment scripts hunt decision-makers and synchronize enriched data into high-velocity sales pipelines 24/7.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                  <div>
                    <span className="font-body-md font-medium text-text-primary block">
                      Human-in-the-Loop &amp; RLHF Excellence
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Dedicated workforce architecture with continuous fine-tuning pipelines to scale operational intelligence safely and reliably.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 05: EXECUTIVE PEDIGREE & LEADERSHIP PROVENANCE
             ========================================================================= */}
      <section className="w-full py-24 px-6 lg:px-12 bg-surface-dim" id="about">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-label-mono text-label-mono text-primary tracking-widest uppercase">
                06 // 11 • HISTORICAL TRACK RECORD
              </div>
              <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight mt-1">
                Executive Pedigree &amp; Leadership Provenance
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              The UVA VEC&apos;s operational thesis is deeply rooted in our leadership&apos;s historical engagements navigating complex workflows within tier-one AI ecosystems and global enterprises.
            </p>
          </div>

          {/* Provenance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Track Record 01 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 border border-border-glass">
              <div className="flex flex-col gap-4">
                <span className="font-index-tag text-index-tag text-secondary uppercase">
                  ENGAGEMENT DOSSIER 01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">
                  Tier-One AI Ecosystems
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Extensive hands-on execution inside cutting-edge model training environments, multi-tier data pipeline architectures, and large-scale reinforcement learning feedback mechanisms.
                </p>
              </div>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-primary">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>RLHF • MODEL EVALUATION</span>
              </div>
            </div>

            {/* Track Record 02 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 border border-border-glass">
              <div className="flex flex-col gap-4">
                <span className="font-index-tag text-index-tag text-secondary uppercase">
                  ENGAGEMENT DOSSIER 02
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">
                  Enterprise Systems Engineering
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Architecting mission-critical supply chain solutions, multi-tenant SaaS backends, and low-latency cloud infrastructure serving millions of transactions across distributed geographic regions.
                </p>
              </div>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-secondary">
                <span className="material-symbols-outlined text-[16px]">dns</span>
                <span>HIGH-THROUGHPUT OPS</span>
              </div>
            </div>

            {/* Track Record 03 */}
            <div className="p-8 rounded bg-surface-container-low flex flex-col justify-between gap-8 border border-border-glass">
              <div className="flex flex-col gap-4">
                <span className="font-index-tag text-index-tag text-secondary uppercase">
                  ENGAGEMENT DOSSIER 03
                </span>
                <h3 className="font-headline-sm text-headline-sm text-text-primary">
                  Venture Acceleration Mechanics
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Transforming early-stage business ideas into structured, automated software companies capable of rapid deployment, systematic unit economics, and asymmetric market positioning.
                </p>
              </div>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-primary">
                <span className="material-symbols-outlined text-[16px]">rocket</span>
                <span>INCUBATION • SCALE</span>
              </div>
            </div>
          </div>

          {/* Human Workforce Callout: Careers Portal */}
          <div className="p-8 rounded-xl bg-surface-container-high/40 flex flex-col lg:flex-row items-center justify-between gap-8 border border-border-glass">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-index-tag text-index-tag text-secondary uppercase">
                  TALENT INFRASTRUCTURE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-signal-success"></span>
                <span className="font-label-mono text-[11px] text-text-muted">CAREERS.UVAVEC.COM</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-text-primary">
                We Architect the Specialized Workforce Behind Production AI
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Scaling AI ecosystems requires technically fluent operators. Through the UVA VEC Careers portal, we identify, evaluate, and deploy high-tier annotators, domain specialists, and prompt engineers trained specifically for mission-critical client workflows.
              </p>
            </div>
            <Link
              className="flex-shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded bg-surface-container-highest hover:bg-surface-container text-text-primary font-label-mono text-label-mono uppercase tracking-wider transition-colors border border-border-glass"
              to="/careers"
            >
              <span>Access Talent Portal</span>
              <span className="material-symbols-outlined text-[18px] text-primary">open_in_new</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
             SECTION 06: STRATEGIC NEXT STEP (PRIMARY CONVERSION BANNER)
             ========================================================================= */}
      <section className="relative w-full py-28 px-6 lg:px-12 overflow-hidden bg-surface-container-lowest">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#0ea5e9_0%,transparent_60%)] opacity-20 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col gap-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-2.5">
                <span className="font-index-tag text-index-tag px-3 py-1 rounded bg-surface-container-high text-primary tracking-wider uppercase">
                  NO. 11 // INITIATE SYSTEM ENGAGEMENT
                </span>
              </div>
              <h2 className="font-headline-display text-headline-display text-text-primary uppercase tracking-tight leading-[1.08]">
                Build The Future.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                You have a massive vision. We have the engineering infrastructure to make it real. Stop wrestling with fragile off-the-shelf software and start scaling your venture with automated systems designed exclusively for how you operate.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-lg bg-surface-container-low flex flex-col gap-5 border border-border-glass">
                <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
                  <span className="font-label-mono text-label-mono text-text-muted">SESSION PROTOCOL</span>
                  <span className="font-label-mono text-label-mono text-signal-success font-semibold">
                    ZERO OBLIGATION
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={onRequestAudit}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono tracking-wider uppercase transition-all shadow-[0_0_24px_rgba(14,165,233,0.4)]"
                    data-path="request-growth-audit"
                  >
                    <span>Request Growth Audit</span>
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                  </button>
                  <Link
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-text-primary font-label-mono text-label-mono tracking-wider uppercase transition-colors"
                    to="/business-idea-support"
                    data-path="business-idea-support"
                  >
                    <span>Free 15-Min Strategy Session</span>
                    <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                  </Link>
                </div>
                <div className="pt-2 flex items-center justify-between text-body-sm text-text-muted">
                  <span>Avg Audit Response:</span>
                  <span className="font-label-mono text-primary font-semibold">&lt; 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
