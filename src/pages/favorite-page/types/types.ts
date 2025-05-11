import { ProductCardProps } from 'entities/product/types/types'

export interface FavoritesResponse {
  favorites: ProductCardProps[]
  total_favorites: number
}
