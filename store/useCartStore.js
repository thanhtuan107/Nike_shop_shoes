'use client'
import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])       // { id: number, qty: number }[]
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = useCallback((id) => {
    setCart(prev => {
      const ex = prev.find(c => c.id === id)
      return ex
        ? prev.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c)
        : [...prev, { id, qty: 1 }]
    })
  }, [])

  const incQty = useCallback((id) => {
    setCart(prev => prev.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c))
  }, [])

  const decQty = useCallback((id) => {
    setCart(prev =>
      prev
        .map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c)
        .filter(c => c.qty > 0)
    )
  }, [])

  const cartCount = cart.reduce((n, c) => n + c.qty, 0)

  return (
    <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addToCart, incQty, decQty, cartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
