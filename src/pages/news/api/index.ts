import { $api } from 'shared/api/api'

import { NewsResponse } from '../types/types'

export const newsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<NewsResponse, { limit?: number; offset?: number }>({
      query: ({ limit = 9, offset }) => ({
        url: `/product/news_list/?limit=${limit}&offset=${offset}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetNewsQuery } = newsApi
