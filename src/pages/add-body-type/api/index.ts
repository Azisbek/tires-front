import { $api } from 'shared/api/api'

import { BodyTypeData } from '../types/types'

export const bodyTypeApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getBodyType: build.query<BodyTypeData[], void>({
      query: () => ({
        url: '/product/body_type/',
        method: 'GET',
      }),
    }),

    addBodyType: build.mutation<BodyTypeData, { value: string }>({
      query: ({ value }) => ({
        url: '/product/body_type/',
        method: 'POST',
        body: {
          label: value,
          value: value,
        },
      }),
    }),
  }),
})

export const { useGetBodyTypeQuery, useAddBodyTypeMutation } = bodyTypeApi
