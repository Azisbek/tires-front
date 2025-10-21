import { $api } from 'shared/api/api'

export const orderApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addOrder: build.mutation({
      query: (body) => ({
        url: '/cart/order/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useAddOrderMutation } = orderApi
