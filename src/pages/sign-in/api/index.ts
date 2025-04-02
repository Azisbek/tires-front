import { $api } from 'shared/api/api'
import { GetMeResponse } from 'shared/types/AuthTypes'

export const signInApi = $api.injectEndpoints({
  endpoints: (build) => ({
    authUser: build.mutation({
      query: (body) => ({
        url: `/users/login/`,
        method: 'POST',
        body,
      }),
    }),
    getMe: build.query<GetMeResponse, void>({
      query: () => ({
        url: '/users/me/',
        method: 'GET',
      }),
    }),
    refresh: build.mutation({
      query: (body) => ({
        url: '/users/login/refresh/',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useAuthUserMutation, useLazyGetMeQuery } = signInApi
