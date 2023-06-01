import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Haikal Blog',
  description: 'Blog created by haikal to share his knowledge with the world',
  metadataBase: new URL('https://farhienza-haikal.my.id'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'id-ID': '/id-ID',
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-base-200'>
        <Script strategy="lazyOnload" src='https://www.googletagmanager.com/gtag/js?id=G-K9JFYBBM5Z'
        />
        <Script id='google-analyics-script' strategy="lazyOnload  ">
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
