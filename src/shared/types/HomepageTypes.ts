export interface PopularProductsTypes {
  productId: number
  productImg: string
  productTitle: string
  average_rating: number
  comments_count: number
  price: string
  seasonality: string
  is_favorite: boolean
  in_stock: number
}

export interface PromotionTypes {
  promotionId: number
  promotionImg: string
  promotionTitle: string
  promotionPrice: string
  promotionEndTime: string
  promotionCategory: string[]
}

export interface FilterType {
  manufacturers: string[]
  models: string[]
  generations: string[]
  modifications: string[]
  body_type: string[]
}

export interface HomeFilterTypes {
  filters?: FilterType
}

export interface HomepageTypes {
  filters: FilterType
  popularProducts: PopularProductsTypes[]
  promotion: PromotionTypes[]
}
