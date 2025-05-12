import { $api } from 'shared/api/api'

import { CartData } from '../model/types'

export const profileApi = $api.injectEndpoints({
  endpoints: (build) => ({
    PostOrder: build.mutation<
      void,
      {
        first_name: string
        last_name: string
        phone: string
        email: string
        address: string
        delivery: boolean
        pickup: boolean
        payment_cash: boolean
        payment_online: boolean
      }
    >({
      query: (order) => ({
        url: '/cart/order/',
        method: 'POST',
        body: order,
      }),
    }),
    getCartItem: build.query<CartData, void>({
      query: () => ({
        url: '/cart/items/',
        method: 'GET',
      }),
    }),
  }),
})

export const { usePostOrderMutation, useGetCartItemQuery } = profileApi
