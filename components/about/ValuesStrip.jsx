// Values Strip — three pillars on white, separated by hairline gaps.
const pillars = [
  {
    no: '01',
    title: 'Chính hãng tuyệt đối',
    desc: 'Làm việc trực tiếp với nhà phân phối chính hãng. Mỗi đôi giày được kiểm định trước khi lên kệ — không hàng nhái, không phụ phí ẩn.',
  },
  {
    no: '02',
    title: 'Thử thật, kiểm thật',
    desc: 'Chúng tôi tự mang sản phẩm ra trải nghiệm và đẩy đến giới hạn trước khi giới thiệu, để bạn nhận đúng thứ tốt nhất.',
  },
  {
    no: '03',
    title: 'Vì cộng đồng',
    desc: 'EKiN là nơi những người yêu vận động gặp nhau — chia sẻ cung đường, thử thách và cảm hứng bứt phá mỗi ngày.',
  },
]

export default function ValuesStrip() {
  return (
    <section
      className="bg-white text-[#0a0a0a]"
      style={{ padding: 'clamp(64px, 8vw, 110px) 32px' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div
          className="grid gap-px bg-[#e5e5e5] border border-[#e5e5e5]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {pillars.map(({ no, title, desc }) => (
            <div
              key={no}
              className="bg-white"
              style={{ padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)' }}
            >
              <div className="font-black text-sm tracking-[0.04em] text-[#e63946]">{no}</div>
              <h3
                className="font-black uppercase mt-[18px] mb-3.5"
                style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p className="text-[#6b7280] m-0 font-medium" style={{ fontSize: '14.5px', lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
