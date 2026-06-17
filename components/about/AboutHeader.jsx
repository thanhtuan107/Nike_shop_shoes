import Link from 'next/link'

// Dark-variant sticky header used only on the About page.
// (The shared white Header is left untouched for the rest of the site.)
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Blog', href: '/blog' },
  { label: 'Collections', href: '/collections' },
]

export default function AboutHeader() {
  return (
    <header
      className="sticky top-0 z-[60] border-b border-[#1c1c1c]"
      style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(10px)' }}
    >
      <nav className="max-w-[1280px] mx-auto px-8 py-[18px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 text-white no-underline">
          <img src="/logw.png" alt="EKiN" className="w-[50px] h-auto" />
          <span className="font-extrabold italic text-lg">EKiN</span>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-[30px] list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = label === 'About'
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-[13px] font-semibold tracking-[0.04em] uppercase no-underline transition-colors ${
                    isActive
                      ? 'text-white font-bold border-b-2 border-[#e63946] pb-[3px]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Cart -> Shop */}
        <Link
          href="/shop"
          aria-label="Cart"
          className="flex items-center justify-center w-[42px] h-[42px] border border-[#333] rounded-lg text-white no-underline hover:border-white transition-colors"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>
        </Link>
      </nav>
    </header>
  )
}
