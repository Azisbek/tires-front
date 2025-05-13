import { ProductType } from 'shared/types/CatalogpageTypes'

export interface FavoritesResponse {
  favorites: ProductType[]
  total_favorites: number
}
