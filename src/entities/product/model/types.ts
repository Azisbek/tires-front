import { ReactNode } from "react"

export type SeasonType = 'winter' | 'summer' | 'allSeason'
export type isFavoriteType = boolean


export interface ProductCardProps {
  productId?: number
  season: SeasonType
  productImg: string
  rating: number
  commentQuantity: number
  productTitle: string
  inStock: number
  price: number
  isFavorite: isFavoriteType
}
export interface ProductPriceProps {
  children: number
  className?: string
}
export interface ProductImageProps {
  src: string
  alt: string
  className?: string
}


