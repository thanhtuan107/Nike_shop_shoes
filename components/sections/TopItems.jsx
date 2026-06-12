'use client'
import { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import products from '@/data/products'

const items = products.slice(0, 3)

export default function TopItems() {
  const [activeIndex, setActiveIndex] = useState(0)
  const item = items[activeIndex]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left - Image Display */}
          <div className="relative flex items-center  justify-center">
            {/* Dark bg circle */}
            {/* <div className="absolute w-[340px] h-[340px] bg-gray-900 rounded-full" /> */}

            {/* Thumbnail strip - left side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
              {items.map((p, i) => (
                <div
                  key={p.id}
                  onClick={() => setActiveIndex(i)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                    i === activeIndex ? 'border-[#e63946] scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain bg-white" />
                </div>
              ))}
            </div>

            {/* Main shoe */}
            <img  
              key={item.id}
              src={item.image}
              alt={item.name}
              className="relative z-10 w-[280px] md:w-[340px] object-contain transition-opacity duration-300"
              style={{ transform: '' }}
            />
          </div>

          {/* Right - Info */}
          <div>
            <p className="text-sm text-[#e63946] font-semibold uppercase tracking-widest mb-2">Top Items</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Unique Features Of Latest &<br />Trending Products
            </h2>

            {/* Description features */}
            <ul className="space-y-3 mb-8">
              {item.description.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#e63946] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Product detail bar */}
            <div className="mt-8 flex items-center justify-between bg-white rounded-2xl p-4 shadow-md">
              <div>
                <p className="text-base font-bold text-gray-900">{item.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-black text-gray-900">${item.price}</span>
                  <span className="text-sm text-gray-400 line-through">${item.oldPrice}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < Math.floor(item.rating) ? 'text-yellow-400 text-xs' : 'text-gray-200 text-xs'}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{item.rating} Rating</span>
                </div>
              </div>
              <button className="bg-[#e63946] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
                <FiShoppingCart size={16} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
