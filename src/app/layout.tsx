import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ModernDaySamurai - Baptiste Pierre',
  description: 'Software engineer by formation, video editor by passion and full-time creator by destiny',
  keywords: ['Baptiste Pierre', 'video editing', 'software engineer', 'portfolio'],
  authors: [{ name: 'Baptiste Pierre' }],
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