'use client';

import { useEffect, useId, useState } from 'react';

// Dark-only site: theme is hardcoded to match. mermaid is dynamically
// imported so it stays out of the initial bundle and off the server.
export function Mermaid({ chart }: { chart: string }) {
  const id = useId();
  const [svg, setSvg] = useState('');

  useEffect(() => {
    let active = true;
    void (async () => {
      const { default: mermaid } = await import('mermaid');
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily: 'inherit',
        // Terminal palette: near-black nodes, green accent, subtle borders.
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: '#171717',
          primaryBorderColor: '#2d2d2d',
          primaryTextColor: '#e5e5e5',
          secondaryColor: '#1a1a1a',
          tertiaryColor: '#0d0d0d',
          lineColor: '#22c55e',
          edgeLabelBackground: '#0d0d0d',
          clusterBkg: '#0d0d0d',
          clusterBorder: '#2d2d2d',
          fontSize: '14px',
        },
        flowchart: { curve: 'basis', padding: 16, nodeSpacing: 44, rankSpacing: 52 },
      });
      const { svg } = await mermaid.render(`m${id.replace(/[^a-z]/gi, '')}`, chart);
      if (active) setSvg(svg);
    })();
    return () => {
      active = false;
    };
  }, [chart, id]);

  return (
    <div
      className="my-4 flex justify-center rounded-lg border border-fd-border bg-fd-card/40 p-4 [&_.edgeLabel]:!bg-transparent [&_.node_rect]:!rounded-lg [&_svg]:max-w-full"
      // eslint-disable-next-line @next/next/no-danger -- mermaid output is trusted (authored in-repo)
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
