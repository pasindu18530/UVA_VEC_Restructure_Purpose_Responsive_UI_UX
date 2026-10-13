import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServicesPageProps {
  onRequestAudit: () => void;
  onOpenTerminal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onRequestAudit,
  onOpenTerminal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-systems' | 'enterprise-saas' | 'ops-growth'>('all');

  const matrixCards = [
    {
      id: 1,
      category: 'ai-systems',
      tag: 'AI RUNTIME // 01',
      icon: 'psychology',
      title: 'Proprietary RLHF & Evaluation Pipelines',
      desc: 'Bespoke human-in-the-loop workflows designed for foundational model fine-tuning, complex red-teaming, and benchmark verification.',
      stack: 'PyTorch / Distributed HITL',
      talent: 'VEC Talent Portal',
    },
    {
      id: 2,
      category: 'ops-growth',
      tag: 'GROWTH // 02',
      icon: 'hub',
      title: 'Lead Velocity & Scraping Engines',
      desc: 'Automated high-fidelity prospecting pipelines merging autonomous multi-source scraping vectors directly into CRM workflows.',
      stack: 'Leadscraper AI Core',
      talent: 'HubSpot, Salesforce, Custom',
    },
    {
      id: 3,
      category: 'enterprise-saas',
      tag: 'ENTERPRISE // 03',
      icon: 'layers',
      title: 'Custom Enterprise SaaS Platforms',
      desc: 'Complete multi-tenant platforms built with extreme security, modular microservices, multi-region database sync, and audit tracking.',
      stack: 'AgriOMS & SignPal Class',
      talent: '100k+ Active Tenancies',
    },
    {
      id: 4,
      category: 'ai-systems',
      tag: 'AI RUNTIME // 04',
      icon: 'candlestick_chart',
      title: 'Cognitive Decision Terminals',
      desc: "Real-time trading protocols and algorithmic bias-restriction systems. Inspired by Anchor Room's behavioral discipline engines.",
      stack: 'Cognitive Trading Engine',
      talent: 'Strict Behavioral Gate',
    },
    {
      id: 5,
      category: 'enterprise-saas',
      tag: 'UTILITIES // 05',
      icon: 'view_quilt',
      title: 'Micro-SaaS & High-Impact Utilities',
      desc: 'Hyper-focused, single-purpose software engines engineered for instant distribution, rapid revenue validation, and viral retention loops.',
      stack: 'Storyboard AI / X-Master',
      talent: 'Rapid Velocity Sprint',
    },
    {
      id: 6,
      category: 'ops-growth',
      tag: 'OPERATIONS // 06',
      icon: 'troubleshoot',
      title: 'Operational Decomposition & Audits',
      desc: 'Surgical diagnostics of founder workflows, code repositories, team bottlenecks, and unit economics before undertaking venture scaling.',
      stack: 'Tier 01 Opportunity Audit',
      talent: 'Comprehensive Architecture Map',
    },
  ];

  const filteredCards = matrixCards.filter((card) => {
    if (activeFilter === 'all') return true;
    return card.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full text-on-surface">
      {/* HERO / PAGE HEADER SECTION */}
      <section className="relative w-full pt-8 pb-16 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Tactical Grid Backdrop Glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col gap-6 max-w-5xl">
          {/* Top Meta Track */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-label-mono text-label-mono text-primary tracking-widest uppercase">
              HOME / SERVICES &amp; CAPABILITIES
            </span>
            <span className="text-text-muted font-label-mono text-label-mono">::</span>
            <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-secondary uppercase tracking-widest">
              02 // ARCHITECTURAL OFFERINGS
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container text-signal-success font-index-tag text-index-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
              ACTIVE CAPABILITY REGISTER 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline-display text-headline-display text-text-primary tracking-tight max-w-4xl">
            Full-Spectrum Venture Engineering &amp; Operational Ecosystems.
          </h1>

          {/* Intro Abstract */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Structured into 6 specialized practices designed around execution behavior, operational bottlenecks, AI-enhanced workflows, and scalable enterprise leverage.
          </p>

          {/* Tactical Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted uppercase block">Practices</span>
              <span className="font-headline-md text-headline-md text-text-primary">06 Modules</span>
            </div>
            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted uppercase block">Engineering Standard</span>
              <span className="font-headline-md text-headline-md text-secondary">AI-Native</span>
            </div>
            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted uppercase block">Operational Latency</span>
              <span className="font-headline-md text-headline-md text-signal-success">&lt; 14ms Engine</span>
            </div>
            <div className="p-4 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted uppercase block">Delivery Framework</span>
              <span className="font-headline-md text-headline-md text-text-primary">Decomposition</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL VISUAL DIVIDER / TELEMETRY */}
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto py-4">
        <div className="w-full bg-surface-container-low rounded-xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-border-glass">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">terminal</span>
              </div>
              <div>
                <span className="font-label-mono text-label-mono text-primary uppercase block">Operating Doctrine</span>
                <span className="font-headline-sm text-headline-sm text-text-primary">Research First. Systems First.</span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              We bypass traditional agency assembly lines. We engineer bespoke infrastructure, unblock operational friction, and anchor scalable ventures directly into living data pipelines.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
                <span className="w-2 h-2 rounded-full bg-signal-success"></span>
                <span>Distributed Engineering Pod</span>
              </div>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span>Algorithmic Model Telemetry</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-56 lg:h-64 rounded-xl overflow-hidden relative border border-border-glass-bright flex-shrink-0 group">
            <img
              src="/assets/ai-lab.png"
              alt="Modern high-tech AI research laboratory and distributed software engineering pod"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-dim/80 text-secondary uppercase backdrop-blur-sm">
                LAB // AI RUNTIME POD 01
              </span>
              <span className="font-label-mono text-label-mono text-text-muted text-[11px] backdrop-blur-sm px-2 py-0.5 rounded bg-surface-dim/80">
                LATENCY: 14MS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: THE 6 CORE STRUCTURED PRACTICES */}
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest block mb-1">
              CAPABILITY CATALOGUE // INDEX 01 - 06
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary">
              Core Specialized Practices
            </h2>
          </div>
          <span className="font-label-mono text-label-mono text-text-muted">
            ENGINEERING SPECIFICATION // VEC-2026.04
          </span>
        </div>

        {/* 6 Practices Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* PRACTICE 01: Business Strategy & Guidance */}
          <div className="flex flex-col bg-surface-container-low rounded p-6 shadow-sm justify-between transition-all hover:bg-surface-container border border-border-glass">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase">
                  01 // STRATEGY
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">account_tree</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
                  Business Strategy &amp; Guidance
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Deep-tissue operational dissection before code or capital deployment. Eliminating strategic blindspots and defining defensible venture leverage.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Strategic Decomposition &amp; Opportunity Audits</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Revenue Model Architecture &amp; Unit Economics</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Market Validation &amp; Competitor Dissection</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Execution Roadmap &amp; Operational Bottleneck Analysis</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 bg-surface-container/50 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between rounded-b border-t border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted">STATUS: OPERATIONAL</span>
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors flex items-center gap-1"
                href="#service-matrix"
              >
                SPEC VIEW &rarr;
              </a>
            </div>
          </div>

          {/* PRACTICE 02: AI, Automation & Tools */}
          <div className="flex flex-col bg-slate-surface rounded p-6 shadow-sm justify-between transition-all hover:bg-slate-elevated relative overflow-hidden border border-border-glass">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-primary-container text-on-primary-container uppercase font-semibold">
                  02 // AI RUNTIME
                </span>
                <span className="material-symbols-outlined text-secondary text-[22px]">smart_toy</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
                  AI, Automation &amp; Tools
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  High-throughput automation architectures, RLHF alignment pipelines, and multi-agent systems engineered to act as 24/7 autonomous labor layers.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Proprietary RLHF &amp; Human-in-the-Loop Pipeline Engineering</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Autonomous Agent Workflows &amp; Lead Velocity Engines</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Custom Model Evaluation &amp; Data Annotation Infrastructure</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Intelligent RPA &amp; 24/7 Digital Operations</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 bg-surface-container-high/40 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between rounded-b border-t border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-semibold">RECOMMENDED CORE</span>
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors flex items-center gap-1"
                href="#service-matrix"
              >
                SPEC VIEW &rarr;
              </a>
            </div>
          </div>

          {/* PRACTICE 03: Digital & Online Solutions */}
          <div className="flex flex-col bg-surface-container-low rounded p-6 shadow-sm justify-between transition-all hover:bg-surface-container border border-border-glass">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase">
                  03 // PLATFORMS
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">developer_board</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
                  Digital &amp; Online Solutions
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Hardened multi-tenant SaaS products, micro-utilities, and low-latency digital command interfaces designed for enterprise durability and extreme scale.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Custom Enterprise SaaS Platforms</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Scalable Micro-SaaS &amp; Utility Creation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Headless CMS &amp; AEO/GEO Growth Engines</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">High-Performance Web Applications &amp; Interactive Terminals</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 bg-surface-container/50 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between rounded-b border-t border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted">STATUS: OPERATIONAL</span>
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors flex items-center gap-1"
                href="#service-matrix"
              >
                SPEC VIEW &rarr;
              </a>
            </div>
          </div>

          {/* PRACTICE 04: Growth & Expansion */}
          <div className="flex flex-col bg-surface-container-low rounded p-6 shadow-sm justify-between transition-all hover:bg-surface-container border border-border-glass">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase">
                  04 // EXPANSION
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">rocket_launch</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
                  Growth &amp; Expansion
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Programmatic distribution protocols, hyper-targeted prospecting automation, and conversion mechanics built on behavioral economics.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Outbound Lead Intelligence &amp; CRM Automation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Automated Acquisition Pipelines</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Conversion Rate Architecture &amp; Behavioral Economics</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Strategic Exposure &amp; Market Scaling Vectors</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 bg-surface-container/50 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between rounded-b border-t border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted">STATUS: OPERATIONAL</span>
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors flex items-center gap-1"
                href="#service-matrix"
              >
                SPEC VIEW &rarr;
              </a>
            </div>
          </div>

          {/* PRACTICE 05: Knowledge Systems & Data Infrastructure */}
          <div className="flex flex-col bg-surface-container-low rounded p-6 shadow-sm justify-between transition-all hover:bg-surface-container border border-border-glass">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase">
                  05 // ONTOLOGY
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">database</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
                  Knowledge Systems &amp; Data Infrastructure
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Enterprise ontology architecture, entity relationship mappings, sensor analytics, and real-time knowledge consistency pipelines.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Entity Relationship Mapping &amp; Ontology Design</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Structured Enterprise Data Pipelines &amp; Validation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Multilingual Localization &amp; Translation Engines</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Real-time Satellite &amp; Sensor Analytics Integration</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 bg-surface-container/50 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between rounded-b border-t border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted">STATUS: OPERATIONAL</span>
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors flex items-center gap-1"
                href="#service-matrix"
              >
                SPEC VIEW &rarr;
              </a>
            </div>
          </div>

          {/* PRACTICE 06: Training & Workforce Development */}
          <div className="flex flex-col bg-surface-container-low rounded p-6 shadow-sm justify-between transition-all hover:bg-surface-container border border-border-glass">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase">
                  06 // WORKFORCE
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">groups</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary mb-2">
                  Training &amp; Workforce Development
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Human-in-the-loop workforce engineering, executive advisory boards, and specialized annotator pipelines trained for high-tier AI labs.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Global AI Talent Sourcing (via UVA VEC Careers)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Specialized RLHF Operator Training &amp; Deployment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Founder &amp; Executive Decision Sounding Protocols</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">arrow_forward</span>
                  <span className="font-body-sm text-body-sm text-text-primary">Operational Enablement &amp; Technical Documentation</span>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 bg-surface-container/50 -mx-6 -mb-6 px-6 py-4 flex items-center justify-between rounded-b border-t border-border-glass">
              <span className="font-label-mono text-label-mono text-text-muted">STATUS: OPERATIONAL</span>
              <a
                className="font-label-mono text-label-mono text-primary hover:text-text-primary transition-colors flex items-center gap-1"
                href="#service-matrix"
              >
                SPEC VIEW &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: HIGH-PRECISION CAPABILITY MATRIX & PIPELINE TELEMETRY */}
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto py-12">
        <div className="bg-surface-container-low rounded p-6 lg:p-8 flex flex-col gap-8 shadow-sm border border-border-glass">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="font-index-tag text-index-tag text-primary uppercase tracking-widest block mb-1">
                SYSTEM PERFORMANCE // REAL-TIME EXECUTION METRICS
              </span>
              <h2 className="font-headline-md text-headline-md text-text-primary">
                Architectural Telemetry &amp; Throughput
              </h2>
            </div>
            {/* Monospaced Legend */}
            <div className="flex items-center gap-6 font-label-mono text-label-mono text-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-primary"></span>
                <span>UVA VEC Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded bg-surface-container-highest"></span>
                <span>Industry Benchmark</span>
              </div>
            </div>
          </div>

          {/* Telemetry Progress Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="bg-surface-container p-5 rounded flex flex-col gap-3 border border-border-glass">
              <div className="flex justify-between items-baseline">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  Pipeline Throughput Density
                </span>
                <span className="font-label-mono text-label-mono text-primary font-semibold">94.8%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
                <div className="bg-primary h-full rounded transition-all duration-1000" style={{ width: '94.8%' }}></div>
              </div>
              <p className="font-label-mono text-label-mono text-text-muted">
                Zero-friction lead scraping &amp; auto-enrichment ingestion.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="bg-surface-container p-5 rounded flex flex-col gap-3 border border-border-glass">
              <div className="flex justify-between items-baseline">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  Model Alignment Verification
                </span>
                <span className="font-label-mono text-label-mono text-primary font-semibold">99.1%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
                <div className="bg-secondary-container h-full rounded transition-all duration-1000" style={{ width: '99.1%' }}></div>
              </div>
              <p className="font-label-mono text-label-mono text-text-muted">
                Human-in-the-loop precision threshold on RLHF datasets.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="bg-surface-container p-5 rounded flex flex-col gap-3 border border-border-glass">
              <div className="flex justify-between items-baseline">
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  System Bottleneck Eradication
                </span>
                <span className="font-label-mono text-label-mono text-primary font-semibold">88.4%</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded overflow-hidden">
                <div className="bg-primary h-full rounded transition-all duration-1000" style={{ width: '88.4%' }}></div>
              </div>
              <p className="font-label-mono text-label-mono text-text-muted">
                Operational friction reduction measured across SaaS client stacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: INTERACTIVE SERVICE MATRIX (FILTERABLE & DETAILED) */}
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto py-12 flex flex-col gap-8" id="service-matrix">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative">
          <div>
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest block mb-1">
              OPERATIONAL MATRIX // ENGAGEMENT CATALOG
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary">
              Deployable Architectural Modules
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Filter systems by tactical domain to view execution details and integration models.
            </p>
          </div>

          {/* Tabbed Filters */}
          <div className="flex flex-wrap items-center gap-2 bg-surface-container-low p-1.5 rounded border border-border-glass">
            <button
              onClick={() => setActiveFilter('all')}
              className={`matrix-filter-btn px-3 py-1.5 rounded font-label-mono text-label-mono uppercase transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-text-primary'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setActiveFilter('ai-systems')}
              className={`matrix-filter-btn px-3 py-1.5 rounded font-label-mono text-label-mono uppercase transition-all ${
                activeFilter === 'ai-systems'
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-text-primary'
              }`}
            >
              AI Systems
            </button>
            <button
              onClick={() => setActiveFilter('enterprise-saas')}
              className={`matrix-filter-btn px-3 py-1.5 rounded font-label-mono text-label-mono uppercase transition-all ${
                activeFilter === 'enterprise-saas'
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-text-primary'
              }`}
            >
              Enterprise SaaS
            </button>
            <button
              onClick={() => setActiveFilter('ops-growth')}
              className={`matrix-filter-btn px-3 py-1.5 rounded font-label-mono text-label-mono uppercase transition-all ${
                activeFilter === 'ops-growth'
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-text-primary'
              }`}
            >
              Operations &amp; Growth
            </button>
          </div>
        </div>

        {/* Filterable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="matrix-card flex flex-col bg-surface-container-low rounded p-6 shadow-sm justify-between transition-all hover:bg-surface-container border border-border-glass"
              data-category={card.category}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary uppercase">
                    {card.tag}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">{card.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-text-primary">{card.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="bg-surface-container p-3 rounded flex flex-col gap-1.5 font-label-mono text-label-mono text-text-muted border border-border-glass">
                  <div className="flex justify-between">
                    <span>Stack:</span>
                    <span className="text-text-primary">{card.stack}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Integration:</span>
                    <span className="text-primary">{card.talent}</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 flex items-center justify-between border-t border-border-glass">
                <span className="font-label-mono text-label-mono text-signal-success flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-success"></span> Available
                </span>
                <button
                  type="button"
                  onClick={onRequestAudit}
                  className="font-label-mono text-label-mono text-text-primary hover:text-primary transition-colors flex items-center gap-1"
                >
                  Explore Spec &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04: EXECUTION METHODOLOGY */}
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto py-12">
        <div className="bg-surface-container-lowest rounded p-8 lg:p-12 shadow-md border border-border-glass">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-border-glass">
            <div>
              <span className="font-index-tag text-index-tag text-primary uppercase tracking-widest block mb-1">
                THE DELIVERY BLUEPRINT // 4-STAGE METHODOLOGY
              </span>
              <h2 className="font-headline-lg text-headline-lg text-text-primary">
                How We Architect Capabilities
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              A disciplined, sequence-locked operational cadence guaranteeing each platform is mathematically validated before production release.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8">
            {/* Step 1 */}
            <div className="flex flex-col gap-3 p-5 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-semibold">STAGE 01</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary">Decomposition</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Full diagnostic breakdown of current software architecture, manual friction points, and customer behavioral vectors.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-index-tag text-index-tag text-text-muted">DISCOVERY &amp; AUDIT</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-3 p-5 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-semibold">STAGE 02</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary">Ecosystem Blueprint</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Data schematics, entity relationships, model evaluation loops, and multi-tenant cloud infrastructure specifications.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-index-tag text-index-tag text-text-muted">SYSTEM SPECIFICATION</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col gap-3 p-5 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-semibold">STAGE 03</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary">Engineering Sprint</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rapid AI integration, proprietary dataset training, UI/UX execution terminal creation, and zero-defect deployment pipelines.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-index-tag text-index-tag text-text-muted">RAPID PRODUCTION</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col gap-3 p-5 rounded bg-surface-container-low shadow-sm border border-border-glass">
              <span className="font-label-mono text-label-mono text-primary font-semibold">STAGE 04</span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary">Scale &amp; Autonomy</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Transitioning platforms into autonomous monitoring, continuous RLHF refinement, and active lead velocity loops.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-success"></span>
                <span className="font-index-tag text-index-tag text-text-muted">PERPETUAL LEVERAGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: REUSABLE CONSULTATION CALL-TO-ACTION */}
      <section className="w-full px-6 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="relative bg-slate-surface rounded p-8 lg:p-14 overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10 border border-border-glass">
          {/* Glow effect */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="font-index-tag text-index-tag px-2 py-0.5 rounded bg-surface-container-high text-primary tracking-widest uppercase">
                NO. 11 // INITIATE SYSTEM
              </span>
              <span className="font-label-mono text-label-mono text-signal-success flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-signal-success"></span>
                Q2 Audits Active
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary">
              Ready to Deconstruct Your Growth Bottlenecks?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Stop wrestling with off-the-shelf software and start scaling your venture with systems designed exclusively for how you operate. Book an executive strategic decomposition session.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                <span>15-Minute Strategic Audit</span>
              </div>
              <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                <span>Direct Principal Feedback</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={onRequestAudit}
              className="px-8 py-4 rounded bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono uppercase tracking-wider text-center font-semibold transition-all shadow-[0_0_24px_rgba(14,165,233,0.3)]"
              data-path="request-growth-audit"
            >
              Request Growth Audit
            </button>
            <button
              type="button"
              onClick={onOpenTerminal}
              className="px-8 py-4 rounded bg-surface-container hover:bg-surface-container-high text-text-primary font-label-mono text-label-mono uppercase tracking-wider text-center transition-all border border-border-glass"
              data-path="client-terminal"
            >
              Client Terminal Login &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
