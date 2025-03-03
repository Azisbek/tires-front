export type SeasonType = 'winter' | 'summer' | 'allSeason'


export interface ProductCardProps {
  season: SeasonType
  productId: number
  productImg: string
  rating: number
  commentQuantity: number
  productTitle: string
  inStock: number
  price: number
  isFavorite: boolean
}
export interface ProductInfoType {
  inStock: number
}
