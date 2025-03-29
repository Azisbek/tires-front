interface Comment {
  id: string // предполагается, что id — это строка
  productId: string // предполагается, что product_id — это строка
  comment: string // предполагается, что comment — это строка
  rating: string // предполагается, что rating — это строка
  createdAt: string // предполагается, что created_at — это строка (например, дата в формате ISO)
}

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
  comments: Comment[]
  average_rating: number
  model_description: string
  warranty: string
  characteristics: Characteristic
}

export interface ProductHeaderTypes {
  id: number
  title: string
  season: Season
  average_rating: number
  warranty: string
  comments: Comment[]
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
