import { ProductCardProps } from 'entities/product/types/types'

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

const mapSeason = (
  season: number | undefined,
): 'winter' | 'summer' | 'allSeason' => {
  switch (season) {
    case 1:
      return 'winter'
    case 2:
      return 'summer'
    case 3:
      return 'allSeason'
    default:
      return 'allSeason'
  }
}

export const mapProductToCardProps = (
  product: FavoriteProductFromAPI,
): ProductCardProps => {
  return {
    productId: product.product_Id,
    season: mapSeason(product.season),
    productImg: product.image,
    rating: product.rating ?? 0,
    commentQuantity: product.comment_quantity ?? 0,
    productTitle: product.title,
    inStock: product.in_stock,
    price: product.price,
    isFavorite: product.is_favorite,
  }
}
