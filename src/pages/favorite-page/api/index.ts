import { $api } from 'shared/api/api'

interface FavoriteProductFromAPI {
  product_Id: number
  image: string
  price: string | number
  is_favorite: boolean
  title: string
  in_stock: number
  rating?: number
  comment_quantity?: number
  season?: number
}

interface FavoritesResponse {
  favorites: FavoriteProductFromAPI[]
  total_favorites: number
}

export const favoriteApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getFavorites: build.query<FavoritesResponse, void>({
      query: () => ({
        url: '/product/favorites/',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetFavoritesQuery } = favoriteApi
