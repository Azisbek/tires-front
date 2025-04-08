import { $api } from 'shared/api/api'

import { AutocompleteResponse } from '../types/types'

export const searchApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getSearchProduct: build.query<string[], string>({
      query: (search) => ({
        url: `/product/autocomplete?q=${search}`,
        method: 'GET',
      }),
      transformResponse: (response: AutocompleteResponse[]) => {
        console.log(response)
        return response.flatMap((item) =>
          Object.entries(item)
            .filter(([key]) => key !== 'id')
            .map(([, value]) => value),
        )
      },
    }),
  }),
})

export const { useGetSearchProductQuery } = searchApi
