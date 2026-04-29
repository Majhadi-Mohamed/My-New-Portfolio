import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Majhadi Mohamed — Backend Developer',
  description:
    'Portfolio of Majhadi Mohamed, a backend developer specializing in Node.js, Express, Laravel, MongoDB, and REST APIs. ' +
    'Building modern, scalable web applications.',
  keywords: 'backend developer, Node.js, Express, Laravel, MongoDB, REST API, full-stack, Agadir, Morocco, portfolio',
  authors: [{ name: 'Majhadi Mohamed', url: 'https://github.com/Majhadi-Mohamed' }],
  openGraph: {
    title: 'Majhadi Mohamed — Backend Developer',
    description: 'Portfolio of Majhadi Mohamed, backend developer.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
