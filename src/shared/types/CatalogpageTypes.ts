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

export type SeasonType = 'winter' | 'summer' | 'all_season'


export interface FilterResponse {
  message: string
  filtered_product_ids: number[]
  filter_data: FiltersListType
}
export interface FiltersListType {
  conditions: string[]
  diameters: string[]
  fuel_efficiency: Record<string, string>
  manufacturers: string[]
  max_load_index: string
  min_load_index: string
  max_noise_level: number
  min_noise_level: number
  max_price: number
  min_price: number
  off_road: boolean[]
  profiles: string[]
  promotion: boolean[]
  runflat: boolean[]
  seasons: string[]
  sort_by_price: Record<string, string>[]
  speed_indexes: string[]
  tire_types: string[]
  wet_grip: Record<string, string>
  widths: string[]
}


export interface TireFilters {
  seasons: boolean[]
  manufacturers: boolean[]
  tire_types: boolean[]
  condition: boolean[]
  min_price: number
  max_price: number
  min_load_index: number
  max_load_index: number
  min_noise_level: number
  max_noise_level: number
  width: string
  profile: string
  diameter: string
  speed_index: string
  runflat: boolean[]
  off_road: boolean[]
  promotion: boolean[]
  wet_grip: boolean[]
  fuel_efficiency: boolean[]
}