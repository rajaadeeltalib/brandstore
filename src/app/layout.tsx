
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import Providers from './components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'Largest Ecommerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar />
        {children}
        <Footer />
        </Providers>
        </body>
    </html>
   
  )
}
