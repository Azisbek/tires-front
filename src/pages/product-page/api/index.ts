import { $api } from 'shared/api/api'
import { ProductDetailsTypes } from 'shared/types/ProductDetailsTypes'

export const productIdApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductId: build.query<ProductDetailsTypes, { id: string }>({
      query: ({ id }) => ({
        url: `/product/${id}/`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProductIdQuery } = productIdApi
