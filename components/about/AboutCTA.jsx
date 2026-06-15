import Link from 'next/link'

// Closing CTA — large headline + pill button linking to the Shop.
export default function AboutCTA() {
  return (
    <section
      className="bg-[#0a0a0a] text-center"
      style={{ padding: 'clamp(80px, 11vw, 140px) 32px' }}
    >
      <h2
        className="font-black uppercase m-0 mb-9 text-white"
        style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 0.98, letterSpacing: '-0.025em' }}
      >
        Bứt phá <br />cùng EKiN
      </h2>
      <Link
        href="/shop"
        className="inline-flex items-center gap-3 bg-white text-[#0a0a0a] no-underline font-extrabold text-sm tracking-[0.04em] uppercase rounded-full whitespace-nowrap hover:bg-[#e63946] hover:text-white transition-colors"
        style={{ padding: '18px 44px' }}
      >
        Khám phá cửa hàng
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </section>
  )
}
