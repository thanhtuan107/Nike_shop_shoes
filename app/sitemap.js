import posts from '@/data/posts'

const BASE = 'https://ekin.vercel.app'

export default function sitemap() {
  return [
    { url: `${BASE}/`, lastModified: new Date() },
    { url: `${BASE}/shop`, lastModified: new Date() },
    { url: `${BASE}/blog`, lastModified: new Date() },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ]
}
