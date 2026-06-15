'use client'
import { FiSearch, FiSliders } from 'react-icons/fi'

const SORT_OPTIONS = [
  { value: 'featured',   label: 'Featured' },
  { value: 'newest',     label: 'Newest' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'rating',     label: 'Top Rated' },
]

// ── Topbar ─────────────────────────────────────────────────────────────────────

function Topbar({ categories, activeTab, query, sort, onTabChange, onQueryChange, onSortChange }) {
  return (
    <div className="sticky top-[69px] z-40 bg-white/95 backdrop-blur-md border-b border-[#f0f0f0]">
      <div className="max-w-[1280px] mx-auto px-8 py-3.5 flex items-center gap-4 flex-wrap">
        {/* Category tabs */}
        <div className="flex items-center gap-[18px] flex-wrap flex-1 min-w-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onTabChange(cat)}
              className={`border-none bg-transparent cursor-pointer text-sm font-semibold pb-1 transition-all duration-200 border-b-2 ${
                cat === activeTab
                  ? 'text-[#e8b44b] border-[#e8b44b]'
                  : 'text-gray-500 border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search + sort */}
        <div className="flex items-center gap-2.5 ml-auto">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3.5 py-2 min-w-[180px]">
            <FiSearch size={15} className="text-gray-400" />
            <input
              id="shopSearchTop"
              type="text"
              value={query}
              onChange={e => onQueryChange(e.target.value)}
              placeholder="Search shoes..."
              className="border-none bg-transparent text-[13px] text-[#0F0F0F] w-full outline-none"
            />
          </div>

          <select
            value={sort}
            onChange={e => onSortChange(e.target.value)}
            className="border border-gray-200 bg-white rounded-full px-3.5 py-[9px] text-[13px] text-gray-700 cursor-pointer outline-none"
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}

// ── Sidebar ────────────────────────────────────────────────────────────────────

function Sidebar({ categories, priceOptions, activeTab, priceRange, query, sort, products, onTabChange, onPriceChange, onQueryChange, onSortChange }) {
  const rowClass = (active) =>
    `flex items-center justify-between border-none cursor-pointer text-sm px-2.5 py-2 rounded-lg text-left w-full ${
      active ? 'bg-[#fef2f3] text-[#e63946] font-semibold' : 'bg-transparent text-gray-600 font-medium'
    }`

  const priceClass = (active) =>
    `border-none cursor-pointer text-sm px-2.5 py-2 rounded-lg text-left w-full ${
      active ? 'bg-[#fef2f3] text-[#e63946] font-semibold' : 'bg-transparent text-gray-600 font-medium'
    }`

  return (
    <aside className="sticky top-[92px] w-60 flex-shrink-0 self-start">
      {/* Title */}
      <div className="flex items-center gap-2 text-[13px] font-bold tracking-[0.08em] uppercase text-[#0F0F0F] mb-[18px]">
        <FiSliders size={15} className="text-[#e63946]" />
        Filters
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-[10px] px-3 py-[9px] mb-6">
        <FiSearch size={15} className="text-gray-400" />
        <input
          id="shopSearchSide"
          type="text"
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          placeholder="Search shoes..."
          className="border-none bg-transparent text-[13px] text-[#0F0F0F] w-full outline-none"
        />
      </div>

      {/* Categories */}
      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.06em] mb-2.5">Category</div>
      <div className="flex flex-col gap-0.5 mb-[26px]">
        {categories.map(cat => {
          const count = cat === 'All'
            ? products.length
            : products.filter(p => p.category === cat).length
          const active = cat === activeTab
          return (
            <button key={cat} onClick={() => onTabChange(cat)} className={rowClass(active)}>
              <span>{cat}</span>
              <span className={`text-xs font-semibold ${active ? 'text-[#e63946]' : 'text-[#b6bcc6]'}`}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* Price */}
      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.06em] mb-2.5">Price Range</div>
      <div className="flex flex-col gap-0.5 mb-[26px]">
        {priceOptions.map(po => (
          <button key={po.key} onClick={() => onPriceChange(po.key)} className={priceClass(po.key === priceRange)}>
            {po.label}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.06em] mb-2.5">Sort By</div>
      <select
        value={sort}
        onChange={e => onSortChange(e.target.value)}
        className="w-full border border-gray-200 bg-white rounded-[10px] px-3 py-2.5 text-[13px] text-gray-700 cursor-pointer outline-none"
      >
        {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </aside>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export default function ProductFilter({ variant, ...props }) {
  if (variant === 'topbar') return <Topbar {...props} />
  return <Sidebar {...props} />
}
