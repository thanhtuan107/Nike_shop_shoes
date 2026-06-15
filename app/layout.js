import { Montserrat } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/store/useCartStore'

export const metadata = {
  title: 'EKiN — Premium Shoe Shop',
  description: 'Discover the finest collection of premium footwear. Shop running, casual, sport & formal shoes at unbeatable prices.',
  keywords: 'shoes, sneakers, footwear, running shoes, casual shoes, sport shoes',
  openGraph: {
    title: 'EKiN — Premium Shoe Shop',
    description: 'Discover the finest collection of premium footwear.',
    type: 'website',
  },
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CartProvider>
          <div className="mx-auto">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
