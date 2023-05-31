import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Haikal Blog',
  description: 'Blog created by haikal to share his knowledge with the world',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-base-200'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
