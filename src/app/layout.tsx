import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter, EB_Garamond, Amiri_Quran } from 'next/font/google';
import { Icon } from '@iconify/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://z2e.team'),
  title: {
    template: '%s',
    default: 'Z2E-Agent-Agent - AI-Powered Penetration Testing',
  },
  description: 'Z2E-Agent-Agent is an AI-powered penetration testing framework that automates security assessments from reconnaissance to exploitation.',
  openGraph: {
    title: 'Z2E-Agent - AI-Powered Penetration Testing',
    description: 'Z2E-Agent is an AI-powered penetration testing framework that automates security assessments from reconnaissance to exploitation.',
    siteName: 'Z2E-Agent',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Z2E-Agent - AI-Powered Penetration Testing',
    description: 'Z2E-Agent is an AI-powered penetration testing framework that automates security assessments from reconnaissance to exploitation.',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
});

const amiriQuran = Amiri_Quran({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-amiri-quran',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} ${ebGaramond.variable} ${amiriQuran.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            hotKey: [
              {
                display: <Icon icon="simple-icons:vim" className="size-6" />,
                key: '/',
              },
            ],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
