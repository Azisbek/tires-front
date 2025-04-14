import { $api } from 'shared/api/api'

import { ProfileResponse } from '../ProfileTypes'

export const profileApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponse, void>({
      query: () => ({
        url: '/users/me/',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetProfileQuery } = profileApi
