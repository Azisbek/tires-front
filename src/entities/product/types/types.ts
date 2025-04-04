export type SeasonType = 'winter' | 'summer' | 'allSeason'

export interface ProductCardProps {
  product_Id: number
  image: string
  price: number
  is_favorite: boolean
  title: string
  in_stock: number
  rating?: number
  comment_quantity?: number
  season?: number
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
