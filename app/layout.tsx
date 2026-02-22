import type { Metadata } from 'next'
// FONT OPTIONS - Try these modern, beautiful fonts:

// Option 1: Inter (Clean, modern, professional)
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })

// Option 2: Montserrat (Elegant, geometric, great for headers)
// import { Montserrat } from 'next/font/google'
// const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

// Option 3: Raleway (Sophisticated, modern, good readability)
// import { Raleway } from 'next/font/google'
// const raleway = Raleway({ subsets: ['latin'], display: 'swap' })

// Option 4: Outfit (Sleek, rounded, friendly yet professional)
// import { Outfit } from 'next/font/google'
// const outfit = Outfit({ subsets: ['latin'], display: 'swap' })

import './globals.css'

export const metadata: Metadata = {
  title: 'Mrunal Hole | AI Engineer & Data Scientist',
  description: 'Portfolio of Mrunal Hole - Computer Science Graduate Student at The Ohio State University specializing in AI, ML, and Data Engineering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      {/* Change to: ${montserrat.className} or ${raleway.className} or ${outfit.className} */}
        {children}
      </body>
    </html>
  )
}