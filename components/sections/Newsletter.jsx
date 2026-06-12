'use client'
import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/keep_running_carousel.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gray-900/85" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Join Our <span className="text-[#e63946]">News Letters</span>
        </h2>
        <p className="text-gray-300 text-sm mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aliquam sit in et pellentesque.
          Consectetur in sit etiam pellentesque. Consectetur in etiam pellentesque.
        </p>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insert your mail here..."
            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 px-5 py-4 pr-14 rounded-full focus:outline-none focus:border-[#e63946] focus:bg-white/20 transition-all text-sm backdrop-blur-sm"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#e63946] hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <FiSend size={16} />
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-400 text-sm font-medium">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  )
}
