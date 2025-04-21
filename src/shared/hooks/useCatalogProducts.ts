import { useSearchParams } from 'react-router-dom'

import { useGetProductsQuery } from 'pages/catalog/api'

import { useAppSelector } from 'shared/lib/hooks'

const DEFAULT_SORTING = '-price'

export function useCatalogProducts() {
  const [searchParams, setSearchParams] = useSearchParams()
  // const [getFilterData, { data, isLoading, error }] = useGetFilterDataMutation()
  const searchQuery = useAppSelector((state) => state.search.productSearch)
  const page = Number(searchParams.get('page')) || 1
  const ordering = searchParams.get('sorting') || DEFAULT_SORTING

  const { data, isFetching, refetch } = useGetProductsQuery({
    page,
    page_size: 12,
    ordering,
    search: searchQuery || undefined,
  })

  const updateParams = (newParams: Record<string, string>) => {
    const updated = new URLSearchParams(searchParams)
    Object.entries(newParams).forEach(([key, value]) => {
      updated.set(key, value)
    })
    setSearchParams(updated)
  }

  const handlePageChange = (newPage: number) => {
    updateParams({ page: String(newPage) })
  }

  const handleSortChange = (newSort: string) => {
    updateParams({ sorting: newSort, page: '1' })
  }

  return {
    data,
    isLoading: isFetching,
    handlePageChange,
    handleSortChange,
    currentSort: ordering,
    refetch,
    // filters,
  }
}
