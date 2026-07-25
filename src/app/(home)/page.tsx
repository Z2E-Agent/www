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

          {/* Install command block — BackTrack/konsole style, no mac dots */}
          <div className="w-full max-w-md mb-8">
            <div className="flex items-center border border-b-0 border-red-500/40 bg-[#1a1a1a] px-3 py-1.5">
              <span className="font-mono text-[11px] text-red-400/90 tracking-wide">root@z2e:~</span>
              <span className="mx-auto font-mono text-[10px] text-neutral-500">z2e-terminal — bash</span>
              <span className="w-2 h-2 bg-red-500/80" />
            </div>
            <code className="block px-4 py-3 border border-red-500/40 bg-[#0d0d0d] font-mono text-sm text-left overflow-x-auto text-neutral-300">
              <div>
                <span className="text-red-400 select-none">root@z2e</span>
                <span className="text-neutral-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-neutral-600"># </span>
                <span className="text-neutral-200">export </span>
                <span className="text-amber-300">AI_GATEWAY_API_KEY</span>
                <span className="text-neutral-400">=</span>
                <span className="text-green-400">&quot;...&quot;</span>
              </div>
              <div>
                <span className="text-red-400 select-none">root@z2e</span>
                <span className="text-neutral-600">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-neutral-600"># </span>
                <span className="text-neutral-200">just run</span>
                <span className="inline-block w-2 h-4 ml-1 bg-red-400/80 align-middle animate-pulse" />
              </div>
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

      {/* Stats — terminal status readout */}
      <section className="py-10 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2 px-1 font-mono text-[11px]">
            <span className="text-red-500">root@z2e:~#</span>
            <span className="text-fd-muted-foreground/70">cat config.json</span>
          </div>
          <div className="border border-fd-border bg-fd-card overflow-hidden font-mono">
            <div className="px-4 py-1.5 border-b border-fd-border bg-fd-background/50 text-[11px] text-fd-muted-foreground/60 flex items-center justify-between">
              <span>{'{'} config.json {'}'}</span>
              <span className="text-red-500/60">read-only</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-fd-border">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col px-4 py-4">
                  <span className="text-[10px] text-fd-muted-foreground/50">{stat.label}:</span>
                  <span className="text-lg text-fd-foreground tabular-nums mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="pb-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <YouTubePlayer videoId="2txyf_5lsOo" title="Z2E Demo" />
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 px-1">
            <div className="font-mono text-[11px] text-red-500 mb-1">root@z2e:~# ls capabilities/</div>
            <h2 className="text-3xl font-semibold font-[family-name:var(--font-eb-garamond)]">Features</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              Everything you need for autonomous security operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative flex flex-col p-5 border border-fd-border bg-fd-card hover:border-red-500/40 hover:bg-fd-card/60 transition-colors duration-200"
              >
                <div className="w-9 h-9 flex items-center justify-center border border-fd-border bg-fd-background text-fd-muted-foreground group-hover:text-red-500 group-hover:border-red-500/40 transition-colors mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold mb-1.5">{feature.title}</h3>
                <p className="text-sm text-fd-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture — agent loop pipeline */}
      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 px-1">
            <div className="font-mono text-[11px] text-red-500 mb-1">root@z2e:~# agent --loop</div>
            <h2 className="text-3xl font-semibold font-[family-name:var(--font-eb-garamond)]">How it works</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              One mission, five stages, zero hand-holding.
            </p>
          </div>

          {/* Pipeline flow */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-0">
            {pipeline.map((p, i) => (
              <div key={p.step} className="flex flex-col md:flex-row md:flex-1">
                <div className="group relative flex flex-1 flex-col p-4 border border-fd-border bg-fd-card hover:border-red-500/40 transition-colors md:rounded-none">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-red-500/80 tabular-nums">{p.step}</span>
                    <span className="text-sm font-semibold">{p.name}</span>
                  </div>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="flex items-center justify-center md:px-1 py-1 md:py-0 text-red-500/40 rotate-90 md:rotate-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop indicator */}
          <div className="mt-4 flex items-center gap-2 px-1 font-mono text-[11px] text-fd-muted-foreground/60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-red-500/60">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
            <span>loops until objective reached · max 30 steps · doom-loop guard at 3</span>
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 px-1">
            <div className="font-mono text-[11px] text-red-500 mb-1">root@z2e:~# ./z2e-terminal --demo</div>
            <h2 className="text-3xl font-semibold font-[family-name:var(--font-eb-garamond)]">Autonomous agent in action</h2>
            <p className="text-fd-muted-foreground mt-2 text-sm">
              Watch the agent plan, execute, and iterate on CTF challenges.
            </p>
          </div>
          <TerminalDemo />
        </div>
      </section>

      {/* CTA — terminal session end */}
      <section className="py-16 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-xl mx-auto">
          <div className="border border-red-500/40 bg-[#0d0d0d] overflow-hidden">
            <div className="px-4 py-1.5 border-b border-red-500/30 bg-[#1a1a1a] flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500/80" />
              <span className="font-mono text-[11px] text-red-400/90">root@z2e:~ — session</span>
            </div>
            <div className="p-8 text-center">
              <Image
                src="/logo/logo-sm.png"
                alt="Z²ᴱ"
                width={56}
                height={56}
                className="mx-auto mb-4 opacity-90"
              />
              <h2 className="text-2xl font-semibold mb-2 font-[family-name:var(--font-eb-garamond)]">Ready to hunt</h2>
              <p className="text-neutral-400 mb-6 text-sm font-mono">
                <span className="text-neutral-600"># </span>
                clone, set key, run first mission
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/docs/getting-started/installation"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-red-500/90 hover:bg-red-500 text-white font-medium text-sm transition-colors"
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 border border-neutral-700 text-neutral-200 font-medium text-sm hover:border-red-500/40 hover:text-red-400 transition-colors"
                >
                  Architecture Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-fd-border">
        <div className="mx-auto max-w-[var(--fd-layout-width)] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo-sm.png"
              alt="Z²ᴱ"
              width={18}
              height={18}
            />
            <span className="text-fd-muted-foreground">z2e-terminal</span>
            <span className="text-fd-muted-foreground/40">·</span>
            <span className="text-fd-muted-foreground/60">go + bubble tea</span>
          </div>
          <p className="text-fd-muted-foreground/50">
            &copy; {new Date().getFullYear()} Z2E-Agent Team
          </p>
        </div>
      </footer>
    </main>
  );
}
