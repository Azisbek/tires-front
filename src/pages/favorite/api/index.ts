import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface FavoriteProductFromAPI {
  product_Id: number;
  image: string;
  price: string | number;
  is_favorite: boolean;
  title: string;
  in_stock: number;
  rating?: number;
  comment_quantity?: number;
  season?: number;
}

interface FavoritesResponse {
  favorites: FavoriteProductFromAPI[];
  total_favorites: number;
}

export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tires-shop-test-jnpy.onrender.com' }),
  endpoints: (build) => ({
    getFavorites: build.query<FavoritesResponse, void>({
      query: () => '/product/favorites/',
    }),
  }),
});

export const { useGetFavoritesQuery } = favoriteApi;
