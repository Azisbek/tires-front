import { configureStore } from '@reduxjs/toolkit'
import { $api } from 'shared/api/api'
import { modalSlice } from 'shared/ui/modal/model'

export const store = configureStore({
  reducer: {
    [$api.reducerPath]: $api.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat($api.middleware),
devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
