import { $api } from 'shared/api/api'

import { CommentTypes } from '../types/types'

export const productCommentsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProductComments: build.query<CommentTypes[], { id: any }>({
      query: ({ id }) => ({
        url: `/product/${id}/comments/`,
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
