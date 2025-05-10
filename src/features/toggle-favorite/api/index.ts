import { $api } from 'shared/api/api'
import { ProductType } from 'shared/types/CatalogpageTypes'

export const productFavoriteApi = $api.injectEndpoints({
  endpoints: (build) => ({
    updateFavoriteStatus: build.mutation<
      ProductType,
      { product_id: number }
    >({
      query: ({ product_id }) => ({
        url: '/product/all/',
        method: 'POST',
        body: {
          product_id,
        },
      }),
    }),
  }),
})

export const { useUpdateFavoriteStatusMutation } = productFavoriteApi
