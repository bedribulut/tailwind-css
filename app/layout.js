import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'ZARA A.Ş.',
  description: 'ZARA Taahhüt İnşaat A.Ş.',
}

const inter = Inter({ subsets: ['latin'], weight: ['400']})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className='container m-auto bg-black text-grayBedri'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
