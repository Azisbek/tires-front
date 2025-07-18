import { $api } from 'shared/api/api'

export const addToCartApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: (body) => ({
        url: '/cart/items/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useAddToCartMutation } = addToCartApi
