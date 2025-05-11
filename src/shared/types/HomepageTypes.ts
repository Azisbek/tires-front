import { ProductType } from './CatalogpageTypes'

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
  popular: ProductType[]
  promotion: PromotionTypes[]
}
