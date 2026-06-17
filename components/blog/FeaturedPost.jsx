import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const serif = { fontFamily: 'var(--font-playfair), serif' }

export default function FeaturedPost({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-1 md:grid-cols-2 border border-[#ececec] rounded-md overflow-hidden no-underline text-inherit cursor-pointer"
    >
      {/* Image */}
      <div className="relative min-h-[360px] bg-gray-50 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-[18px] left-[18px] bg-[#e63946] text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded">
          Bài nổi bật
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 md:p-[clamp(32px,4vw,52px)]">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="text-[#e8b44b] font-bold uppercase tracking-[0.06em]">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read}</span>
        </div>
        <h2
          style={serif}
          className="font-extrabold text-[clamp(26px,3.2vw,40px)] leading-[1.1] text-[#0F0F0F] m-0 mb-4"
        >
          {post.title}
        </h2>
        <p className="text-[15px] leading-[1.7] text-gray-500 m-0 mb-6">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#e63946]">
          Đọc bài viết
          <FiArrowRight size={17} />
        </span>
      </div>
    </Link>
  )
}
