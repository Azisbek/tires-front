export interface ProductListResponse {
  total_pages: number
  current_page: number
  has_next: boolean
  has_previous: boolean
  next_page?: number | null
  previous_page?: number | null
  pages: number[]
  products: ProductType[]
  total_count: number
}

export interface ProductType {
  product_Id: number
  image: string
  average_rating: number
  comments_count: number
  title: string
  in_stock: number
  price: number
  is_favorite: boolean
  season: SeasonType
}

export type SeasonType = 'winter' | 'summer' | 'allSeason'
