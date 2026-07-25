import { generate as DefaultImage } from 'fumadocs-ui/og';
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
      <DefaultImage
        title="Z²ᴱ-Agent"
        description="Autonomous AI agent TUI for CTF and pentesting."
        site="z2e.team"
        primaryColor="#ef4444"
        primaryTextColor="#ef4444"
        icon={
          <img
            src={logoSrc}
            alt="Z²ᴱ"
            width={96}
            height={96}
            style={{ borderRadius: 12 }}
          />
        }
      />
    ),
    { ...size },
  );
}
