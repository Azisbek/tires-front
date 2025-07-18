import { $api } from 'shared/api/api'

export const CartItemApi = $api.injectEndpoints({
  endpoints: (build) => ({
    changeCount: build.mutation({
      query: ({ productId, quantity }) => ({
        url: '/cart/items/',
        method: 'PUT',
        body: {
          product: productId,
          count: quantity,
        },
      }),
    }),

    deleteCartItem: build.mutation({
      query: ({ productId }) => ({
        url: `/cart/items/`,
        method: 'DELETE',
        body: {
          product: productId,
        },
      }),
    }),
  }),
})

export const { useChangeCountMutation, useDeleteCartItemMutation } = CartItemApi
