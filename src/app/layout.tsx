import { Metadata } from 'next'
import { Inter, Heebo } from 'next/font/google'
import './globals.css'
import React from 'react'

// Define fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
})

// Define metadata
export const metadata: Metadata = {
  title: 'חנות בגדים גמא | בגדים איכותיים בסגנון מודרני',
  description: 'אנחנו חנות בגדים מוביל בתחום הקמעונאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
  keywords: 'חנות בגדים, בגדים, אופנה, קמעונאות, בגדים איכותיים, חנות בגדים גמא',
  authors: [{ name: 'חנות בגדים גמא' }],
  creator: 'חנות בגדים גמא',
  publisher: 'חנות בגדים גמא',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://www.clothingstoregama.com',
    title: 'חנות בגדים גמא | בגדים איכותיים בסגנון מודרני',
    description: 'אנחנו חנות בגדים מוביל בתחום הקמעונאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    siteName: 'חנות בגדים גמא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
        width: 1200,
        height: 630,
        alt: 'חנות בגדים גמא',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'חנות בגדים גמא | בגדים איכותיים בסגנון מודרני',
    description: 'אנחנו חנות בגדים מוביל בתחום הקמעונאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
    images: ['https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.clothingstoregama.com',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <div id="root-layout" className="flex flex-col min-h-screen">
          {/* Main content */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Skip to content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-primary focus:text-white focus:z-50"
          >
            דלג לתוכן העיקרי
          </a>
        </div>
        
        {/* Global styles for neumorphic and glassmorphism effects */}
        <style jsx global>{`
          :root {
            --primary-color: #45B7D1;
            --secondary-color: #96CEB4;
            --background-color: #f0f4f8;
            --text-color: #2d3748;
            --shadow-color: rgba(0, 0, 0, 0.1);
            --highlight-color: rgba(255, 255, 255, 0.8);
            --glass-bg: rgba(255, 255, 255, 0.25);
            --glass-border: rgba(255, 255, 255, 0.18);
            --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            --neu-shadow-light: 5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff;
            --neu-shadow-pressed: inset 3px 3px 6px #d1d9e6, inset -3px -3px 6px #ffffff;
            --border-radius: 1.25rem;
            --transition-speed: 0.3s;
          }

          /* Neumorphic styles */
          .neu-element {
            background: var(--background-color);
            border-radius: var(--border-radius);
            box-shadow: var(--neu-shadow-light);
            transition: all var(--transition-speed) ease;
          }

          .neu-element:hover {
            transform: translateY(-2px);
          }

          .neu-element:active {
            box-shadow: var(--neu-shadow-pressed);
            transform: translateY(0);
          }

          /* Glassmorphism styles */
          .glass-element {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--glass-border);
            border-radius: var(--border-radius);
            box-shadow: var(--glass-shadow);
          }

          /* RTL specific adjustments */
          body {
            font-family: var(--font-heebo), sans-serif;
            text-align: right;
          }

          /* Ensure proper RTL support for all elements */
          input, textarea, select {
            text-align: right;
          }
        `}</style>
      </body>
    </html>
  )
}