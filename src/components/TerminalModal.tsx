import React, { useState, useEffect, useRef } from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAudit: () => void;
}

interface CommandLog {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onRequestAudit,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    { text: 'THE UVA VEC — CLIENT TELEMETRY TERMINAL [RUNTIME-V5.2]', type: 'success' },
    { text: 'LATITUDE: 38.0336° N | STATUS: ALL ENGINES ACTIVE | LATENCY: 14ms', type: 'output' },
    { text: 'Type "help" or click quick commands below to inspect venture architecture.', type: 'output' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLogs: CommandLog[] = [...logs, { text: `$ ${cmd}`, type: 'input' }];

    switch (trimmed) {
      case 'help':
        newLogs.push(
          { text: 'AVAILABLE TERMINAL COMMANDS:', type: 'success' },
          { text: '  status     - Display full system health and telemetry matrix', type: 'output' },
          { text: '  engines    - List active flagship and enterprise platforms', type: 'output' },
          { text: '  ping       - Test runtime edge cluster response latency', type: 'output' },
          { text: '  audit      - Launch growth audit intake console', type: 'output' },
          { text: '  clear      - Clear terminal screen buffer', type: 'output' }
        );
        break;
      case 'status':
        newLogs.push(
          { text: '[CLUSTER HEALTH REPORT]: 100% OPERATIONAL', type: 'success' },
          { text: '  • Core Nodes: US-East, EU-Central, AP-Northeast', type: 'output' },
          { text: '  • Code Waste Reduction: -84.2%', type: 'output' },
          { text: '  • Architecture Readiness: 100% SPEC', type: 'output' },
          { text: '  • AI Lead Velocity: < 850ms', type: 'output' },
          { text: '  • Model Accuracy Rate: 99.82%', type: 'output' }
        );
        break;
      case 'engines':
        newLogs.push(
          { text: '[ACTIVE VENTURE PLATFORMS]:', type: 'success' },
          { text: '  1. Anchor Room     (anchorroom.xyz) - Cognitive Trading Protocol', type: 'output' },
          { text: '  2. Growth Engine   (engine.uvavec.com) - Lead Velocity Pipeline', type: 'output' },
          { text: '  3. Leadscraper AI  (LS-901-AI) - Autonomous Prospecting', type: 'output' },
          { text: '  4. Pinnacle CMS    (v4.8) - Next-Gen AEO/GEO Discovery Engine', type: 'output' },
          { text: '  5. AgriOMS, Aswenna, SignPal Class, Stoic Finance, Storyboard AI', type: 'output' }
        );
        break;
      case 'ping':
        newLogs.push(
          { text: '64 bytes from edge-runtime.uvavec.com: icmp_seq=1 time=13.8 ms', type: 'output' },
          { text: '64 bytes from edge-runtime.uvavec.com: icmp_seq=2 time=14.1 ms', type: 'output' },
          { text: 'Round-trip min/avg/max = 13.8 / 13.95 / 14.1 ms [NOMINAL]', type: 'success' }
        );
        break;
      case 'audit':
        newLogs.push({ text: 'Triggering Growth Audit Request Form...', type: 'success' });
        setTimeout(() => {
          onClose();
          onRequestAudit();
        }, 600);
        break;
      case 'clear':
        setLogs([]);
        setInputVal('');
        return;
      default:
        newLogs.push({
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
          type: 'error',
        });
        break;
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dim/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-surface-container-lowest border border-border-glass-bright rounded-xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Window Header Bar */}
        <div className="bg-surface-container-low px-4 py-3 flex items-center justify-between border-b border-border-glass">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-signal-danger inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-signal-warning inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-signal-success inline-block"></span>
            </div>
            <span className="font-label-mono text-label-mono text-text-primary text-xs uppercase tracking-wider">
              UVA VEC // CLIENT DIAGNOSTIC TERMINAL
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-index-tag text-[10px] text-signal-success uppercase px-2 py-0.5 rounded bg-surface-container-high hidden sm:inline-block">
              PORT 443 / TLS 1.3
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-text-muted hover:text-text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Console Log Area */}
        <div className="flex-1 p-5 overflow-y-auto font-label-mono text-xs sm:text-sm space-y-2 select-text">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`${
                log.type === 'input'
                  ? 'text-primary font-semibold'
                  : log.type === 'success'
                  ? 'text-signal-success'
                  : log.type === 'error'
                  ? 'text-signal-danger'
                  : 'text-on-surface-variant'
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Action Tags */}
        <div className="bg-surface-container-low/70 px-4 py-2 border-t border-border-glass flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-label-mono text-text-muted uppercase">PRESETS:</span>
          {['status', 'engines', 'ping', 'audit', 'clear'].map((preset) => (
            <button
              key={preset}
              onClick={() => handleCommand(preset)}
              className="text-[11px] font-label-mono px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-primary hover:text-text-primary transition-colors border border-border-glass"
            >
              ${preset}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={onSubmit} className="bg-surface-container-low p-3 flex items-center gap-2 border-t border-border-glass">
          <span className="font-label-mono text-primary font-bold pl-2">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command ('help', 'status', 'engines')..."
            className="flex-1 bg-transparent font-label-mono text-xs sm:text-sm text-text-primary focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded bg-primary-container text-on-primary font-label-mono text-xs uppercase tracking-wider font-semibold hover:bg-secondary transition-colors"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};
