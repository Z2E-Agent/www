import Link from 'next/link';
import Image from 'next/image';
import { YouTubePlayer } from '@/components/youtube-player';
import { TerminalDemo } from '@/components/terminal-demo';

const features = [
  {
    title: 'Agent Loop',
    desc: 'Plan, execute, observe, replan. SSE streaming, doom-loop detection, up to 30 autonomous steps per mission.',
    tag: 'runtime',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: '250+ Models',
    desc: 'Route through any AI Gateway provider. Switch at runtime via /model. OpenAI, Anthropic, Google, DeepSeek, Meta, Mistral, xAI.',
    tag: 'gateway',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="m9 10 2 2-2 2" />
        <path d="m15 14-2-2 2-2" />
      </svg>
    ),
  },
  {
    title: 'CTF System Prompt',
    desc: 'Built-in CTF persona with crypto, web exploitation, OSINT methodology. Tool-first, evidence-based iteration.',
    tag: 'prompt',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Tool Execution',
    desc: 'Pure pass-through policy. bash / run_command with timeout enforcement, 64KB output capture, doom-loop guard.',
    tag: 'executor',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m4 17 6-6-6-6" />
        <path d="m12 19 8 0" />
      </svg>
    ),
  },
  {
    title: 'Session Debug',
    desc: 'Live JSON snapshot at /tmp/z2e-terminal/session.json. Per-step traces, full history, doom-loop monitoring.',
    tag: 'debug',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Bubble Tea TUI',
    desc: 'Vim-style modal input, glamour markdown render, runtime model picker, full mouse support, alt-screen.',
    tag: 'ui',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
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
  { label: 'go_loc', value: '~4k' },
  { label: 'models', value: '250+' },
  { label: 'max_steps', value: '30' },
  { label: 'retries', value: '2' },
  { label: 'output_cap', value: '64KB' },
  { label: 'timeout', value: '60s' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-fd-background text-fd-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-1 flex-col justify-center py-24 px-4 mx-auto w-full max-w-[var(--fd-layout-width)] overflow-hidden">
        {/* Grid backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
          }}
        />
        {/* Red ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 dark:opacity-60"
          style={{
            background:
              'radial-gradient(50% 40% at 50% 35%, rgba(239,68,68,0.12), transparent 70%)',
          }}
        />

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Wolf logo — centered, targeting reticle framing */}
          <div className="relative mb-8 flex items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(40% 40% at 50% 50%, rgba(239,68,68,0.22), transparent 70%)',
              }}
            />
            {/* Corner brackets — targeting reticle */}
            <div aria-hidden className="pointer-events-none absolute -inset-6 sm:-inset-8">
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-500/50" />
              <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-500/50" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-500/50" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-500/50" />
            </div>
            <Image
              src="/logo/logo-nobg-md.png"
              alt="Z²ᴱ-Agent cybernetic wolf logo"
              width={768}
              height={1130}
              priority
              sizes="(max-width: 640px) 60vw, 280px"
              className="w-[180px] sm:w-[220px] lg:w-[240px] h-auto select-none animate-[float_6s_ease-in-out_infinite] [filter:drop-shadow(0_15px_35px_rgba(239,68,68,0.25))] dark:[filter:drop-shadow(0_15px_45px_rgba(239,68,68,0.35))]"
            />
          </div>

          {/* Terminal-style badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 border border-fd-border bg-fd-card/80 backdrop-blur-sm font-mono text-xs text-fd-muted-foreground">
            <span className="text-red-500">$</span>
            <span>z2e-terminal</span>
            <span className="text-fd-muted-foreground/50">v0.2.4</span>
            <span className="mx-1 text-fd-muted-foreground/30">·</span>
            <span className="text-fd-muted-foreground/70">go + bubble tea</span>
          </div>

          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-normal font-[family-name:var(--font-eb-garamond)] leading-[1.05] tracking-tight">
            Autonomous AI agent TUI{' '}
            <span className="text-fd-muted-foreground">for CTF and pentesting.</span>
          </h1>
          <p className="text-base md:text-lg text-fd-muted-foreground max-w-2xl mb-8 font-[family-name:var(--font-amiri-quran)] leading-relaxed">
            z2e-terminal accepts natural-language missions, plans and executes multi-step CLI actions
            autonomously, observes output, reasons, and iterates until the objective is reached.
          </p>

          {/* Install command block */}
          <div className="group relative w-full max-w-md mb-8">
            <div className="flex items-center gap-2 px-4 py-1 border border-b-0 border-fd-border bg-fd-card/60 rounded-t-md">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-[11px] text-fd-muted-foreground/60">bash</span>
            </div>
            <code className="block px-4 py-3 border border-fd-border bg-fd-card/40 rounded-b-md font-mono text-sm text-left overflow-x-auto">
              <span className="text-fd-muted-foreground/50 select-none">$ </span>
              <span className="text-red-400">export</span>{' '}
              <span className="text-fd-foreground">AI_GATEWAY_API_KEY</span>
              <span className="text-fd-muted-foreground">=</span>
              <span className="text-green-400">&quot;...&quot;</span>
              <span className="text-fd-muted-foreground/50"> && </span>
              <span className="text-fd-foreground">just run</span>
            </code>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-fd-foreground text-fd-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Read Documentation
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-fd-border text-fd-foreground font-medium text-sm hover:bg-fd-accent transition-colors"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-fd-border text-fd-foreground font-medium text-sm hover:bg-fd-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar — terminal readout style */}
      <section className="py-10 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-3 px-1 font-mono text-[11px] text-fd-muted-foreground/50">
            <span className="text-red-500/70">●</span>
            <span>runtime · config</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-px border border-fd-border bg-fd-border overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-5 bg-fd-card">
                <div className="font-mono text-xl font-medium tabular-nums">{stat.value}</div>
                <div className="font-mono text-[10px] text-fd-muted-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Preview Section */}
      <section className="pb-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <YouTubePlayer videoId="2txyf_5lsOo" title="Z2E Demo" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="font-mono text-xs text-red-500/70">{'// capabilities'}</span>
            <h2 className="text-3xl font-semibold mt-1 font-[family-name:var(--font-eb-garamond)]">Features</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              Everything you need for autonomous security operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative flex flex-col p-5 border border-fd-border bg-fd-card hover:border-red-500/30 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 flex items-center justify-center border border-fd-border bg-fd-background text-fd-muted-foreground group-hover:text-red-500 group-hover:border-red-500/30 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="font-mono text-[10px] text-fd-muted-foreground/40 uppercase tracking-wider">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <span className="font-mono text-xs text-red-500/70">{'// tree'}</span>
            <h2 className="text-3xl font-semibold mt-1 font-[family-name:var(--font-eb-garamond)]">Architecture</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              ~4k LOC of Go across 5 clean layers.
            </p>
          </div>

          {/* Data flow — desktop */}
          <div className="hidden md:flex items-stretch justify-center gap-0 mb-4">
            {layers.map((layer, i) => (
              <div key={layer.name} className="flex items-stretch">
                <div className="flex flex-col items-center justify-center px-4 py-6 border border-fd-border bg-fd-card min-w-[110px]">
                  <div className="text-sm font-semibold">{layer.name}</div>
                  <div className="text-xs text-fd-muted-foreground/80 mt-0.5">{layer.desc}</div>
                  <div className="font-mono text-[10px] text-red-500/50 mt-2">{layer.file}</div>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex items-center px-1.5 text-fd-muted-foreground/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="flex flex-col md:hidden gap-2">
            {layers.map((layer, i) => (
              <div key={layer.name} className="flex flex-col items-center">
                <div className="w-full flex items-center justify-between px-4 py-3 border border-fd-border bg-fd-card">
                  <div>
                    <div className="text-sm font-semibold">{layer.name}</div>
                    <div className="text-xs text-fd-muted-foreground/80">{layer.desc}</div>
                  </div>
                  <div className="font-mono text-[10px] text-red-500/50">{layer.file}</div>
                </div>
                {i < layers.length - 1 && (
                  <div className="py-0.5 text-fd-muted-foreground/20">
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
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs text-red-500/70">{'// live'}</span>
          <h2 className="text-3xl font-semibold mt-1 mb-2 font-[family-name:var(--font-eb-garamond)]">Autonomous agent in action</h2>
          <p className="text-fd-muted-foreground mb-8 text-sm">
            Watch the agent plan, execute, and iterate on CTF challenges.
          </p>
          <TerminalDemo />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-xl mx-auto text-center border border-fd-border bg-fd-card/50 p-10">
          <Image
            src="/logo/logo-sm.png"
            alt="Z²ᴱ"
            width={48}
            height={48}
            className="mx-auto mb-4 opacity-90"
          />
          <h2 className="text-3xl font-semibold mb-3 font-[family-name:var(--font-eb-garamond)]">Ready to hunt</h2>
          <p className="text-fd-muted-foreground mb-6 text-sm">
            Clone the repo, set your API key, run your first mission.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-fd-foreground text-fd-background font-medium text-sm hover:opacity-90 transition-opacity"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-fd-border text-fd-foreground font-medium text-sm hover:bg-fd-accent transition-colors"
            >
              Architecture Docs
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-fd-border">
        <div className="mx-auto max-w-[var(--fd-layout-width)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo-sm.png"
              alt="Z²ᴱ"
              width={20}
              height={20}
            />
            <span className="font-mono text-xs text-fd-muted-foreground">
              z2e-terminal
            </span>
          </div>
          <p className="font-mono text-xs text-fd-muted-foreground/60">
            &copy; {new Date().getFullYear()} Z2E-Agent Team
          </p>
        </div>
      </footer>
    </main>
  );
}
