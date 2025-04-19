import { $api } from 'shared/api/api'

export interface NewsDetail {
  id: string
  news_image: string
  news_title: string
  news_time: string
  news_description: string
  related_news: string[]
}

export const newsIdApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getNewsById: build.query<NewsDetail, { id: string }>({
      query: ({ id }) => ({
        url: `/product/news/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetNewsByIdQuery } = newsIdApi
