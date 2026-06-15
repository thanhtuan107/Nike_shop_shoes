export default function CartSummary({ subtotal }) {
  return (
    <div className="px-6 py-5 border-t border-[#f0f0f0]">
      <div className="flex items-center justify-between mb-3.5">
        <span className="text-sm text-gray-500">Subtotal</span>
        <span className="text-[22px] font-extrabold text-[#0F0F0F]">${subtotal.toFixed(2)}</span>
      </div>
      <button className="w-full bg-[#e63946] text-white border-none cursor-pointer text-sm font-semibold py-[15px] rounded-full">
        Checkout
      </button>
      <div className="text-center text-xs text-gray-400 mt-2.5">
        Free shipping on orders over $150
      </div>
    </div>
  )
}
