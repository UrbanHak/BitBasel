import type { Metadata } from 'next';
import StoreProvider from '@/store/StoreProvider';
import '@/styles/globals.css';
import '@/styles/components.css';

export const metadata: Metadata = {
  title: "BitBasel - Your City's Crypto Art Community Hub",
  description:
    'Phenomenal marketplace combining Bitcoin Ordinals with smart contracts and dynamic NFTs. Join your city\'s crypto art community with curated exhibitions and evolving digital masterpieces.',
  keywords: 'Bitcoin Ordinals, Smart Contracts, Dynamic NFTs, Crypto Art Community, Digital Gallery, Blockchain Art, Community Hub, Art Basel',
  authors: [{ name: 'BitBasel Gallery' }],
  creator: 'BitBasel',
  publisher: 'BitBasel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "BitBasel - Your City's Crypto Art Community Hub",
    description:
      'Phenomenal marketplace combining Bitcoin Ordinals with smart contracts and dynamic NFTs. Join your city\'s crypto art community with curated exhibitions and evolving digital masterpieces.',
    siteName: 'BitBasel',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BitBasel - Bitcoin Ordinals Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BitBasel - Your City's Crypto Art Community Hub",
    description:
      'Phenomenal marketplace combining Bitcoin Ordinals with smart contracts and dynamic NFTs. Join your city\'s crypto art community with curated exhibitions and evolving digital masterpieces.',
    creator: '@bitbasel',
    images: ['/images/twitter-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <StoreProvider>
          <div id="root">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
