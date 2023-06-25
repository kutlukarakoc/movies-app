import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from './providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className='main text-secondary'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
