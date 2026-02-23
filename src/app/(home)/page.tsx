import Link from 'next/link';
import { YouTubePlayer } from '@/components/youtube-player';
import { TerminalDemo } from '@/components/terminal-demo';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-fd-background text-fd-foreground">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col justify-center py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-normal font-[family-name:var(--font-eb-garamond)] leading-tight">
            Redefining pentesting through autonomous intelligence.
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mb-10 font-[family-name:var(--font-amiri-quran)]">
            The fully autonomous penetration testing tool that leverages advanced LLMs to identify vulnerabilities, generate reports, and streamline your security assessments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-3 bg-fd-foreground text-fd-background font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Read Documentation
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-fd-border text-fd-foreground font-medium rounded-full hover:bg-fd-accent transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Video/Preview Section */}
      <section className="pb-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="max-w-4xl mx-auto">
          <YouTubePlayer videoId="HAi5yNHPB6U" title="Z2E Demo" />
        </div>
      </section>

      <section className="py-12 px-4 mx-auto w-full max-w-[var(--fd-layout-width)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-foreground/20 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Autonomous CTF Solver</h3>
            <p className="text-fd-muted-foreground">
              A fully autonomous "vibe hacking" engine that solves CTF challenges across OSINT, Crypto, Web Exploitation, and Forensics without manual intervention.
            </p>
          </div>

          <div className="flex flex-col p-6 rounded-2xl border border-fd-border bg-fd-card hover:border-fd-foreground/20 transition-colors">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <path d="m9 10 2 2-2 2" />
                <path d="m15 14-2-2 2-2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Model Context Protocol</h3>
            <p className="text-fd-muted-foreground">
              Host a powerful MCP server for Claude Desktop, enabling 100+ specialized tools to solve CTF challenges directly within your workspace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 mx-auto w-full max-w-[var(--fd-layout-width)] border-t border-fd-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">No GUI, with one Terminal!</h2>
          <TerminalDemo />
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-fd-border">
        <div className="mx-auto max-w-[var(--fd-layout-width)] text-center text-fd-muted-foreground text-sm">
          © {new Date().getFullYear()} Z2E-Agent Team. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
