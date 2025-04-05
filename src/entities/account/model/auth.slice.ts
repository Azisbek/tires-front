import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { signInApi } from 'pages/sign-in/api'

import TokenService from 'shared/lib/TokenService'

interface User {
  id: number | null
  username: string
  email: string
  phone: string
}

interface AuthState {
  user: User
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

const actionSetUser = (state: AuthState, { payload }: PayloadAction<User>) => {
  state.user = {
    id: payload.id || null,
    username: payload.username || '',
    email: payload.email || '',
    phone: payload.phone || '',
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
        signInApi.endpoints.authUser.matchFulfilled,
        (state, { payload }) => {
          const accessToken = payload.access
          if (accessToken) {
            TokenService.setToken(accessToken)
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
