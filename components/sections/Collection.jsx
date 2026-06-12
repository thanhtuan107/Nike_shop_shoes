"use client"
import { useState } from 'react'
import { useHoverIndex } from '@/hooks/useHoverIndex'
import { FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import products from '@/data/products'

const categories = ['All', 'Running', 'Casual', 'Sport', 'Formal']

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)
  const { hoveredIndex, getHandlers } = useHoverIndex()
  const isHovered = hoveredIndex === 0

  return (
    <div
      {...getHandlers(0)}
      className={`rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isHovered ? 'bg-gray-900' : 'bg-white shadow-md'
      }`}
    >
      {/* Image container */}
      <div className="relative">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#e63946] text-white text-[10px] font-bold px-2 py-0.5 rounded">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              liked ? 'bg-[#e63946] text-white' : 'bg-white text-gray-500'
            }`}
          >
            <FiHeart size={14} />
          </button>
        </div>
        <div className="absolute top-3 right-12 z-10 flex items-center gap-1 bg-white/90 rounded-full px-2 py-0.5">
          <AiFillStar className="text-yellow-400 text-xs" />
          <span className="text-xs font-semibold">{product.rating}</span>
        </div>
        <div className={`h-60 overflow-hidden ${isHovered ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Info */}
      <div className={`p-4 ${isHovered ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`font-semibold text-sm ${isHovered ? 'text-white' : 'text-gray-800'}`}>
              {product.name}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`font-black text-base ${isHovered ? 'text-white' : 'text-gray-900'}`}>
                ${product.price}
              </span>
              <span className="text-xs text-gray-400 line-through">${product.oldPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurCollection() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = products.filter(
    (p) => activeTab === 'All' || p.category === activeTab
  )

  const display = filtered.slice(0, 6)

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#e63946]">Collection</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm font-semibold pb-1 transition-all duration-200 ${
                activeTab === cat
                  ? 'text-[#e8b44b] border-b-2 border-[#e8b44b]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#e63946] hover:text-[#e63946] transition-colors">
            <FiChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#e63946] hover:text-[#e63946] transition-colors">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
