import { $api } from 'shared/api/api'
import { ProductType } from 'shared/types/CatalogpageTypes'

export const productFavoriteApi = $api.injectEndpoints({
  endpoints: (build) => ({
    updateFavoriteStatus: build.mutation<
      ProductType,
      { product_id: number; is_favorite?: boolean }
    >({
      query: ({ product_id, is_favorite }) => ({
        url: '/product/favorites/',
        method: 'POST',
        body: {
          product_id,
          is_favorite,
        },
      }),
    }),
  }),
})

export const { useUpdateFavoriteStatusMutation } = productFavoriteApi
