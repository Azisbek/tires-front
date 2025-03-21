import { $api } from 'shared/api/api'
import { HomepageTypes } from 'shared/types/HomepageTypes'

export const homeProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getHomeProduct: build.query<HomepageTypes, void>({
      query: () => ({
        url: '/product/homepage/',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetHomeProductQuery } = homeProductApi
