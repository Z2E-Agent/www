import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/logo/logo-sm.png"
            alt="Z²ᴱ logo"
            width={24}
            height={24}
            className="rounded-md"
            priority
          />
          <span className="font-[family-name:var(--font-eb-garamond)] text-lg font-medium tracking-tight">
            Z²<span className="align-super text-xs">ᴱ</span>
          </span>
        </>
      ),
      transparentMode: 'none',
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
