import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Haikal Blog',
  description: 'Blog created by haikal to share his knowledge with the world',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-base-200'>
        <Script strategy="afterInteractive" src='https://www.googletagmanager.com/gtag/js?id=G-K9JFYBBM5Z'
        />
        <Script id='google-analyics-script' strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
           gtag('config', 'G-K9JFYBBM5Z');`}
           </Script>        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
