import { $api } from 'shared/api/api'

export const productIdApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductId: build.query({
      query: ({ id }) => ({
        url: `/product/${id}/`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProductIdQuery } = productIdApi
