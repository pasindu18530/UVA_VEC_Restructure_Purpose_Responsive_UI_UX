import React, { useState } from 'react';

interface CareersPageProps {
  onOpenAudit: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onOpenAudit }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'engineering' | 'ai-research' | 'venture-ops'>('all');
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setOpenDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const roles = [
    {
      id: 'role-1',
      category: 'ai-research',
      tag: 'AI & AUTOMATION',
      type: 'FULL-TIME • REMOTE (GLOBAL)',
      priority: true,
      title: 'Senior RLHF & Model Evaluation Engineer',
      description:
        'Architect automated pipelines for human-in-the-loop validation, multi-turn reasoning benchmark curation, and preference scoring models. Lead consensus verification algorithms across distributed operator nodes.',
      skills: ['Python', 'PyTorch', 'DPO / PPO', 'LLM Benchmarks'],
      deliverables: [
        'Design and deploy continuous model evaluation rigs comparing instruction adherence across Frontier LLMs.',
        'Maintain data consistency matrices for 500+ global annotator workflows.',
        'Direct integration with proprietary RLHF orchestrators powering client models.',
      ],
    },
    {
      id: 'role-2',
      category: 'engineering',
      tag: 'SOFTWARE DEVELOPMENT',
      type: 'FULL-TIME • REMOTE',
      priority: false,
      title: 'Full-Stack Systems Architect - Enterprise SaaS',
      description:
        'Construct high-performance, low-latency micro-SaaS platforms and command consoles. Own end-to-end reliability for Pinnacle CMS and Anchor Room execution interfaces.',
      skills: ['TypeScript', 'Next.js / Node', 'PostgreSQL', 'Event Sinks'],
      deliverables: [
        'Build resilient micro-SaaS backends processing 10k+ requests per minute.',
        'Enforce microsecond-level query optimizations on mission-critical state records.',
        'Maintain zero-regression CI/CD cycles through containerized test harnesses.',
      ],
    },
    {
      id: 'role-3',
      category: 'engineering',
      tag: 'PLATFORMS & AUTOMATION',
      type: 'FULL-TIME • REMOTE',
      priority: false,
      title: 'Autonomous Agent & Lead Velocity Engineer',
      description:
        'Scale Leadscraper AI and proprietary multi-threaded crawler infrastructure. Build dynamic scraping algorithms that bypass gatekeepers and directly feed live outbound intelligence funnels.',
      skills: ['Go / Python', 'Distributed Crawling', 'Browser Automation', 'Kafka'],
      deliverables: [
        'Develop adaptive heuristic crawlers capable of navigating complex anti-bot architectures legally.',
        'Enrich contact graphs using LLM-assisted schema mapping in real time.',
        'Maintain sub-500ms pipeline latencies between web capture and CRM insertion.',
      ],
    },
    {
      id: 'role-4',
      category: 'venture-ops',
      tag: 'SOLUTIONS & STRATEGY',
      type: 'FULL-TIME • REMOTE',
      priority: false,
      title: 'Venture Systems Analyst',
      description:
        'Conduct high-intensity strategic decompositions of client and venture bottlenecks. Map founder workflows, pinpoint automation opportunities, and synthesize technical system requirements.',
      skills: ['Operational Modeling', 'Constraint Theory', 'SaaS Unit Economics', 'Decomposition'],
      deliverables: [
        'Perform rapid audits on multi-million dollar operational workflows.',
        'Translate unstructured enterprise friction points into actionable technical architecture specifications.',
        'Deliver strategic guidance during new venture incubator kickoffs.',
      ],
    },
  ];

  const filteredRoles = selectedCategory === 'all'
    ? roles
    : roles.filter(r => r.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      {/* DOSSIER METADATA HEADER TICKER */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-3 border-b border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-signal-success animate-ping"></span>
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">TALENT DISCOVERY // 2026</span>
            <span className="text-text-muted text-xs hidden sm:inline">•</span>
            <span className="font-label-mono text-label-mono text-text-muted uppercase">NETWORK STATUS: ACTIVELY SOURCING</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-label-mono text-label-mono text-text-muted">GLOBAL HUBS: <span className="text-text-primary">DISTRIBUTED &amp; ASYNC</span></span>
            <span className="font-label-mono text-label-mono text-primary uppercase">DIRECT PORTAL: OPEN</span>
          </div>
        </div>
      </section>

      {/* 1. HERO SECTION */}
      <section className="w-full bg-surface-dim px-6 lg:px-12 pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/10 via-transparent to-surface-dim pointer-events-none"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 font-label-mono text-label-mono text-text-muted">
              <a className="hover:text-primary transition-colors" href="/">HOME</a>
              <span>/</span>
              <span className="text-text-primary">CAREERS &amp; TALENT</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-1 rounded bg-surface-container-high border border-border-glass">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-index-tag text-index-tag text-primary tracking-widest uppercase">GLOBAL TALENT NETWORK // 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-label-mono text-label-mono text-secondary tracking-widest block uppercase">OPPORTUNITIES &amp; VENTURE ENGINEERING</span>
              <h1 className="font-headline-display text-headline-display text-text-primary uppercase tracking-tight">
                Build What's Next with UVA VEC.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Explore opportunities to work on technology, digital solutions, AI, automation, and meaningful business challenges across a globally distributed venture infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  className="font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all px-7 py-3.5 rounded shadow-lg shadow-primary-container/20 tracking-wider uppercase font-semibold text-center flex items-center justify-center gap-2"
                  href="#open-opportunities"
                >
                  <span>Explore Open Opportunities</span>
                  <span className="material-symbols-outlined text-sm">arrow_downward</span>
                </a>
                <a
                  className="font-label-mono text-label-mono text-text-primary bg-surface-container hover:bg-surface-container-high transition-all px-6 py-3.5 rounded tracking-wider uppercase flex items-center justify-center gap-2 border border-border-glass"
                  href="https://careers.uvavec.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Access Talent Portal</span>
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="rounded-xl overflow-hidden border border-border-glass-bright shadow-2xl relative bg-surface-container-low aspect-[16/10]">
                <img
                  alt="Modern diverse team of tech professionals and engineers collaborating passionately around high-tech workstations in an architectural dark minimalist office"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  src="/assets/tech-team.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-surface-dim/90 backdrop-blur-md border border-border-glass">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-signal-success"></span>
                    <span className="font-label-mono text-label-mono text-text-primary">COLLABORATIVE VENTURE PODS</span>
                  </div>
                  <span className="font-index-tag text-index-tag text-secondary uppercase">LIVE SPRINT ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-lg bg-surface-container-lowest border border-border-glass">
            <div className="flex flex-col gap-1 p-3">
              <span className="font-index-tag text-index-tag text-text-muted uppercase">Global Model</span>
              <span className="font-headline-md text-headline-md text-text-primary font-bold">100% Async</span>
              <span className="font-label-mono text-label-mono text-secondary text-xs">Flexible distributed rhythms</span>
            </div>
            <div className="flex flex-col gap-1 p-3">
              <span className="font-index-tag text-index-tag text-text-muted uppercase">Innovation Pace</span>
              <span className="font-headline-md text-headline-md text-text-primary font-bold">Rapid Cycles</span>
              <span className="font-label-mono text-label-mono text-secondary text-xs">From concept to live deployment</span>
            </div>
            <div className="flex flex-col gap-1 p-3">
              <span className="font-index-tag text-index-tag text-text-muted uppercase">Core Domains</span>
              <span className="font-headline-md text-headline-md text-text-primary font-bold">AI &amp; SaaS</span>
              <span className="font-label-mono text-label-mono text-secondary text-xs">Automation &amp; systems design</span>
            </div>
            <div className="flex flex-col gap-1 p-3">
              <span className="font-index-tag text-index-tag text-text-muted uppercase">Talent Review</span>
              <span className="font-headline-md text-headline-md text-text-primary font-bold">&lt; 48 Hours</span>
              <span className="font-label-mono text-label-mono text-secondary text-xs">Transparent candidate intake</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIFE AT UVA VEC */}
      <section className="w-full bg-background px-6 lg:px-12 py-space-section border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div>
              <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest block mb-2">01 // CULTURE &amp; ENVIRONMENT</span>
              <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Life at UVA VEC</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Experience an engineering-led culture built on psychological safety, high leverage, transparent specifications, and modern collaborative problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 group rounded-xl overflow-hidden border border-border-glass-bright bg-surface-container relative aspect-[16/10]">
              <img
                alt="Authentic modern workplace photography of software engineers and system architects engaged in focused collaborative problem solving"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="/assets/engineers-workplace.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-70 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-4 rounded bg-surface-dim/90 backdrop-blur-md border border-border-glass">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">architecture</span>
                  <span className="font-headline-sm text-headline-sm text-text-primary">Architectural Systems Studio</span>
                </div>
                <span className="font-label-mono text-label-mono text-secondary">INNOVATION LAB // PROTOCOL ACTIVE</span>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-6 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">Collaborative Problem Solving</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Engineers, researchers, and venture architects work side-by-side to solve fundamental systems constraints with high agency and shared ownership.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <span className="material-symbols-outlined text-2xl">terminal</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">Systems-Driven Environment</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We replace bureaucratic friction with transparent Git-based specifications, reproducible benchmarks, and explicit technical trade-offs.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col gap-2">
                <div className="flex items-center gap-3 text-primary mb-1">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                  <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase">Deep Asynchronous Focus</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Dedicated blocks for unfragmented deep work. Zero meeting bloat, with well-documented communication channels that empower builders worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WORK WITH US? */}
      <section className="w-full bg-surface-dim px-6 lg:px-12 py-space-section border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">02 // VALUE &amp; ADVANCEMENT</span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Why Work With Us?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              We offer an exceptional environment to expand your capabilities, exercise ownership, and see your contributions power tangible digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Meaningful Business &amp; Tech Challenges</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Tackle mission-critical problems spanning high-throughput SaaS engines, algorithmic lead extraction, and institutional venture automation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass flex items-center justify-between text-secondary font-label-mono text-label-mono text-xs">
                <span>HIGH IMPACT</span>
                <span>Real-World Scale</span>
              </div>
            </div>
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">neurology</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Explore AI, Automation &amp; Digital Solutions</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Work on leading-edge RLHF pipelines, frontier model alignment workflows, synthetic dataset orchestration, and intelligent system integration.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass flex items-center justify-between text-secondary font-label-mono text-label-mono text-xs">
                <span>AI-NATIVE</span>
                <span>Frontier Stack</span>
              </div>
            </div>
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Develop Practical High-Leverage Skills</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Accelerate your professional trajectory with modern full-stack architectures, cloud orchestration, distributed crawling, and operational research.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass flex items-center justify-between text-secondary font-label-mono text-label-mono text-xs">
                <span>GROWTH FOCUS</span>
                <span>Continuous Craft</span>
              </div>
            </div>
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">lightbulb</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Contribute Ideas &amp; Innovative Solutions</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Every voice contributes directly to systems design. We support individual initiative, speculative prototyping, and rapid incubation cycles.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass flex items-center justify-between text-secondary font-label-mono text-label-mono text-xs">
                <span>MERITOCRACY</span>
                <span>Direct Agency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AREAS OF WORK */}
      <section className="w-full bg-background px-6 lg:px-12 py-space-section border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">03 // DISCIPLINARY DOMAINS</span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Areas of Work &amp; Technical Practices</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Our multidisciplinary operations encompass software development, artificial intelligence, strategic business solutions, and technical services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 01</span>
                  <span className="material-symbols-outlined text-secondary">code</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">Software Development &amp; Digital Solutions</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Full-stack engineering, reactive client consoles, modular component ecosystems, resilient APIs, and low-latency cloud infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-label-mono text-label-mono text-xs text-text-muted">
                <span className="px-2 py-0.5 rounded bg-surface-container-low">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Next.js</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Cloud Native</span>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 02</span>
                  <span className="material-symbols-outlined text-secondary">smart_toy</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">AI &amp; Automation Engineering</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Human-in-the-loop workflows, prompt engineering, multi-turn reasoning evaluations, synthetic dataset pipelines, and robotic process automation.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-label-mono text-label-mono text-xs text-text-muted">
                <span className="px-2 py-0.5 rounded bg-surface-container-low">RLHF</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">PyTorch</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">LLM Evaluation</span>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 03</span>
                  <span className="material-symbols-outlined text-secondary">layers</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">Technology &amp; Platform Development</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Architecting core venture platforms including Leadscraper AI, Pinnacle CMS, Anchor Room, and high-frequency data pipelines.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-label-mono text-label-mono text-xs text-text-muted">
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Micro-SaaS</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Distributed Systems</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Databases</span>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 04</span>
                  <span className="material-symbols-outlined text-secondary">insights</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">Business Solutions &amp; Strategy</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Venture bottleneck analysis, commercial model validation, market expansion mapping, and operational constraint decomposition.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-label-mono text-label-mono text-xs text-text-muted">
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Strategy</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Unit Economics</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Venture Ops</span>
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-primary font-bold">DOMAIN 05</span>
                  <span className="material-symbols-outlined text-secondary">settings_suggest</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary uppercase mb-3">Digital Operations &amp; Related Services</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                  Programmatic lead nurturing, continuous quality audits, automated data labeling workflows, systems observability, and reliability engineering.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 font-label-mono text-label-mono text-xs text-text-muted">
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Growth Ops</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">SRE / CI-CD</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-low">Automation Funnels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OPEN OPPORTUNITIES */}
      <section className="w-full bg-surface-dim px-6 lg:px-12 py-space-section border-t border-border-glass" id="open-opportunities">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div>
              <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest block mb-2">04 // CURRENT OPENINGS</span>
              <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Open Opportunities</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
                Explore currently active positions across our venture platforms. Review specifications and submit your credentials directly through our talent portal.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" id="role-filters">
              <button
                className={`filter-btn font-label-mono text-label-mono px-4 py-2 rounded uppercase transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-text-muted hover:text-text-primary'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Departments
              </button>
              <button
                className={`filter-btn font-label-mono text-label-mono px-4 py-2 rounded uppercase transition-all ${
                  selectedCategory === 'engineering'
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-text-muted hover:text-text-primary'
                }`}
                onClick={() => setSelectedCategory('engineering')}
              >
                Engineering
              </button>
              <button
                className={`filter-btn font-label-mono text-label-mono px-4 py-2 rounded uppercase transition-all ${
                  selectedCategory === 'ai-research'
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-text-muted hover:text-text-primary'
                }`}
                onClick={() => setSelectedCategory('ai-research')}
              >
                AI &amp; Automation
              </button>
              <button
                className={`filter-btn font-label-mono text-label-mono px-4 py-2 rounded uppercase transition-all ${
                  selectedCategory === 'venture-ops'
                    ? 'bg-primary-container text-on-primary'
                    : 'bg-surface-container text-text-muted hover:text-text-primary'
                }`}
                onClick={() => setSelectedCategory('venture-ops')}
              >
                Solutions &amp; Strategy
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4" id="roles-container">
            {filteredRoles.map(role => (
              <React.Fragment key={role.id}>
                <div className="role-card p-6 md:p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-index-tag text-index-tag px-2.5 py-1 rounded bg-surface-container-highest text-secondary uppercase">{role.tag}</span>
                      <span className="font-label-mono text-label-mono text-text-muted">{role.type}</span>
                      {role.priority && (
                        <span className="font-label-mono text-label-mono text-signal-success">● PRIORITY FILL</span>
                      )}
                    </div>
                    <h3 className="font-headline-md text-headline-md text-text-primary">{role.title}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-3xl">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 font-label-mono text-label-mono text-xs text-text-muted">
                      {role.skills.map((skill, idx) => (
                        <span key={idx} className="bg-surface-container-low px-2 py-0.5 rounded">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                    <a
                      className="font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all px-6 py-3 rounded text-center uppercase tracking-wider font-semibold"
                      href="https://careers.uvavec.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      View Role / Apply
                    </a>
                    <button
                      className="font-label-mono text-label-mono text-text-muted hover:text-text-primary px-4 py-2 text-center uppercase cursor-pointer"
                      onClick={() => toggleDetails(role.id)}
                    >
                      {openDetails[role.id] ? 'Hide Overview' : 'Role Overview'}
                    </button>
                  </div>
                </div>
                {openDetails[role.id] && (
                  <div className="p-6 rounded-b-lg bg-surface-container-low -mt-4 text-on-surface-variant font-body-sm text-body-sm space-y-3 border-x border-b border-border-glass">
                    <p className="text-text-primary font-semibold">Key Deliverables:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {role.deliverables.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Register Interest Banner */}
          <div className="p-8 rounded-lg bg-surface-container-lowest border border-border-glass-bright flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">person_add</span>
              </div>
              <div>
                <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest block mb-1">GENERAL TALENT INTAKE</span>
                <h4 className="font-headline-sm text-headline-sm text-text-primary">Don't see an exact match?</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Register your interest in our talent pool for upcoming roles. We review speculative profiles continually across software engineering, AI, and strategic operations.
                </p>
              </div>
            </div>
            <a
              className="font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all px-6 py-3.5 rounded text-center uppercase tracking-wider font-semibold flex-shrink-0 shadow-md shadow-primary-container/20"
              href="https://careers.uvavec.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Register Interest →
            </a>
          </div>
        </div>
      </section>

      {/* 6. WHO WE'RE LOOKING FOR */}
      <section className="w-full bg-background px-6 lg:px-12 py-space-section border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">05 // CORE QUALITIES</span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Who We're Looking For</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              We prioritize fundamental competencies, intellectual honesty, and high ownership over superficial pedigree or buzzword proficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">psychology</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">First-Principles Problem Solving</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You break intricate, ambiguous problems down to fundamental truths and build robust architectural solutions without relying on dogmatic convention.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                CORE TRAIT // LOGICAL DEPTH
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Intellectual Curiosity &amp; Technical Craft</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  A genuine fascination with modern systems, emerging AI paradigms, clean software ergonomics, and durable system craftsmanship.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                CORE TRAIT // CONTINUOUS CURIOSITY
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">task_alt</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Autonomous Execution &amp; Ownership</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  You thrive in high-trust, asynchronous environments. You take proactive ownership of end outcomes and drive initiatives forward independently.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                CORE TRAIT // RADICAL OWNERSHIP
              </div>
            </div>

            <div className="p-8 rounded-lg bg-surface-container border border-border-glass hover:bg-surface-container-high transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">diversity_3</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-3">Collaboration &amp; Continuous Learning</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Strong asynchronous communication clarity, empathy for peers, readiness to exchange constructive feedback, and an insatiable desire to learn.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-glass font-label-mono text-label-mono text-xs text-text-muted">
                CORE TRAIT // MUTUAL RESPECT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR RECRUITMENT PROCESS */}
      <section className="w-full bg-surface-dim px-6 lg:px-12 py-space-section border-t border-border-glass">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">06 // TRANSPARENT ROADMAP</span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Our Recruitment Process</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              A transparent 5-step journey structured to evaluate real-world engineering judgment and operational capability with prompt communication throughout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-secondary font-bold">STEP 01</span>
                  <span className="material-symbols-outlined text-primary text-xl">search</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Explore Opportunities</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Browse active roles or our talent pool areas to find the technical vector that matches your strengths.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                Phase: Identification
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-secondary font-bold">STEP 02</span>
                  <span className="material-symbols-outlined text-primary text-xl">send</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Submit Application</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Submit your systems portfolio, GitHub profile, or resume directly through our talent ingestion portal.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                Phase: Intake
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-secondary font-bold">STEP 03</span>
                  <span className="material-symbols-outlined text-primary text-xl">fact_check</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Application Review</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Our engineering leads review your background against current project roadmaps within 48 hours.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                Phase: Initial Assessment
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-secondary font-bold">STEP 04</span>
                  <span className="material-symbols-outlined text-primary text-xl">forum</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Technical Dialogue</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  A focused technical discussion or practical work sprint with Principal Engineers to discuss problem decomposition.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-text-muted uppercase">
                Phase: Deep Dive
              </div>
            </div>

            <div className="p-6 rounded-lg bg-surface-container border border-border-glass flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-mono text-label-mono text-secondary font-bold">STEP 05</span>
                  <span className="material-symbols-outlined text-signal-success text-xl">verified</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase mb-2">Next Steps &amp; Onboarding</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Transparent offer extended followed by immediate provisioning into our distributed toolchain and venture pods.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border-glass font-index-tag text-index-tag text-signal-success uppercase">
                Phase: Deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="w-full bg-background px-6 lg:px-12 py-space-section border-t border-border-glass">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center space-y-2">
            <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">07 // RECRUITMENT FAQ</span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary uppercase tracking-tight">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Common questions regarding our opportunities, application process, and distributed culture.</p>
          </div>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="rounded-lg bg-surface-container border border-border-glass overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-text-primary cursor-pointer"
                onClick={() => toggleFaq('faq-1')}
              >
                <span>How can I apply for an opportunity?</span>
                <span
                  className="material-symbols-outlined text-secondary transition-transform duration-300"
                  style={{ transform: openFaq['faq-1'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              {openFaq['faq-1'] && (
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                  Direct submissions are handled seamlessly via our dedicated talent portal at careers.uvavec.com or by clicking 'View Role / Apply' on any listed opening above. Simply attach your portfolio, GitHub, or relevant work artifacts.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="rounded-lg bg-surface-container border border-border-glass overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-text-primary cursor-pointer"
                onClick={() => toggleFaq('faq-2')}
              >
                <span>Where can I find current vacancies?</span>
                <span
                  className="material-symbols-outlined text-secondary transition-transform duration-300"
                  style={{ transform: openFaq['faq-2'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              {openFaq['faq-2'] && (
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                  Current openings are published live on this page in the Open Opportunities section and synchronized with our talent portal at careers.uvavec.com. Openings are refreshed regularly as new project clusters spin up.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="rounded-lg bg-surface-container border border-border-glass overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-text-primary cursor-pointer"
                onClick={() => toggleFaq('faq-3')}
              >
                <span>Can I express interest if there are no suitable openings?</span>
                <span
                  className="material-symbols-outlined text-secondary transition-transform duration-300"
                  style={{ transform: openFaq['faq-3'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              {openFaq['faq-3'] && (
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                  Yes, absolutely. We encourage proactive submissions through our 'Register Interest' channel. We frequently reach out to candidates in our speculative talent pool before public postings are launched.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="rounded-lg bg-surface-container border border-border-glass overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-headline-sm text-headline-sm text-text-primary cursor-pointer"
                onClick={() => toggleFaq('faq-4')}
              >
                <span>What is the work arrangement and collaboration model?</span>
                <span
                  className="material-symbols-outlined text-secondary transition-transform duration-300"
                  style={{ transform: openFaq['faq-4'] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              {openFaq['faq-4'] && (
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                  UVA VEC operates on an asynchronous-first, fully distributed model across global hubs. We value continuous shipping and documentation over rigid office hours, offering engineers flexibility and deep focus.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-space-2xl relative overflow-hidden border-t border-border-glass">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 space-y-6">
          <span className="font-index-tag text-index-tag text-secondary uppercase tracking-widest">
            INITIATE RECRUITMENT INTAKE // 2026
          </span>
          <h2 className="font-headline-display text-headline-display text-text-primary uppercase tracking-tight max-w-3xl">
            Ready to Build What's Next?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Join our collective architecting autonomous systems, digital solutions, and high-velocity software infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md">
            <a
              className="w-full sm:w-auto font-label-mono text-label-mono text-on-primary bg-primary-container hover:bg-secondary transition-all px-8 py-4 rounded text-center uppercase tracking-wider font-semibold shadow-lg shadow-primary-container/25"
              href="#open-opportunities"
            >
              Explore Opportunities
            </a>
            <a
              className="w-full sm:w-auto font-label-mono text-label-mono text-text-primary bg-surface-container hover:bg-surface-container-high transition-all px-7 py-4 rounded text-center uppercase tracking-wider border border-border-glass"
              href="https://careers.uvavec.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Access Talent Portal
            </a>
          </div>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4 text-text-muted font-label-mono text-label-mono text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-success"></span>
              Prompt Application Review
            </span>
            <span>•</span>
            <span>Transparent Technical Dialogue</span>
            <span>•</span>
            <span>Global Async Team</span>
          </div>
        </div>
      </section>
    </div>
  );
};
