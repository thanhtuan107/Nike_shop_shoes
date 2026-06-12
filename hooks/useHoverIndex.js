import { useState } from 'react'

export function useHoverIndex() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const getHandlers = (index) => ({
    onMouseEnter: () => setHoveredIndex(index),
    onMouseLeave: () => setHoveredIndex(null),
  })

  return { hoveredIndex, getHandlers }
}
