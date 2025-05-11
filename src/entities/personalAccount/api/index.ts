import { $api } from 'shared/api/api'

import { OrderDetails, ProfileResponseApi } from '../types/types'

export const profileApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<
      ProfileResponseApi,
      { limit?: number; offset?: number }
    >({
      query: (params) => ({
        url: '/users/me/',
        method: 'GET',
        params: {
          limit: params?.limit,
          offset: params?.offset,
        },
      }),
    }),
    getOrderDetails: build.query<OrderDetails, number>({
      query: (orderId) => ({
        url: `/users/me/applications/${orderId}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProfileQuery, useLazyGetOrderDetailsQuery } = profileApi
