'use client'
import { useCart } from '@/store/useCartStore'
import { getProductImage } from '@/lib/utils'
import products from '@/data/products'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

function findProduct(id) {
  return products.find(p => p.id === id)
}

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, incQty, decQty, cartCount } = useCart()

  const cartItems = cart.map(c => {
    const p = findProduct(c.id)
    return { ...p, qty: c.qty, image: getProductImage(p.id) }
  }).filter(Boolean)

  const subtotal = cartItems.reduce((n, item) => n + item.price * item.qty, 0)

  return (
    <>
      {/* Backdrop */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 bg-[rgba(15,15,15,0.45)] z-[90]"
        />
      )}

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[min(420px,92vw)] bg-white z-[100] flex flex-col shadow-[-16px_0_48px_rgba(0,0,0,0.16)] transition-transform duration-[380ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-[22px] border-b border-[#f0f0f0]">
          <div className="text-lg font-bold text-[#0F0F0F]">
            Cart{' '}
            <span className="text-[#e63946]">({cartCount})</span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="border-none bg-transparent cursor-pointer text-2xl text-gray-500 leading-none"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-[60px] px-3 text-gray-400">
              <div className="text-[15px] text-[#0F0F0F] mb-1.5 font-semibold">Your cart is empty</div>
              <div className="text-[13px]">Add a few pairs to get started.</div>
            </div>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onInc={() => incQty(item.id)}
                onDec={() => decQty(item.id)}
              />
            ))
          )}
        </div>

        {/* Summary */}
        {cartItems.length > 0 && <CartSummary subtotal={subtotal} />}
      </aside>
    </>
  )
}
