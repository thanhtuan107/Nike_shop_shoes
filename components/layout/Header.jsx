'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { useCart } from '@/store/useCartStore'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Testimonial', href: '/testimonial' },
  { label: 'Collections', href: '/collections' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { cartCount, setCartOpen } = useCart()

  const focusSearch = () => {
    const el = document.getElementById('shopSearchTop') || document.getElementById('shopSearchSide')
    if (el) el.focus()
  }

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
      <nav className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-[#0F0F0F] no-underline">
          <img src="/logo_Nike_black.png" className="w-14" alt="EKiN" />
          <span className="font-medium text-lg tracking-tight">EKiN</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors no-underline ${
                    isActive
                      ? 'text-[#e8b44b] border-b-2 border-[#e8b44b] pb-0.5'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <button
            onClick={focusSearch}
            className="hover:text-black transition-colors p-0 border-none bg-transparent cursor-pointer text-inherit"
            aria-label="Search"
          >
            <FiSearch size={20} />
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className="hover:text-black transition-colors relative p-0 border-none bg-transparent cursor-pointer text-inherit"
            aria-label="Cart"
          >
            <FiShoppingCart size={20} />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2.5 bg-[#e63946] text-white text-[10px] font-semibold rounded-full flex items-center justify-center"
                style={{ minWidth: 16, height: 16, padding: '0 3px' }}
              >
                {cartCount}
              </span>
            )}
          </button>

          <button className="hover:text-black transition-colors p-0 border-none bg-transparent cursor-pointer text-inherit" aria-label="Account">
            <FiUser size={20} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4 list-none m-0 p-0">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium no-underline ${
                    pathname === href ? 'text-[#e8b44b]' : 'text-gray-600'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-6 mt-4 text-gray-700">
            <button onClick={focusSearch} className="border-none bg-transparent cursor-pointer text-inherit"><FiSearch size={20} /></button>
            <button onClick={() => setCartOpen(true)} className="border-none bg-transparent cursor-pointer text-inherit relative">
              <FiShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e63946] text-white text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="border-none bg-transparent cursor-pointer text-inherit"><FiUser size={20} /></button>
          </div>
        </div>
      )}
    </header>
  )
}
