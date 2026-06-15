// About Us — full-bleed two-column: B&W lifestyle photo (placeholder) + brand story & stats.
const stats = [
  { value: '2021', label: 'Năm thành lập' },
  { value: '10k', accent: '+', label: 'Khách hàng' },
  { value: '100', accent: '%', label: 'Chính hãng' },
]

export default function AboutStory() {
  return (
    <section className="bg-[#0a0a0a] p-0">
      <div
        className="grid items-stretch"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
      >
        {/* Photo column — replace placeholder with a real grayscale lifestyle photo:
            <img src="/about_lifestyle.jpg" className="absolute inset-0 w-full h-full object-cover"
                 style={{ filter: 'grayscale(1) contrast(1.05)' }} /> */}
        <div className="relative overflow-hidden bg-[#111]" style={{ minHeight: 'clamp(420px, 60vw, 720px)' }}>
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(120% 80% at 50% 20%, #2a2a2a, #0d0d0d 70%)',
              animation: 'kenburns 18s ease-in-out infinite alternate',
            }}
          />
          <svg
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.5 }}
          >
            <g fill="#000">
              <path d="M84 132 q-3 -22 2 -38 q3 -10 9 -10 q6 0 9 10 q5 16 2 38 l4 38 -10 0 -2 -26 -2 26 -10 0z" />
              <circle cx="95" cy="74" r="9" />
              <path d="M120 138 q-3 -20 1 -34 q3 -9 8 -9 q5 0 8 9 q4 14 1 34 l3 34 -8 0 -2 -24 -2 24 -8 0z" />
              <circle cx="129" cy="86" r="8" />
            </g>
          </svg>
          <div className="absolute top-6 left-6 font-mono text-[11px] tracking-[0.16em] text-[#6b6b6b]">
            B&amp;W PHOTO — thay ảnh lifestyle
          </div>
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: '40%', background: 'linear-gradient(to top, #0a0a0a, transparent)' }}
          />
        </div>

        {/* Text column */}
        <div
          className="flex flex-col justify-center"
          style={{ padding: 'clamp(56px, 7vw, 110px) clamp(32px, 6vw, 90px)' }}
        >
          <h2
            className="font-black uppercase m-0 mb-[30px] text-white"
            style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', lineHeight: 1, letterSpacing: '-0.02em' }}
          >
            About Us
          </h2>
          <p className="text-base text-[#b8b8b8] m-0 mb-[22px] font-medium" style={{ lineHeight: 1.8 }}>
            Thành lập năm 2021, EKiN dành cho những người luôn vượt qua giới hạn của chính mình. Chúng
            tôi là cộng đồng đam mê thể thao, hiệu năng và lối sống năng động.
          </p>
          <p className="text-base text-[#b8b8b8] m-0 mb-[22px] font-medium" style={{ lineHeight: 1.8 }}>
            Được dẫn dắt bởi tình yêu thể thao, chúng tôi không ngừng tìm những cung đường mới để chạy,
            những thử thách mới để chinh phục, và một cộng đồng toàn cầu để kết nối.
          </p>
          <p className="text-base text-[#b8b8b8] m-0 font-medium" style={{ lineHeight: 1.8 }}>
            Trước khi đến tay bạn, mỗi đôi giày đều được chúng tôi mang ra thử thật, kiểm định thật,
            đẩy đến giới hạn. Chúng tôi đòi hỏi điều tốt nhất từ sản phẩm — để bạn yên tâm bứt phá.
          </p>

          <div className="flex gap-11 mt-11 flex-wrap">
            {stats.map(({ value, accent, label }) => (
              <div key={label}>
                <div className="font-black text-[40px] leading-none text-white">
                  {value}
                  {accent && <span className="text-[#e63946]">{accent}</span>}
                </div>
                <div className="text-xs tracking-[0.06em] uppercase text-[#6b6b6b] mt-1.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
