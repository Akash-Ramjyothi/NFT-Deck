import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

// Font optimization
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'NFT Deck',
    template: '%s | NFT Deck',
  },
  description: 'Explore, track, and manage your NFT portfolio with ease.',
  keywords: ['NFT', 'crypto', 'web3', 'portfolio', 'blockchain'],
  authors: [{ name: 'NFT Deck Team' }],
  creator: 'NFT Deck',
  metadataBase: new URL('https://yourdomain.com'),

  openGraph: {
    title: 'NFT Deck',
    description: 'Explore and manage your NFT portfolio.',
    url: 'https://yourdomain.com',
    siteName: 'NFT Deck',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NFT Deck',
    description: 'Explore and manage your NFT portfolio.',
    creator: '@yourhandle',
  },

  robots: {
    index: true,
    follow: true,
  },
}

// Root Layout
export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
