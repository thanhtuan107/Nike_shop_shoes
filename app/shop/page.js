'use client'
import { useState, useRef } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductFilter from '@/components/shop/ProductFilter'
import ProductGrid from '@/components/shop/ProductGrid'
import CartDrawer from '@/components/cart/CartDrawer'
import products from '@/data/products'
import { useCart } from '@/store/useCartStore'
import { getProductImage } from '@/lib/utils'

// ── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES = ['All', 'Running', 'Lifestyle', 'Basketball', 'Training', 'Casual', 'Sport', 'Formal']

const PRICE_OPTIONS = [
  { key: 'all',     label: 'All prices',    test: () => true },
  { key: 'u100',    label: 'Under $100',    test: p => p.price < 100 },
  { key: '100-180', label: '$100 – $180',   test: p => p.price >= 100 && p.price <= 180 },
  { key: 'o180',    label: 'Over $180',     test: p => p.price > 180 },
]

// Enrich data with varied images
const PRODUCTS = products.map(p => ({ ...p, image: getProductImage(p.id) }))

// ── Filter + sort logic ───────────────────────────────────────────────────────

function applyFilters(activeTab, query, priceRange, sort) {
  const q = query.trim().toLowerCase()
  const priceTest = (PRICE_OPTIONS.find(p => p.key === priceRange) || PRICE_OPTIONS[0]).test

  let list = PRODUCTS.filter(p =>
    (activeTab === 'All' || p.category === activeTab) &&
    priceTest(p) &&
    (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  )

  list = [...list]
  if (sort === 'price-asc')  list.sort((a, b) => a.price - b.price)
  else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
  else if (sort === 'rating')     list.sort((a, b) => b.rating - a.rating)
  else if (sort === 'newest')     list.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0) || b.id - a.id)
  else {
    const rank = p => (p.badge === 'Hot' || p.badge === 'Best Seller' ? 0 : 1)
    list.sort((a, b) => rank(a) - rank(b) || b.rating - a.rating)
  }
  return list
}

// ── Shop Hero ─────────────────────────────────────────────────────────────────

function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] border-b border-[#161616]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/running_shop_carousel.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(130% 110% at 50% 0%, rgba(0,0,0,0.35) 38%, rgba(0,0,0,0.75) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1280px] mx-auto px-8 pt-[100px] pb-[84px]">
        <div className="text-xs tracking-[0.2em] uppercase text-white/55 mb-5">
          <span>Home</span>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white font-semibold">Shop</span>
        </div>

        <h1 className="font-extrabold text-[clamp(48px,7vw,96px)] leading-[0.95] text-white mt-0 mb-5 drop-shadow-[0_10px_50px_rgba(0,0,0,0.45)]">
          Shop All{' '}
          <span className="text-white">Sneakers</span>
        </h1>

        <p className="text-base leading-relaxed text-white/70 max-w-[440px] mt-0 mb-0">
          Authentic Nike collection — running, lifestyle, basketball &amp; training. Free shipping on orders over $150.
        </p>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ShopPage() {
  const [layout]                  = useState('sidebar')
  const [activeTab, setActiveTab] = useState('All')
  const [query, setQuery]         = useState('')
  const [sort, setSort]           = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [visible, setVisible]     = useState(9)
  const [favorites, setFavorites] = useState([])
  const [hoveredId, setHoveredId] = useState(null)
  const [toast, setToast]         = useState('')
  const toastTimer                = useRef(null)

  const { addToCart } = useCart()

  const filtered        = applyFilters(activeTab, query, priceRange, sort)
  const visibleProducts = filtered.slice(0, visible)

  const handleTabChange   = (cat) => { setActiveTab(cat); setVisible(9) }
  const handlePriceChange = (key) => { setPriceRange(key); setVisible(9) }
  const handleQueryChange = (val) => { setQuery(val); setVisible(9) }

  const handleAddToCart = (product) => {
    addToCart(product.id)
    setToast(`Added "${product.name}" to cart`)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2200)
  }

  const toggleFav = (id) =>
    setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ShopHero />

      {/* Topbar filter */}
      {layout === 'topbar' && (
        <ProductFilter
          variant="topbar"
          categories={CATEGORIES}
          activeTab={activeTab}
          query={query}
          sort={sort}
          onTabChange={handleTabChange}
          onQueryChange={handleQueryChange}
          onSortChange={setSort}
        />
      )}

      {/* Main content */}
      <section className="max-w-[1280px] mx-auto px-8 pt-7 pb-2 flex gap-9 items-start">
        {/* Sidebar filter */}
        {layout === 'sidebar' && (
          <ProductFilter
            variant="sidebar"
            categories={CATEGORIES}
            priceOptions={PRICE_OPTIONS}
            products={PRODUCTS}
            activeTab={activeTab}
            priceRange={priceRange}
            query={query}
            sort={sort}
            onTabChange={handleTabChange}
            onPriceChange={handlePriceChange}
            onQueryChange={handleQueryChange}
            onSortChange={setSort}
          />
        )}

        {/* Product grid */}
        <ProductGrid
          products={visibleProducts}
          hoveredId={hoveredId}
          favorites={favorites}
          layout={layout}
          activeTab={activeTab}
          resultCount={filtered.length}
          shownCount={visibleProducts.length}
          canLoadMore={visible < filtered.length}
          onHover={setHoveredId}
          onLeave={() => setHoveredId(null)}
          onFav={toggleFav}
          onAdd={handleAddToCart}
          onLoadMore={() => setVisible(v => v + 6)}
        />
      </section>

      <div className="h-10" />
      <Footer />

      {/* Cart drawer (global, uses context) */}
      <CartDrawer />

      {/* Toast */}
      {toast && (
        <div className="fixed left-1/2 bottom-7 -translate-x-1/2 z-[120] bg-[#0F0F0F] text-white text-[13px] font-medium px-[22px] py-3.5 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex items-center gap-2.5 whitespace-nowrap">
          <span className="text-[#e63946] text-base">✓</span>
          {toast}
        </div>
      )}
    </div>
  )
}
