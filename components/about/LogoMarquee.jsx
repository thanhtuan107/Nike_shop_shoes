// Infinite logo marquee strip at the very top of the About page.
// Renders a base set of 6 EKiN marks twice (12 total) so a -50% translate loops seamlessly.
const BASE = Array.from({ length: 6 })

export default function LogoMarquee() {
  const items = [...BASE, ...BASE]
  return (
    <div className="bg-[#0a0a0a] border-b border-[#1c1c1c] overflow-hidden py-3.5">
      <div
        className="flex w-max"
        style={{ animation: 'marquee 26s linear infinite' }}
      >
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-3.5 px-6">
            <img src="/logw.png" alt="" className="w-10 h-auto opacity-90" />
            <span className="font-extrabold italic text-xl tracking-[0.02em] text-white">
              EKiN
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
