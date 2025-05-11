import { useState } from 'react'

export function useCatalogParams() {
  const [currentPage, setCurrentPage] = useState(1)
  const [ordering, setOrdering] = useState('price')

  return { currentPage, setCurrentPage, ordering, setOrdering }
}
