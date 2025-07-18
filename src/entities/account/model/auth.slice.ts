import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { signInApi } from 'pages/sign-in/api'
import { signUpApi } from 'pages/sign-up/api'

import TokenService from 'shared/lib/TokenService'
import { GetMeApiResponse, UserTypes } from 'shared/types/AuthTypes'

interface AuthState {
  user: UserTypes
  isUserLoaded: boolean
}

const initialState: AuthState = {
  user: {
    id: null,
    username: '',
    email: '',
    phone: '',
  },

  isUserLoaded: false,
}

const actionSetUser = (
  state: AuthState,
  { payload }: PayloadAction<GetMeApiResponse>,
) => {
  state.user = {
    id: payload.UserMe.user.id || null,
    username: payload.UserMe.user.username || '',
    email: payload.UserMe.user.email || '',
    phone: payload.UserMe.user.phone || '',
  }
  state.isUserLoaded = true
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        signUpApi.endpoints.registerUser.matchFulfilled,
        (state, { payload }) => {
          if (payload.access) {
            TokenService.setToken(payload.access)
            signInApi.endpoints.getMe.initiate()
          } else {
            console.error('Access token is undefined')
          }
          state.user = {
            id: payload.id,
            username: payload.username,
            email: payload.email,
            phone: payload.phone,
          }
        },
      )
      .addMatcher(
        signInApi.endpoints.authUser.matchFulfilled,
        (state, { payload }) => {
          if (payload.access) {
            TokenService.setToken(payload.access)
            signInApi.endpoints.getMe.initiate()
          } else {
            console.error('Access token is undefined')
          }
          state.user = {
            id: payload.id,
            username: payload.username,
            email: payload.email,
            phone: payload.phone,
          }
        },
      )
      .addMatcher(signInApi.endpoints.authUser.matchRejected, (state) => {
        TokenService.clearToken()
        state.isUserLoaded = false
      })
      .addMatcher(signInApi.endpoints.getMe.matchFulfilled, actionSetUser)
      .addMatcher(
        signInApi.endpoints.refresh.matchFulfilled,
        (_, { payload }) => {
          TokenService.setToken(payload.refresh)
        },
      )
      .addMatcher(signInApi.endpoints.refresh.matchRejected, (state) => {
        TokenService.clearToken()
        state.isUserLoaded = false
      })
  },
})
