import Footer from '@/commponents/footer/footer'
import Navbar from '@/commponents/navbar/navbar'
import { ThemeContextProvider } from '@/contex/ThemeContext'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Blog',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
       
        <div className='container'>
          <div className='wrapper'>
            <Navbar />
             {children}
             <Footer />
          </div>
          
        </div>
       </ThemeProvider>
        </ThemeContextProvider>
        
        </body>
    </html>
  )
}
