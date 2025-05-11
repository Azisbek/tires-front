export interface NewsItemTypes {
  id: string
  news_image: string
  news_title: string
  news_time: string
}

export interface NewsResponse {
  count: number
  next: string | null
  previous: string | null
  results: NewsItemTypes[]
}
