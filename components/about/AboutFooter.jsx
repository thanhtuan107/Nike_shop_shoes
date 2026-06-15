// Dark footer used on the About page.
export default function AboutFooter() {
  return (
    <footer className="bg-black text-gray-400 border-t border-[#1c1c1c]">
      <div className="max-w-[1280px] mx-auto px-8 py-9 flex items-center justify-between gap-5 flex-wrap">
        <div className="flex items-center gap-2">
          <img src="/logw.png" alt="EKiN" className="w-12 h-auto" />
          <span className="font-extrabold italic text-lg text-white">EKiN</span>
        </div>
        <div className="text-xs text-[#6b6b6b]">© 2026 EKiN. Premium Shoe Shop.</div>
      </div>
    </footer>
  )
}
