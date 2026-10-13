import React, { useState } from 'react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bottleneck: 'lead-velocity',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      bottleneck: 'lead-velocity',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dim/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-surface-container-low border border-border-glass-bright rounded-xl shadow-2xl p-6 lg:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border-glass pb-4 mb-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal-success animate-pulse"></span>
              <span className="font-index-tag text-index-tag text-primary uppercase tracking-widest">
                SESSION PROTOCOL // NO. 11
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-text-primary tracking-tight">
              Request Growth Audit
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Strategic decomposition before implementation. Verified feedback in &lt; 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-text-muted hover:text-text-primary hover:bg-surface-container transition-colors"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-index-tag text-index-tag text-signal-success uppercase tracking-wider">
                DISPATCH SUCCESSFUL // ENQUEUED
              </span>
              <h4 className="font-headline-sm text-headline-sm text-text-primary">
                Audit Dossier Initialized
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2">
                Your parameters for <span className="text-text-primary font-medium">{formData.name}</span> have been synchronized into the UVA VEC review queue. Response dispatched within 24 hours.
              </p>
            </div>
            <div className="p-4 rounded bg-surface-container-lowest border border-border-glass font-label-mono text-label-mono text-xs text-text-muted w-full max-w-md text-left flex flex-col gap-1 mt-2">
              <div className="flex justify-between">
                <span>QUEUE REF:</span>
                <span className="text-primary font-bold">#UVA-AUDIT-2026-X84</span>
              </div>
              <div className="flex justify-between">
                <span>ESTIMATED LATENCY:</span>
                <span className="text-secondary">&lt; 24 HOURS</span>
              </div>
              <div className="flex justify-between">
                <span>LEAD ARCHITECT:</span>
                <span className="text-text-primary">INYO WENG // UVA VEC</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-text-primary font-label-mono text-label-mono uppercase tracking-wider transition-colors"
            >
              Close Console
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-mono text-label-mono text-text-muted uppercase">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-mono text-label-mono text-text-muted uppercase">
                  Work / Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="m.vance@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-mono text-label-mono text-text-muted uppercase">
                  Venture / Company URL
                </label>
                <input
                  type="text"
                  placeholder="https://enterprise.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-mono text-label-mono text-text-muted uppercase">
                  Target Focus Area
                </label>
                <select
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="lead-velocity">Lead Velocity &amp; Outbound Automation</option>
                  <option value="ai-workforce">AI Workforce &amp; RLHF Systems</option>
                  <option value="enterprise-saas">Enterprise Micro-SaaS Software</option>
                  <option value="idea-support">Idea Maturation &amp; Tier Support</option>
                  <option value="knowledge-systems">Knowledge Graphs &amp; RAG Systems</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-mono text-label-mono text-text-muted uppercase">
                Current Operational Bottleneck / Vision Description
              </label>
              <textarea
                rows={3}
                placeholder="Outline your team size, core friction points, existing software stack, or scaling hurdles..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="bg-surface-container px-3.5 py-2.5 rounded font-body-sm text-body-sm text-text-primary border border-border-glass focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-glass">
              <div className="flex items-center gap-2 text-xs font-label-mono text-text-muted">
                <span className="material-symbols-outlined text-sm text-signal-success">lock</span>
                <span>Strict confidential institutional review</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded bg-primary-container hover:bg-secondary text-on-primary font-label-mono text-label-mono uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.35)] flex items-center justify-center gap-2"
              >
                <span>Dispatch Request</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
