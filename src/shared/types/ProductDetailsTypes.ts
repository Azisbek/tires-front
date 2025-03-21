export interface ProductHeaderTypes {
  id: number
  title: string
  season_label?: string
  average_rating?: string
}

export interface ProductDetailsTypes {
  manufacturer: string
  model: string
  price: string
  condition_label?: string
  tire_type_label?: string
  body_type_label?: string
  category_label?: string
  category_value?: string
  is_favorite?: boolean
  width: string
  profile: string
  diameter: string
  speed_index: string
  load_index: string
  load_index_for_double?: string
  image_url?: string
  comments?: string

  model_description: string
}
