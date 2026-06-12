"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'

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

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="w-full px-8 pt-5 pb-5 flex items-center justify-between mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="./logo_Nike_black.png" className="w-16" alt="" />
          <h1 className='font-medium'>EKiN</h1>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors ${isActive
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
          <button className="hover:text-black transition-colors" aria-label="Search">
            <FiSearch size={20} />
          </button>
          <Link href="/cart" className="hover:text-black transition-colors relative" aria-label="Cart">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#e63946] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </Link>
          <Link href="/account" className="hover:text-black transition-colors" aria-label="Account">
            <FiUser size={20} />
          </Link>
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

      {/* Mobile menu — nằm ngoài <nav> để tránh lồng block */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium ${pathname === href ? 'text-[#e8b44b]' : 'text-gray-600'
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-6 mt-4 text-gray-700">
            <FiSearch size={20} />
            <Link href="/cart"><FiShoppingCart size={20} /></Link>
            <Link href="/account"><FiUser size={20} /></Link>
          </div>
        </div>
      )}
    </header>
  )
}