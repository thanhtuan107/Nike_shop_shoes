// Represent — a dark panel (logo + copy) nested inside a white section.
export default function Represent() {
  return (
    <section className="bg-white px-8 py-8" >
      <div
        className="w-[99%] mx-auto bg-[#0a0a0a] rounded grid items-center overflow-hidden "
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {/* Logo column */}
        <div
          className="flex items-center justify-center bg-[#0a0a0a]"
          style={{ padding: 'clamp(48px, 7vw, 90px) 40px' }}
        >
          <img src="/logw.png" alt="EKiN mark" className="h-auto" style={{ width: 'min(320px, 70%)' }} />
        </div>

        {/* Copy column */}
        <div
          className="border-l border-[#1c1c1c]"
          style={{ padding: 'clamp(40px, 5vw, 72px) clamp(32px, 5vw, 64px)' }}
        >
          <h2
            className="font-black uppercase m-0 mb-6 text-white"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 0.98, letterSpacing: '-0.02em' }}
          >
            Biểu tượng <br />chuyển động
          </h2>
          <p className="text-base text-[#9ca3af] m-0 font-medium" style={{ lineHeight: 1.75 }}>
            Dấu swoosh tượng trưng cho sự chuyển động không ngừng — tốc độ, nhịp điệu và đà tiến về
            phía trước. Nó nhắc rằng mọi sản phẩm trên EKiN đều phục vụ một điều: đưa bạn đi xa hơn,
            nhanh hơn, vững vàng hơn.
          </p>
        </div>
      </div>
    </section>
  )
}
