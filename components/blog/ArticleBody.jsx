const serif = { fontFamily: 'var(--font-playfair), serif' }

export default function ArticleBody({ body }) {
  return (
    <>
      {body.map((block, i) => {
        if (block.type === 'h') {
          return (
            <h2
              key={i}
              style={serif}
              className="text-2xl font-bold text-[#0F0F0F] leading-[1.2] mt-8 mb-3"
            >
              {block.text}
            </h2>
          )
        }
        if (block.type === 'q') {
          return (
            <blockquote
              key={i}
              style={serif}
              className="text-[22px] italic text-[#0F0F0F] border-l-[3px] border-[#e63946] pl-6 py-1.5 my-7 leading-[1.4]"
            >
              {block.text}
            </blockquote>
          )
        }
        return (
          <p key={i} className="text-base leading-[1.8] text-gray-700 m-0 mb-[18px]">
            {block.text}
          </p>
        )
      })}
    </>
  )
}
