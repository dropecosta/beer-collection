import Footer from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar';
import type { Metadata } from 'next';
import { BeerContextProvider } from './context/context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beer Gallery',
  description: 'Choose you best beer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <BeerContextProvider>
        <Navbar />
        {children}
        <Footer />
      </BeerContextProvider>
      </body>
    </html>
  )
}
