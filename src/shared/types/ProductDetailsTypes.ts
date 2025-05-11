export type Season = 'summer' | 'winter' | 'all_seasons'

export interface Characteristic {
  manufacturer: string
  model: string
  season: Season
  width: string
  profile: string
  diameter: string
  speed_index: string
  load_index: string
  load_index_for_double: string
}

export interface SimilarProductTypes {
  comments_count: number
  favorite: boolean
  id: number
  image_url: string
  in_stock: number
  price: string
  rating: number
  season: string
  title: string
}

export interface ProductDetailsTypes {
  id: number
  title: string
  in_stock: number
  price: number
  promotion: number
  count: number
  season: string
  favorite: boolean
  image_url: string
  average_rating: number
  comments_count: number
  model_description: string
  warranty: string
  characteristics: Characteristic
  similar_products: SimilarProductTypes[]
}

export interface ProductHeaderTypes {
  id: number
  title: string
  season: Season
  average_rating: number
  warranty: string
  comments_count: number
}

export interface BuyCardTypes {
  id: number
  price?: number
  promotion?: number
  warranty?: string
  in_stock?: number
  count?: number
  favorite?: boolean
}
