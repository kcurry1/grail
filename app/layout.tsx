import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Grail - The Card Marketplace That Puts Sellers First',
  description: 'Find your grail. The trading card marketplace with the lowest fees, instant support, and tools built by collectors, for collectors.',
  keywords: ['trading cards', 'marketplace', 'sports cards', 'pokemon cards', 'card selling', 'low fees'],
  openGraph: {
    title: 'Grail - The Card Marketplace That Puts Sellers First',
    description: 'Find your grail. The trading card marketplace with the lowest fees, instant support, and tools built by collectors, for collectors.',
    siteName: 'Grail',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grail - The Card Marketplace That Puts Sellers First',
    description: 'Find your grail. The trading card marketplace with the lowest fees, instant support, and tools built by collectors, for collectors.',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
