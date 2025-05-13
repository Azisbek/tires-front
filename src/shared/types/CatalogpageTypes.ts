export type ProductQueryParams = {
  search?: string
  page?: number
  page_size?: number
  ordering?: string
  season?: string[]
  manufacturer?: string[]
  tire_type?: string[]
  min_price?: number
  max_price?: number
  runflat?: boolean
  promotion?: boolean
  min_load_index?: number
  max_load_index?: number
  min_noise_level?: number
  max_noise_level?: number
  width?: string
  profile?: string
  diameter?: string
  speed_index?: string
  fuel_efficiency?: string
  wet_grip?: string
  off_road?: boolean
}

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

export type SeasonType = 'winter' | 'summer' | 'all_seasons'

export interface ProductType {
  product_Id: number
  image: string[]
  average_rating: number
  comments_count: number
  title: string
  in_stock: number
  price: number
  is_favorite: boolean
  season: SeasonType
}
