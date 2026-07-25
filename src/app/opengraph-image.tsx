import { ImageResponse } from 'next/og';
import fs from 'node:fs';
import path from 'node:path';

export const alt = 'Z²ᴱ-Agent';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoPath = path.join(process.cwd(), 'public/logo/logo.png');
  const logoData = fs.readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a0d0d 50%, #0f0f0f 100%)',
          padding: '60px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background decoration — red radial glows */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 20%, rgba(239,68,68,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(239,68,68,0.08) 0%, transparent 50%)',
            display: 'flex',
          }}
        />

        {/* Header: brand + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src={logoSrc}
              alt="Z²ᴱ"
              width={64}
              height={64}
              style={{ borderRadius: '12px' }}
            />
            <span style={{ fontSize: '36px', color: '#ffffff', fontWeight: 700 }}>
              Z²ᴱ-Agent
            </span>
          </div>
          <span
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.5)',
              fontWeight: 500,
              maxWidth: '700px',
            }}
          >
            Autonomous AI agent TUI for CTF and pentesting.
          </span>
        </div>

        {/* Footer: section + title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span
            style={{
              fontSize: '24px',
              color: 'rgba(239,68,68,0.9)',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Plan &middot; Execute &middot; Observe &middot; Iterate
          </span>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              maxWidth: '1000px',
            }}
          >
            Multi-step CLI missions, autonomous until objective reached.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
