import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/store/useCartStore'

export const metadata = {
  title: 'EKiN — Premium Sneakers & Running Shoes Online | Free Shipping',
  description: 'Discover the finest collection of premium footwear. Shop running, casual, sport & formal shoes at unbeatable prices.',
  keywords: 'shoes, sneakers, footwear, running shoes, casual shoes, sport shoes',
  openGraph: {
    title: 'EKiN — Premium Shoe Shop',
    description: 'Discover the finest collection of premium footwear.',
    type: 'website',
  },
}

const montserrat = Montserrat({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${playfair.variable}`}>
        <CartProvider>
          <div className="mx-auto">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
