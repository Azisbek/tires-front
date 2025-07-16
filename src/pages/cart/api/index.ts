import { $api } from 'shared/api/api'

import { CartTypesApi } from '../../../shared/types/CartTypes'

export const cartApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query<CartTypesApi, void>({
      query: () => ({
        url: `/cart/items/`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetCartQuery } = cartApi
