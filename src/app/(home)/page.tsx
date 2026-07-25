import Link from 'next/link';
import Image from 'next/image';
import { YouTubePlayer } from '@/components/youtube-player';
import { TerminalDemo } from '@/components/terminal-demo';

const features = [
  {
    title: 'Agent Loop',
    desc: 'Plan, execute, observe, replan. SSE streaming, doom-loop detection, up to 30 autonomous steps per mission.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: '250+ Models',
    desc: 'Route through any AI Gateway provider. Switch at runtime via /model. OpenAI, Anthropic, Google, DeepSeek, Meta, Mistral, xAI.',
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const pipeline = [
  { step: '01', name: 'Receive', desc: 'Natural-language mission from operator.' },
  { step: '02', name: 'Plan', desc: 'Agent reasons, picks tools, sequences steps.' },
  { step: '03', name: 'Execute', desc: 'Runs shell commands, captures output live.' },
  { step: '04', name: 'Observe', desc: 'Parses results, validates, learns from output.' },
  { step: '05', name: 'Iterate', desc: 'Replans until objective reached or cap hit.' },
];

const stats = [
  { label: 'Go LOC', value: '~4k' },
  { label: 'Models', value: '250+' },
  { label: 'Max Steps', value: '30' },
  { label: 'Retries', value: '2' },
  { label: 'Output Cap', value: '64KB' },
  { label: 'Timeout', value: '60s' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-fd-background text-fd-foreground">
      {/* Hero */}
      <section className="relative flex flex-1 flex-col justify-center py-24 px-4 mx-auto w-full max-w-[var(--fd-layout-width)] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(50% 40% at 50% 30%, rgba(239,68,68,0.10), transparent 70%)',
          }}
        />

        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Image
            src="/logo/logo-nobg-md.png"
            alt="Z²ᴱ-Agent"
            width={768}
            height={1130}
            priority
            sizes="(max-width: 640px) 50vw, 240px"
            className="w-[160px] sm:w-[200px] lg:w-[220px] h-auto mb-8 select-none animate-[float_6s_ease-in-out_infinite] [filter:drop-shadow(0_15px_40px_rgba(239,68,68,0.20))]"
          />

          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border bg-fd-card text-xs text-fd-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
            </span>
            v0.2.4 &middot; Go + Bubble Tea
          </div>

          <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-normal font-[family-name:var(--font-eb-garamond)] leading-[1.08] tracking-tight">
            Autonomous AI agent TUI{' '}
            <span className="text-fd-muted-foreground">for CTF and pentesting.</span>
          </h1>
          <p className="text-base md:text-lg text-fd-muted-foreground max-w-2xl mb-10 leading-relaxed">
            z2e-terminal accepts natural-language missions, plans and executes multi-step CLI actions
            autonomously, observes output, reasons, and iterates until the objective is reached.
          </p>

          {/* Install command */}
          <div className="w-full max-w-lg mb-10">
            <code className="flex items-center gap-2 px-4 py-3 rounded-md border border-fd-border bg-fd-card font-mono text-sm overflow-x-auto">
              <span className="text-red-400 select-none shrink-0">$</span>
              <span className="text-fd-foreground shrink-0">export </span>
              <span className="text-amber-300">AI_GATEWAY_API_KEY</span>
              <span className="text-fd-muted-foreground">=</span>
              <span className="text-green-400">&quot;...&quot;</span>
              <span className="text-fd-muted-foreground/40 px-1">&amp;&amp;</span>
              <span className="text-fd-foreground">just run</span>
            </code>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-fd-foreground text-fd-background font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              Read Documentation
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-fd-border text-fd-foreground font-medium text-sm rounded-md hover:bg-fd-accent transition-colors"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-fd-border text-fd-foreground font-medium text-sm rounded-md hover:bg-fd-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-px overflow-hidden rounded-lg border border-fd-border bg-fd-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-6 bg-fd-background">
              <div className="text-2xl font-semibold tabular-nums">{stat.value}</div>
              <div className="text-xs text-fd-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="pb-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <YouTubePlayer videoId="2txyf_5lsOo" title="Z2E Demo" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold font-[family-name:var(--font-eb-garamond)]">Features</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              Everything you need for autonomous security operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col p-6 rounded-lg border border-fd-border bg-fd-card hover:border-red-500/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-red-500/10 text-red-500 mb-4 group-hover:bg-red-500/15 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — pipeline */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold font-[family-name:var(--font-eb-garamond)]">How it works</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              One mission, five stages, zero hand-holding.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {pipeline.map((p, i) => (
              <div key={p.step} className="flex flex-col md:flex-row md:flex-1 md:items-stretch gap-3">
                <div className="flex flex-1 flex-col p-5 rounded-lg border border-fd-border bg-fd-card">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-xs text-red-500 tabular-nums">{p.step}</span>
                    <span className="text-sm font-semibold">{p.name}</span>
                  </div>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="hidden md:flex items-center text-fd-muted-foreground/30">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-fd-muted-foreground/70 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-red-500/60 shrink-0">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
            Loops until objective reached &middot; max 30 steps &middot; doom-loop guard at 3
          </p>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold font-[family-name:var(--font-eb-garamond)]">Autonomous agent in action</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              Watch the agent plan, execute, and iterate on CTF challenges.
            </p>
          </div>
          <TerminalDemo />
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
            <span className="text-sm font-medium text-fd-foreground">Z²ᴱ-Agent</span>
          </div>
          <p className="text-xs text-fd-muted-foreground">
            &copy; {new Date().getFullYear()} Z2E-Agent Team
          </p>
        </div>
      </footer>
    </main>
  );
}
