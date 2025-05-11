import { $api } from 'shared/api/api'
import { ProductListResponse } from 'shared/types/CatalogpageTypes'

export const homeProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      ProductListResponse,
      { search?: string; page?: number; page_size?: number; ordering?: string }
    >({
      query: ({ search, page = 1, page_size = 12, ordering }) => ({
        url: '/product/all/',
        method: 'GET',
        params: { search, page, page_size, ordering },
      }),
    }),
  }),
})

export const { useGetProductsQuery } = homeProductApi
