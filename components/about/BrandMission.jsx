// Brand Mission — centered statement on a near-black background.
export default function BrandMission() {
  return (
    <section
      className="bg-[#0a0a0a]"
      style={{ padding: 'clamp(80px, 12vw, 150px) 32px' }}
    >
      <div className="max-w-[820px] mx-auto text-center">
        <div className="text-xs font-bold tracking-[0.28em] uppercase text-[#6b6b6b] mb-[26px]">
          Brand Mission
        </div>
        <h1
          className="font-black uppercase m-0 mb-[30px] text-white"
          style={{ fontSize: 'clamp(34px, 5.2vw, 62px)', lineHeight: 1.04, letterSpacing: '-0.02em' }}
        >
          Theo đuổi sự vượt trội bằng <span className="text-[#e63946]">sức mạnh</span> &amp; sự tinh tế
        </h1>
        <p
          className="text-[#b8b8b8] m-0 font-medium"
          style={{ fontSize: 'clamp(16px, 1.7vw, 20px)', lineHeight: 1.75 }}
        >
          Tại EKiN, chúng tôi tin mỗi ngày là một cơ hội để tốt hơn. Chúng tôi tuyển chọn những đôi
          giày hiệu năng cao, thử thách giới hạn của bạn — đồng hành qua từng bước chạy và từng cột
          mốc trên hành trình phát triển.
        </p>
      </div>
    </section>
  )
}
