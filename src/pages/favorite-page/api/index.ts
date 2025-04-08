import { $api } from 'shared/api/api'

import { FavoritesResponse } from '../FavoriteTypes'

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
