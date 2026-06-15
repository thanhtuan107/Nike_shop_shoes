export default function CartItem({ item, onInc, onDec }) {
  return (
    <div className="flex gap-3.5 py-4 border-b border-gray-100">
      {/* Thumbnail */}
      <div className="w-20 h-20 flex-shrink-0 rounded-lg bg-gray-50 overflow-hidden flex items-center justify-center">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="text-[11px] tracking-[0.04em] uppercase text-gray-400">
          {item.category}
        </div>
        <div className="text-sm font-semibold mt-0.5 mb-2 leading-[1.3] text-[#0F0F0F]">
          {item.name}
        </div>
        <div className="flex items-center justify-between gap-2.5">
          {/* Stepper */}
          <div className="inline-flex items-center border border-gray-200 rounded-full">
            <button
              onClick={onDec}
              className="border-none bg-transparent cursor-pointer w-7 h-7 text-base text-gray-500 flex items-center justify-center"
            >
              −
            </button>
            <span className="text-[13px] min-w-5 text-center font-semibold">{item.qty}</span>
            <button
              onClick={onInc}
              className="border-none bg-transparent cursor-pointer w-7 h-7 text-base text-gray-500 flex items-center justify-center"
            >
              +
            </button>
          </div>
          <span className="text-sm font-extrabold text-[#0F0F0F]">
            ${(item.price * item.qty).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}
