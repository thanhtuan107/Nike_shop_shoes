// Fixed floating social buttons (hotline / Zalo / Messenger) — bottom-left overlay.
export default function FloatingSocial() {
  const base =
    'w-[50px] h-[50px] rounded-full bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-white no-underline'

  return (
    <div className="fixed left-[18px] bottom-7 z-[80] flex flex-col gap-3">
      <a href="#" aria-label="Hotline" className={base} style={{ boxShadow: '0 8px 22px rgba(0,0,0,0.4)' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
      <a href="#" aria-label="Zalo" className={`${base} font-extrabold text-xs`} style={{ boxShadow: '0 8px 22px rgba(0,0,0,0.4)' }}>
        Zalo
      </a>
      <a href="#" aria-label="Messenger" className={base} style={{ boxShadow: '0 8px 22px rgba(0,0,0,0.4)' }}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.35.27.57l.05 1.78c.04.57.62.94 1.14.71l1.99-.88a.86.86 0 0 1 .57-.04c.91.25 1.88.39 2.77.39 5.64 0 10-4.13 10-9.7C24 6.13 17.64 2 12 2zm6 7.46-2.93 4.64a1.5 1.5 0 0 1-2.16.4l-2.33-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.68-.62l2.93-4.64a1.5 1.5 0 0 1 2.16-.4l2.33 1.75c.21.16.5.16.72 0l3.16-2.4c.42-.32.97.18.68.62z" />
        </svg>
      </a>
    </div>
  )
}
