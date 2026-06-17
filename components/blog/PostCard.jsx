import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-md overflow-hidden no-underline text-inherit cursor-pointer transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(0,0,0,0.16)]"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span className="absolute top-3 left-3 bg-white/95 text-[#0F0F0F] text-[10px] font-bold uppercase tracking-wide px-2.5 py-[5px] rounded-full">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-[18px] pt-[18px] pb-[22px]">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2.5">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read}</span>
        </div>
        <h3 className="text-[17px] font-bold leading-[1.3] text-[#0F0F0F] m-0 mb-2.5">
          {post.title}
        </h3>
        <p className="text-[13.5px] leading-[1.6] text-gray-500 m-0 mb-4 flex-1">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#e63946]">
          Đọc tiếp
          <FiArrowRight size={15} />
        </span>
      </div>
    </Link>
  )
}
