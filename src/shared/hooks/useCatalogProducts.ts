import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useGetProductsQuery } from 'pages/catalog/api'

const DEFAULT_SORTING = '-price'

export function useCatalogProducts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const currentSorting = searchParams.get('sorting')
    if (!currentSorting) {
      searchParams.set('sorting', DEFAULT_SORTING)
      setSearchParams(searchParams, { replace: true })
    }
  }, [searchParams, setSearchParams])

  const ordering = searchParams.get('sorting') || DEFAULT_SORTING

  const { data, isFetching } = useGetProductsQuery({
    page: currentPage,
    page_size: 12,
    ordering,
  })

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSortChange = (sort: string) => {
    setSearchParams({ sorting: sort })
    setCurrentPage(1)
  }

  return {
    data,
    isLoading: isFetching,
    handlePageChange,
    handleSortChange,
    currentSort: ordering,
  }
}
