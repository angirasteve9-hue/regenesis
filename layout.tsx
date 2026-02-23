import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'ReGenesis Earth Coffins | Return to the Earth. Renew the Future.',
  description:
    'African-inspired biodegradable coffins designed for regenerative burial, soil renewal, and legacy-centered cultural respect.',
  keywords: [
    'African regenerative burial',
    'biodegradable coffin',
    'sustainable burial Africa',
    'soil regeneration',
    'memorial forest',
    'eco funeral alternative'
  ],
  openGraph: {
    title: 'ReGenesis Earth Coffins',
    description:
      'A life-centered burial innovation designed to restore land, support agriculture, and honor ancestral legacy.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
