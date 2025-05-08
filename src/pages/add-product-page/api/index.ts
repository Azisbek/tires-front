import { $api } from 'shared/api/api'

export const addProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation<
      { message: string; product_id: number; success: boolean },
      FormData
    >({
      query: (formData) => ({
        url: '/product/create/',
        method: 'POST',
        body: formData,
      }),
    }),
    getBodyType: build.query<
      { id: number; value: string; label: string }[],
      void
    >({
      query: () => ({
        url: '/product/body_type/',
        method: 'GET',
      }),
    }),
    getTireType: build.query<
      { id: number; value: string; label: string }[],
      void
    >({
      query: () => ({
        url: '/product/tire_type/',
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useCreateProductMutation,
  useGetBodyTypeQuery,
  useGetTireTypeQuery,
} = addProductApi
