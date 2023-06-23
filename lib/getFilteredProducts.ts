export const getFilteredProducts = (query: string, items: {}[]) => {
  if (!query) return items
  return items.filter((product: any) =>
    product.label.toLowerCase().includes(query.toLowerCase())
  )
}
