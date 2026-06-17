import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import FeaturedPost from '@/components/blog/FeaturedPost'
import PostCard from '@/components/blog/PostCard'
import Newsletter from '@/components/blog/Newsletter'
import posts, { TOPICS } from '@/data/posts'

export const metadata = {
  title: 'Tạp chí EKiN — Xu hướng, mẹo chọn giày & kiến thức chạy bộ',
  description:
    'Xu hướng, mẹo chọn giày và kiến thức chạy bộ — cập nhật cho mùa 2026 từ Tạp chí EKiN.',
  openGraph: {
    title: 'Tạp chí EKiN',
    description:
      'Xu hướng, mẹo chọn giày và kiến thức chạy bộ — cập nhật cho mùa 2026.',
    type: 'website',
  },
}

const serif = { fontFamily: 'var(--font-playfair), serif' }

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Intro */}
      <section className="max-w-[1280px] mx-auto px-8 pt-14 pb-2">
        <div className="text-[13px] text-gray-400 mb-4">
          Home <span className="mx-1.5">/</span>
          <span className="text-[#e63946] font-semibold">Blog</span>
        </div>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h1
              style={serif}
              className="font-extrabold text-[clamp(40px,5.5vw,66px)] leading-none text-[#0F0F0F] m-0"
            >
              Tạp chí <span className="text-[#e63946]">EKiN</span>
            </h1>
            <p className="text-base leading-[1.6] text-gray-500 max-w-[460px] mt-4 mb-0">
              Xu hướng, mẹo chọn giày và kiến thức chạy bộ — cập nhật cho mùa 2026.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {TOPICS.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold text-gray-600 bg-gray-100 px-3.5 py-2 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-[1280px] mx-auto px-8 pt-8">
        <FeaturedPost post={featured} />
      </section>

      {/* Grid */}
      <section className="max-w-[1280px] mx-auto px-8 pt-9 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Newsletter />

      <Footer />
      <CartDrawer />
    </div>
  )
}
