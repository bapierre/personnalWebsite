import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vanpelt\'s ventures',
  description: 'Traveler by desire, software engineer by choice, entrepreneur by passion',
  keywords: ['Baptiste Pierre', 'Vanpelt', 'VanpeltVenures', 'portfolio', 'entrepreneur'],
  authors: [{ name: 'Baptiste Pierre' }],
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}