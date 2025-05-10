import { $api } from 'shared/api/api'
import {
  FilterResponse,
  FiltersListType,
  ProductListResponse,
} from 'shared/types/CatalogpageTypes'

export const catalogProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    // Получение всех товаров (поиск, сортировка, пагинация)
    getProducts: build.query<
      ProductListResponse,
      { search?: string; page?: number; page_size?: number; ordering?: string }
    >({
      query: ({ search, page = 1, page_size = 12, ordering }) => ({
        url: '/product/all/',
        method: 'GET',
        params: { search, page, page_size, ordering },
      }),
    }),

    // Получение фильтрованных данных (POST-запрос, как в твоем примере ранее)
    getFilterData: build.mutation<
      FilterResponse,
      {
        filters?: {
          filter_data: FiltersListType
          filtered_product_ids: number[]
          message: string
        }
      }
    >({
      query: ({ filters = {} }) => ({
        url: '/product/filter/',
        method: 'POST',
        body: {
          filters,
        },
      }),
    }),
  }),
})

export const { useGetProductsQuery, useGetFilterDataMutation } =
  catalogProductApi
