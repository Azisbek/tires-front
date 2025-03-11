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

export interface HomepageTypes {
  popularProducts: PopularProductsTypes[]
  promotion: PromotionTypes[]
}
