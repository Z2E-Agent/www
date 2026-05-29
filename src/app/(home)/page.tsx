import Link from 'next/link';
import { YouTubePlayer } from '@/components/youtube-player';
import { TerminalDemo } from '@/components/terminal-demo';

const features = [
  {
    title: 'Agent Loop',
    desc: 'Plan → Execute → Observe → Replan cycle with SSE streaming, doom-loop detection, and up to 30 autonomous steps.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: '250+ Models',
    desc: 'Route through any AI Gateway provider. Switch models at runtime via /model. OpenAI, Anthropic, Google, DeepSeek, Meta, Mistral, xAI and more.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="m9 10 2 2-2 2" />
        <path d="m15 14-2-2 2-2" />
      </svg>
    ),
  },
  {
    title: 'CTF System Prompt',
    desc: 'Built-in CTF-oriented persona with crypto, web exploitation, and OSINT methodology. Tool-first approach with evidence-based iteration.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tool Execution',
    desc: 'Pure pass-through policy. bash / run_command with timeout enforcement, 64KB output capture, and doom-loop protection.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 17v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
        <path d="M4 17h16" />
        <path d="M4 17v4" />
        <path d="M20 17v4" />
        <path d="M8 17v-4" />
        <path d="M16 17v-4" />
        <path d="M12 17v-4" />
      </svg>
    ),
  },
  {
    title: 'Session Debug',
    desc: 'Live JSON snapshot at /tmp/z2e-terminal/session.json with per-step traces. Full conversation history and doom-loop monitoring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Bubble Tea TUI',
    desc: 'Vim-style modal input, markdown rendering via glamour, runtime model picker, and full mouse support.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const layers = [
  { name: 'TUI', desc: 'Bubble Tea', file: 'internal/ui/' },
  { name: 'Agent', desc: 'Runtime + Tools', file: 'internal/agent/' },
  { name: 'Gateway', desc: 'SSE Client', file: 'internal/llm/gateway/' },
  { name: 'Executor', desc: 'Shell Runner', file: 'internal/executor/' },
  { name: 'Config', desc: 'Env Loader', file: 'internal/config/' },
];

const stats = [
  { label: 'Go LOC', value: '~4,000' },
  { label: 'Models', value: '250+' },
  { label: 'Max Steps', value: '30' },
  { label: 'Retries', value: '2' },
  { label: 'Output Cap', value: '64KB' },
  { label: 'Timeout', value: '60s' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-fd-background text-fd-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-1 flex-col justify-center py-28 px-4 mx-auto w-full max-w-[var(--fd-layout-width)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fd-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-fd-primary/3 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-fd-border bg-fd-card text-xs text-fd-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            v0.2.2 &mdash; Go + Bubble Tea
          </div>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-normal font-[family-name:var(--font-eb-garamond)] leading-tight">
            Autonomous AI agent TUI{' '}
            <span className="text-fd-muted-foreground">for CTF and pentesting.</span>
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mb-10 font-[family-name:var(--font-amiri-quran)]">
            z2e-terminal accepts natural-language missions, plans and executes multi-step CLI actions
            autonomously, observes output, reasons, and iterates until the objective is reached.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-fd-foreground text-fd-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Read Documentation
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-full hover:bg-fd-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Install
            </Link>
            <a
              href="https://github.com/Z2E-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-full hover:bg-fd-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-px overflow-hidden rounded-2xl border border-fd-border bg-fd-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-6 bg-fd-card">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-xs text-fd-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video/Preview Section */}
      <section className="pb-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <YouTubePlayer videoId="2txyf_5lsOo" title="Z2E Demo" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2 font-[family-name:var(--font-eb-garamond)]">Features</h2>
          <p className="text-fd-muted-foreground mb-10">
            Everything you need for autonomous security operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative flex flex-col p-5 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary mb-3 group-hover:bg-fd-primary/15 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-2 text-center font-[family-name:var(--font-eb-garamond)]">Architecture</h2>
          <p className="text-fd-muted-foreground mb-12 text-center">
            ~4,000 LOC of Go across 5 clean layers.
          </p>

          {/* Data flow arrows - visible on larger screens */}
          <div className="hidden md:flex items-center justify-center gap-0 mb-8">
            {layers.map((layer, i) => (
              <div key={layer.name} className="flex items-center">
                <div className="flex flex-col items-center px-3 py-5 rounded-xl border border-fd-border bg-fd-card min-w-[100px]">
                  <div className="text-sm font-semibold">{layer.name}</div>
                  <div className="text-xs text-fd-muted-foreground/80 mt-0.5">{layer.desc}</div>
                  <div className="text-[10px] text-fd-muted-foreground/40 font-mono mt-1">{layer.file}</div>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex items-center px-2 text-fd-muted-foreground/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="flex flex-col md:hidden gap-3">
            {layers.map((layer, i) => (
              <div key={layer.name} className="flex flex-col items-center">
                <div className="w-full flex items-center justify-between px-5 py-4 rounded-xl border border-fd-border bg-fd-card">
                  <div>
                    <div className="text-sm font-semibold">{layer.name}</div>
                    <div className="text-xs text-fd-muted-foreground/80">{layer.desc}</div>
                  </div>
                  <div className="text-[10px] text-fd-muted-foreground/40 font-mono">{layer.file}</div>
                </div>
                {i < layers.length - 1 && (
                  <div className="py-1 text-fd-muted-foreground/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 rotate-90">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-2 font-[family-name:var(--font-eb-garamond)]">Autonomous agent in action</h2>
          <p className="text-fd-muted-foreground mb-10">
            Watch the agent plan, execute, and iterate on CTF challenges.
          </p>
          <TerminalDemo />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 font-[family-name:var(--font-eb-garamond)]">Get started</h2>
          <p className="text-fd-muted-foreground mb-8">
            Clone the repo, set your API key, and run your first mission.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-fd-foreground text-fd-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Installation Guide
            </Link>
            <Link
              href="/docs/architecture/agent-loop"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-full hover:bg-fd-accent transition-colors"
            >
              Architecture Docs
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-fd-border">
        <div className="mx-auto max-w-[var(--fd-layout-width)] text-center text-fd-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Z2E-Agent Team. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
