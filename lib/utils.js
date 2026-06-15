const POOL = [
  'nike_airmax', 'nike_alphafly_3', 'nike_pegarsus42', 'nike_vomero_plus',
  'nike_structure_plus', 'nike_zoom_superfly_elite_2', 'nike_react', 'nike_red',
]
const SPECIAL = {
  1: 'nike_airmax', 2: 'nike_alphafly_3', 3: 'nike_pegarsus42',
  4: 'nike_vomero_plus', 5: 'nike_structure_plus', 6: 'nike_zoom_superfly_elite_2',
}

export function getProductImage(id) {
  const name = SPECIAL[id] || POOL[id % POOL.length]
  return `/product/${name}.avif`
}

export function fmtPrice(n) {
  return '$' + Number(n).toFixed(2)
}
