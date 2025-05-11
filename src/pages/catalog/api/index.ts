import { $api } from 'shared/api/api'
import {
  ProductListResponse,
  ProductQueryParams,
} from 'shared/types/CatalogpageTypes'

export const homeProductApi = $api.injectEndpoints({
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

export const { useGetProductsQuery } = homeProductApi
