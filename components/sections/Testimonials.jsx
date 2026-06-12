import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

const testimonials = [
  {
    id: 1,
    name: 'Sophie Turner',
    role: 'Designer',
    avatar: 'https://i.pravatar.cc/60?img=1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Multiavida enim fames amet, purus. Tortor sed nisl odio laoreet ullamcorper. Egestas consequat adipiscing elit nisl aliquot imperdiet. Faucibus non augue odio amet. Varius metus at clitorium.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emma Watson',
    role: 'Designer',
    avatar: 'https://i.pravatar.cc/60?img=5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Multiavida enim fames amet, purus. Tortor sed nisl odio laoreet ullamcorper. Egestas consequat adipiscing elit nisl aliquot imperdiet. Faucibus non augue odio amet. Varius metus at clitorium.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anna Smith',
    role: 'Designer',
    avatar: 'https://i.pravatar.cc/60?img=9',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Multiavida enim fames amet, purus. Tortor sed nisl odio laoreet ullamcorper. Egestas consequat adipiscing elit nisl aliquot imperdiet. Faucibus non augue odio amet. Varius metus at clitorium.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            What Our <span className="text-[#e63946]">Clients Say</span>
            <br />About Us
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <AiFillStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-500 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
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
