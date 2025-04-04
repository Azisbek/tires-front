export interface FavoriteProductFromAPI {
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

export interface FavoritesResponse {
  favorites: FavoriteProductFromAPI[]
  total_favorites: number
}
