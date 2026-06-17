const serif = { fontFamily: 'var(--font-playfair), serif' }

export default function Newsletter() {
  return (
    <section className="bg-[#0F0F0F] text-white">
      <div className="max-w-[1280px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            style={serif}
            className="font-extrabold text-[clamp(26px,3vw,38px)] leading-[1.1] m-0 mb-3"
          >
            Nhận bài viết mới mỗi tuần
          </h2>
          <p className="text-[15px] leading-[1.6] text-gray-400 m-0">
            Mẹo chọn giày, đánh giá sản phẩm và xu hướng — gửi thẳng vào hộp thư của bạn.
          </p>
        </div>
        {/* Static form — wire up to an email service / API on launch */}
        <div className="flex gap-2.5 flex-wrap">
          <input
            type="email"
            placeholder="Email của bạn"
            aria-label="Email của bạn"
            className="flex-1 min-w-[200px] border border-[#2a2a2a] bg-[#141414] text-white rounded-full px-5 py-3.5 text-sm outline-none focus:border-[#e63946] transition-colors"
          />
          <button
            type="button"
            className="bg-[#e63946] text-white border-none cursor-pointer text-sm font-semibold px-7 py-3.5 rounded-full whitespace-nowrap hover:bg-[#cf2f3c] transition-colors"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </section>
  )
}
