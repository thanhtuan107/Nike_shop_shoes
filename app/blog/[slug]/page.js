import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import ArticleBody from '@/components/blog/ArticleBody'
import posts, { getPostBySlug } from '@/data/posts'

const serif = { fontFamily: 'var(--font-playfair), serif' }

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Tạp chí EKiN`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const moreCards = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header / lede */}
      <article className="max-w-[760px] mx-auto px-8 pt-12 pb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-500 no-underline mb-7 hover:text-[#0F0F0F] transition-colors"
        >
          <FiArrowLeft size={16} />
          Quay lại Blog
        </Link>
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-[18px]">
          <span className="text-[#e8b44b] font-bold uppercase tracking-[0.06em]">
            {post.category}
          </span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read}</span>
        </div>
        <h1
          style={serif}
          className="font-extrabold text-[clamp(30px,4.5vw,50px)] leading-[1.08] text-[#0F0F0F] m-0 mb-[22px]"
        >
          {post.title}
        </h1>
        <p className="text-lg leading-[1.7] text-[#4b5563] font-medium m-0 mb-7">
          {post.excerpt}
        </p>
      </article>

      {/* Hero image */}
      <div className="max-w-[980px] mx-auto px-8 pb-2">
        <div className="w-full aspect-[16/8] rounded-lg overflow-hidden bg-gray-50">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <article className="max-w-[760px] mx-auto px-8 pt-9 pb-10">
        <ArticleBody body={post.body} />
      </article>

      {/* More articles */}
      <section className="border-t border-[#ececec] bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8 py-14">
          <h2 className="text-[22px] font-bold text-[#0F0F0F] m-0 mb-[26px]">
            Bài viết khác
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreCards.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group flex flex-col bg-white rounded-md overflow-hidden no-underline text-inherit cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
              >
                <div className="w-full aspect-[16/10] overflow-hidden bg-gray-50">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-4 pt-4 pb-5">
                  <div className="text-[11px] text-gray-400 mb-2">
                    {p.category} • {p.read}
                  </div>
                  <h3 className="text-[15px] font-bold leading-[1.3] text-[#0F0F0F] m-0">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  )
}
