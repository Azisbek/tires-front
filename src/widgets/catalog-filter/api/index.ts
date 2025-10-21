import { $api } from 'shared/api/api'

import { FilterData } from '../model/types'

export const catalogFilterApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductFilter: build.query<{ filter_data: FilterData }, void>({
      query: () => ({
        url: '/product/filter/',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProductFilterQuery } = catalogFilterApi
