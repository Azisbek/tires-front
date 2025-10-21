import { useState } from 'react'

export function useCatalogParams() {
  const [currentPage, setCurrentPage] = useState(1)
  const [ordering, setOrdering] = useState('expensive')

  return { currentPage, setCurrentPage, ordering, setOrdering }
}
