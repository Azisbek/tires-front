import { $api } from 'shared/api/api'

export const AddProductsApi = $api.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation<void, FormData>({
      query: (formData) => ({
        url: '/product/create/',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
})

export const { useCreateProductMutation } = AddProductsApi
