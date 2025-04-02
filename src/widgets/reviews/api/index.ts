import { $api } from 'shared/api/api'

import { ProductCommentsResponse } from '../types/types'

export const productCommentsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductComments: build.query<
      ProductCommentsResponse,
      { id: number; limit?: number; offset?: number }
    >({
      query: ({ id, limit = 3, offset }) => ({
        url: `/product/${id}/comments/?limit=${limit}&offset=${offset}`,
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
