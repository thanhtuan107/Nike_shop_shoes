'use client'
import ProductCard from './ProductCard'

export default function ProductGrid({
  products, hoveredId, favorites, layout,
  activeTab, resultCount, shownCount, canLoadMore,
  onHover, onLeave, onFav, onAdd, onLoadMore,
}) {
  const gridCols = layout === 'topbar'
    ? 'grid-cols-[repeat(auto-fill,minmax(280px,1fr))]'
    : 'grid-cols-[repeat(auto-fill,minmax(240px,1fr))]'

  return (
    <div className="flex-1 min-w-0">
      {/* Section title */}
      <div className="flex items-baseline justify-between gap-3 mb-[22px] flex-wrap">
        <h2 className="text-xl font-bold text-[#0F0F0F] m-0">
          {activeTab}{' '}
          <span className="text-gray-400 font-medium text-sm">· {resultCount} products</span>
        </h2>
      </div>

      {/* Grid */}
      <div className={`grid gap-6 ${gridCols}`}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            isHovered={hoveredId === product.id}
            isFav={favorites.includes(product.id)}
            onEnter={() => onHover(product.id)}
            onLeave={() => onLeave(product.id)}
            onFav={onFav}
            onAdd={onAdd}
          />
        ))}
      </div>

      {/* Empty state */}
      {products.length === 0 && (
        <div className="text-center py-20 px-5 text-gray-400">
          <div className="section-title text-[26px] text-[#0F0F0F] mb-2">
            No products found
          </div>
          <div className="text-sm">Try a different keyword, category, or price range.</div>
        </div>
      )}

      {/* Load more */}
      {canLoadMore && (
        <div className="text-center pt-9 pb-6">
          <button
            onClick={onLoadMore}
            className="bg-white text-[#0F0F0F] border-2 border-[#111827] cursor-pointer text-sm font-semibold px-10 py-[13px] rounded-full"
          >
            Load More
          </button>
          <div className="text-[13px] text-gray-400 mt-3.5">
            Showing {shownCount} / {resultCount}
          </div>
        </div>
      )}
    </div>
  )
}
