import { $api } from 'shared/api/api'

import { TiresType } from '../types'

export const tiresTypeApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getTiresType: build.query<TiresType[], void>({
      query: () => ({
        url: '/product/tire_type/',
        method: 'GET',
      }),
    }),
    addTiresType: build.mutation<TiresType, { value: string }>({
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

export const { useGetTiresTypeQuery, useAddTiresTypeMutation } = tiresTypeApi
