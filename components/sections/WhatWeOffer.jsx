'use client'
import { FiClock, FiDollarSign, FiPercent, FiFileText } from 'react-icons/fi'
import { useHoverIndex } from '@/hooks/useHoverIndex'
import Image from 'next/image'
import Link from 'next/link'

const offers = [
  {
    icon: <FiClock size={32} />,
    title: '24/7 Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque ut leo gravida.',
    dark: false,
  },
  {
    icon: <FiDollarSign size={32} />,
    title: 'Cash Back',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque ut leo gravida.',
    dark: false,
  },
  {
    icon: <FiPercent size={32} />,
    title: 'Monthly Offer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque ut leo gravida.',
    dark: false,
  },
  {
    icon: <FiFileText size={32} />,
    title: 'Membership',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus eget pellentesque ut leo gravida.',
    dark: false,
  },
]

export default function WhatWeOffer() {
  const { hoveredIndex, getHandlers } = useHoverIndex()

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            What we <span className="text-[#e63946]">offer</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((item, i) => (
            <div
              key={i}
              {...getHandlers(i)}
              className={`rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 -translate-y-0 hover:-translate-y-1 ${
                hoveredIndex === i
                  ? 'bg-gray-900 text-white shadow-2xl'
                  : item.dark
                  ? 'bg-gray-900 text-white shadow-xl'
                  : 'bg-white text-gray-700 shadow-md'
              }`}
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${item.dark ? 'bg-gray-700' : 'bg-gray-100'
                  }`}
              >
                <span className={item.dark ? 'text-white' : 'text-gray-700'}>
                  {item.icon}
                </span>
              </div>

              <h3
                className={`text-base font-bold mb-3 ${item.dark ? 'text-[#e8b44b]' : 'text-[#e8b44b]'
                  }`}
              >
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${item.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.desc}
              </p>
              {/* Nike logo */}
              <Link href="/" className="pt-4 flex items-center">
                <Image
                  src={hoveredIndex === i ? '/logw.png' : '/logo_Nike_black.png'}
                  alt="Nike Logo"
                  width={40}
                  height={20}
                  priority
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
