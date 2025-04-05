import { configureStore } from '@reduxjs/toolkit'

import { signInSlice } from 'entities/account/model/auth.slice'

import { $api } from 'shared/api/api'

import { screenSlice } from './screen.slice'

export const store = configureStore({
  reducer: {
    [$api.reducerPath]: $api.reducer,
    [screenSlice.name]: screenSlice.reducer,
    [signInSlice.name]: signInSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat($api.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
