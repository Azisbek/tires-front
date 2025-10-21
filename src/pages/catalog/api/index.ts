import { $api } from 'shared/api/api'
import {
  ProductListResponse,
  ProductQueryParams,
} from 'shared/types/CatalogpageTypes'

export const catalogProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductListResponse, ProductQueryParams>({
      query: (params) => ({
        url: '/product/all/',
        method: 'GET',
        params,
      }),
    }),
  }),
})

export const { useGetProductsQuery } = catalogProductApi
