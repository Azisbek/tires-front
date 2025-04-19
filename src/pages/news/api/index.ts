import { $api } from 'shared/api/api'

interface NewsItem {
  id: string
  news_image: string
  news_title: string
  news_time: string
}

interface NewsResponse {
  NewsItem: NewsItem[]
}

export const newsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getNewsBy: build.query<NewsResponse, void>({
      query: () => ({
        url: '/product/news_list',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetNewsByQuery } = newsApi
