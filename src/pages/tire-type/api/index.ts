import { $api } from 'shared/api/api'

import { TireType } from '../types'

export const tireTypeApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getTireType: build.query<TireType[], void>({
      query: () => ({
        url: '/product/tire_type/',
        method: 'GET',
      }),
    }),
    addTireType: build.mutation<TireType, { value: string }>({
      query: ({ value }) => ({
        url: '/product/tire_type/',
        method: 'POST',
        body: {
          value,
          label: value,
        },
      }),
    }),
  }),
})

export const { useGetTireTypeQuery, useAddTireTypeMutation } = tireTypeApi
