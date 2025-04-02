import { $api } from 'shared/api/api'

export const signUpApi = $api.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (body) => ({
        url: `/users/register/`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useRegisterUserMutation } = signUpApi
