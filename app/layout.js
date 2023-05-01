import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'ZARA A.Ş.',
  description: 'ZARA Taahhüt İnşaat A.Ş.',
  icons: {
    icon: '/app/favicon.ico',
  },
}

const inter = Inter({ subsets: ['latin'], weight: ['400']})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className='container flex flex-col min-h-screen m-auto bg-black text-grayBedri'>
        <NavBar />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
