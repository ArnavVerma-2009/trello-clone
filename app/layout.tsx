import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConifg } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default : siteConifg.name,
    template : `%s | ${siteConifg.name}`
  },
  description: siteConifg.description,
  icons: [
    {
     url :"/logo.svg", 
     href :"/logo.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
