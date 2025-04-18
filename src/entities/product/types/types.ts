export type SeasonValue = 'summer' | 'winter' | 'all_seasons'

export interface ProductCardProps {
  image: string
  in_stock: number
  is_favorite: boolean
  price: number
  product_Id: number
  season: {
    label: string
    value: SeasonValue
  }
  title: string
  comments_count: number

  average_rating: number
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
