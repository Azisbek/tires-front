import { $api } from 'shared/api/api'

import { ProductCommentsResponse } from '../types/types'

export const productCommentsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductComments: build.query<
      ProductCommentsResponse,
      { id: number; limit?: number }
    >({
      query: ({ id, limit = 3 }) => ({
        url: `/product/${id}/comments/?limit=${limit}&offset=0`,
        method: 'GET',
      }),
    }),

    addProductComment: build.mutation({
      query: (body) => ({
        url: `/product/comment/`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetProductCommentsQuery, useAddProductCommentMutation } =
  productCommentsApi
