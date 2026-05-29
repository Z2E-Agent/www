import Link from 'next/link';
import { YouTubePlayer } from '@/components/youtube-player';
import { TerminalDemo } from '@/components/terminal-demo';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-fd-background text-fd-foreground">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col justify-center py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border text-xs text-fd-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            v0.2.2
          </div>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-normal font-[family-name:var(--font-eb-garamond)] leading-tight">
            Autonomous AI agent TUI for CTF and pentesting.
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mb-10 font-[family-name:var(--font-amiri-quran)]">
            z2e-terminal is a Go + Bubble Tea terminal app that accepts natural-language missions,
            plans and executes multi-step CLI actions autonomously, observes output, reasons,
            and iterates until the objective is reached.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-3 bg-fd-foreground text-fd-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Read Documentation
            </Link>
            <Link
              href="/docs/getting-started/installation"
              className="inline-flex items-center justify-center px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-full hover:bg-fd-accent transition-colors"
            >
              Install
            </Link>
          </div>
        </div>
      </section>

      {/* Video/Preview Section */}
      <section className="pb-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <YouTubePlayer videoId="2txyf_5lsOo" title="Z2E Demo" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-foreground/20 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Agent Loop</h3>
            <p className="text-fd-muted-foreground text-sm">
              Plan &rarr; Execute &rarr; Observe &rarr; Replan cycle with SSE streaming,
              doom-loop detection, and up to 30 autonomous steps.
            </p>
          </div>

          <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-foreground/20 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="m9 10 2 2-2 2" />
                <path d="m15 14-2-2 2-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">250+ Models</h3>
            <p className="text-fd-muted-foreground text-sm">
              Route through any AI Gateway provider. Switch models at runtime via /model.
              Supports OpenAI, Anthropic, Google, DeepSeek, Meta, Mistral, xAI and more.
            </p>
          </div>

          <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-foreground/20 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">CTF System Prompt</h3>
            <p className="text-fd-muted-foreground text-sm">
              Built-in CTF-oriented persona with crypto, web exploitation, and OSINT methodology.
              Tool-first approach with evidence-based iteration.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Summary */}
      <section className="py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)] border-t border-fd-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Architecture</h2>
          <p className="text-fd-muted-foreground mb-10">
            ~4,000 LOC of Go across 5 clean layers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { name: 'TUI', desc: 'Bubble Tea', file: 'ui/' },
              { name: 'Agent', desc: 'Runtime + Tools', file: 'agent/' },
              { name: 'Gateway', desc: 'SSE Client', file: 'llm/gateway/' },
              { name: 'Executor', desc: 'Shell Runner', file: 'executor/' },
              { name: 'Config', desc: 'Env Loader', file: 'config/' },
            ].map((layer) => (
              <div key={layer.name} className="p-4 rounded-xl border border-fd-border bg-fd-card text-center">
                <div className="text-sm font-semibold text-fd-foreground">{layer.name}</div>
                <div className="text-xs text-fd-muted-foreground mt-1">{layer.desc}</div>
                <div className="text-xs text-fd-muted-foreground/60 font-mono mt-0.5">internal/{layer.file}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)] border-t border-fd-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Autonomous agent in action</h2>
          <TerminalDemo />
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
