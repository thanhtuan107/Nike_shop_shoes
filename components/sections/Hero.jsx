import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
const thumbnails = [
  {
    id: 1,
    name: 'Air Jordan 1',
    price: '$187',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=60&fit=crop&auto=format',
  },
  {
    id: 2,
    name: 'Air Jordan',
    price: '$187',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=80&h=60&fit=crop&auto=format',
  },
]
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[85vh]">

        {/* Left Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-500 font-medium tracking-widest uppercase">New Arrival</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-2">
            Summer
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-2">
            Collections
          </h1>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight border-b-4 border-[#e63946]">
              2026
            </span>
            <FiHeart className="text-gray-400 ml-2" size={28} />
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
            Find your shoes from our various collections. Here shoes are endless and profit is also endless.
          </p>

          <button className="bg-[#e63946] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2">
            Shop Now
            <span className="text-lg">›</span>
          </button>

          {/* Thumbnails */}
          <div className="flex items-center gap-4 mt-12">
            {thumbnails.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2 cursor-pointer hover:border-[#e63946] hover:shadow-md transition-all duration-300 bg-white"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-10 object-cover rounded-lg"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-700">{item.name}</p>
                  <p className="text-xs text-[#e63946] font-bold">{item.price}</p>
                </div>
              </div>
            ))}
            {/* Dots indicator */}
            <div className="flex gap-1.5 ml-2">
              {[0, 1, 2, 3].map(i => (
                <span key={i} className={`rounded-full transition-all ${i === 0 ? 'w-5 h-2 bg-[#e63946]' : 'w-2 h-2 bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="relative flex items-center justify-center">

          {/* Discount Badge */}
          <div className="absolute top-4 right-8 bg-[#e63946] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg z-20 text-center">
            <div className="text-lg font-black">40%</div>
            <div>off</div>
          </div>

          {/* Heart icons floating */}
          <FiHeart className="absolute top-16 right-24 text-gray-300" size={20} />
          <FiHeart className="absolute bottom-24 right-4 text-gray-300" size={16} />

          {/* Main Shoe Image */}
          <Image
            src="/product/aphafly.jpg"
            width={400}
            height={400}
            alt="Nike Logo"
            className="w-[550px] md:w-[530px] object-contain"
            style={{ transform: 'rotate(-15deg)' }}
          />

          {/* Product Card */}
          <div className="absolute bottom-8 right-4 bg-white rounded-2xl shadow-xl p-4 w-52 z-20">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(4)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-400 text-xs" />
              ))}
              <AiFillStar className="text-gray-200 text-xs" />
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Nike Air Alphafly 3</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-gray-900">250 $</span>
              <button className="bg-[#e63946] hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
