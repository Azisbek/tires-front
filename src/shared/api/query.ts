import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import TokenStorageService from 'shared/lib/TokenService'
import { apiMap } from 'shared/model/api'

interface RefreshQueryResponseBody {
  data: {
    access: string
  }
}

export const $baseQuery = fetchBaseQuery({
  baseUrl: apiMap.base,
  // credentials: 'include',

  prepareHeaders: (headers) => {
    const token = TokenStorageService.getToken()

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache: Record<string, any> = {}

export const $baseQueryWithRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  {},
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  const cacheKey =
    typeof args === 'string' ? args : `${args.method} ${args.url}`
  if (typeof args === 'string') {
    cache[cacheKey] = $baseQuery(args, api, extraOptions)
  } else if (!(cacheKey in cache)) {
    cache[cacheKey] = $baseQuery(args, api, extraOptions)
  }

  const result = await cache[cacheKey]

  if (result.error && result.error.status === 401) {
    const access = TokenStorageService.getToken()

    const refresh = (await $baseQuery(
      {
        url: apiMap.refresh,
        method: 'POST',
        body: {
          access,
        },
      },
      api,
      extraOptions,
    )) as RefreshQueryResponseBody

    if (refresh.data && refresh.data.access) {
      TokenStorageService.setToken(refresh.data.access)
    } else {
      TokenStorageService.clearToken()
    }
  }

  delete cache[cacheKey]

  return result
}
