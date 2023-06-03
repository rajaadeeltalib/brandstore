"use client"
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
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

<<<<<<< HEAD
    
=======
>>>>>>> d725af4bfdcdedd8d823288e2082c60442694970
      <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
<<<<<<< HEAD
=======
    
>>>>>>> d725af4bfdcdedd8d823288e2082c60442694970
   
  )
}
