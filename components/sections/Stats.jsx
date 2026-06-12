'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '20k+', label: 'Orders' },
  { value: '40k+', label: 'Visitors' },
  { value: '10k+', label: 'Customers' },
  { value: '500+', label: 'Products' },
]

function parsestat(value) {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: value }
  return { target: parseInt(match[1], 10), suffix: match[2] }
}

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

function StatItem({ value, label }) {
  const { target, suffix } = parsestat(value)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(target, 2000, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="text-primary text-4xl text-white font-bold font-display">
        {count}{suffix}
      </div>
      <div className="text-gray-300 mt-1">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden my-16">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/keep_running_carousel.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  )
}
