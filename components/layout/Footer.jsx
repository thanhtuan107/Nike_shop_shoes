import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi'
import Link from 'next/link'
const quickLinks = ['Home', 'Shop', 'About', 'Blog', 'Testimonial', 'Collections']
const findProducts = ['About Us', 'Contact Us', 'Return Policy', 'Privacy Policy', 'Payment Policy']
const getHelp = ['About Us', 'Contact Us', 'Return Policy', 'Privacy Policy', 'Payment Policy']

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
          <Link href="/" className="flex items-center pb-4">
          <img src="./logo_Nike_black.png" className="w-16" alt="" />
        </Link>
        
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[200px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pellentesque ut imperdiet. Faucibus augue odio amet.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FiFacebook size={16} />, color: 'hover:bg-blue-600' },
                { icon: <FiTwitter size={16} />, color: 'hover:bg-sky-400' },
                { icon: <FiInstagram size={16} />, color: 'hover:bg-pink-600' },
                { icon: <FiYoutube size={16} />, color: 'hover:bg-red-600' },
              ].map((s, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 bg-gray-100 ${s.color} hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all duration-300`}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#e63946] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find Products */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-5">Find Products</h4>
            <ul className="space-y-3">
              {findProducts.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#e63946] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-5">Get Help</h4>
            <ul className="space-y-3">
              {getHelp.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-[#e63946] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2026 All rights reserved | Nike Store
          </p>
          <p className="text-xs text-gray-400">
            Made with ❤️ by TahnTuan
          </p>
        </div>
      </div>
    </footer>
  )
}
