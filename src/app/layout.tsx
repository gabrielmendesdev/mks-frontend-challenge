import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import { ReactQueryClientProvider } from './components/context/ReactQueryClientProvide'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Development',
  description: 'MKS Front-End Challenge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
      <html lang='pt-br'>
        <body className={inter.className}>
          {children}
        </body>
      </html>
  )
}
