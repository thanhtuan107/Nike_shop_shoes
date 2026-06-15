'use client'
import { AiFillStar } from 'react-icons/ai'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

export default function ProductCard({ product, isHovered, isFav, onEnter, onLeave, onFav, onAdd }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`rounded-sm overflow-hidden cursor-pointer transition-all duration-300 ${
        isHovered
          ? 'bg-[#111827] shadow-[0_22px_44px_rgba(0,0,0,0.22)]'
          : 'bg-white shadow-[0_4px_14px_rgba(0,0,0,0.07)]'
      }`}
    >
      {/* Image area */}
      <div className="relative">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#e63946] text-white text-[10px] font-bold tracking-[0.02em] px-2 py-[3px] rounded">
            {product.badge}
          </span>
        )}

        {/* Top-right: rating + heart */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          <div className="flex items-center gap-[3px] bg-white/90 rounded-full px-2 py-[3px]">
            <AiFillStar className="text-[#facc15] text-[11px]" />
            <span className="text-[11px] font-semibold text-[#0F0F0F]">
              {Number(product.rating).toFixed(1)}
            </span>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onFav(product.id) }}
            className={`w-7 h-7 rounded-full cursor-pointer border-none flex items-center justify-center transition-colors duration-200 ${
              isFav ? 'bg-[#e63946] text-white' : 'bg-white text-gray-400'
            }`}
          >
            <FiHeart size={13} fill={isFav ? '#ffffff' : 'none'} />
          </button>
        </div>

        {/* Image box */}
        <div className={`h-60 overflow-hidden transition-colors duration-300 ${isHovered ? 'bg-[#1f2937]' : 'bg-gray-50'}`}>
          <img
            src={product.image}
            alt={product.name}
            className={`h-full w-full object-cover transition-transform duration-[400ms] ${isHovered ? 'scale-[1.06]' : 'scale-100'}`}
          />
        </div>
      </div>

      {/* Info area */}
      <div className={`p-4 transition-colors duration-300 ${isHovered ? 'bg-[#111827]' : 'bg-white'}`}>
        <p className="text-[11px] tracking-[0.05em] uppercase mt-0 mb-[5px] text-gray-400">
          {product.category}
        </p>
        <p className={`text-sm font-semibold m-0 leading-[1.35] ${isHovered ? 'text-white' : 'text-gray-800'}`}>
          {product.name}
        </p>
        <div className="flex items-baseline gap-[7px] mt-2">
          <span className={`text-[17px] font-extrabold ${isHovered ? 'text-white' : 'text-[#0F0F0F]'}`}>
            ${Number(product.price).toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${Number(product.oldPrice).toFixed(2)}
            </span>
          )}
        </div>

        {isHovered && (
          <button
            onClick={(e) => { e.stopPropagation(); onAdd(product) }}
            className="mt-3.5 w-full bg-[#e63946] text-white border-none cursor-pointer text-[13px] font-semibold p-[11px] rounded-[10px] flex items-center justify-center gap-2"
          >
            <FiShoppingCart size={15} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}
