import { $api } from 'shared/api/api'

export const AddNews = $api.injectEndpoints({
  endpoints: (build) => ({
    addNews: build.mutation({
      query: (body) => ({
        url: '/product/news_create/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useAddNewsMutation } = AddNews
