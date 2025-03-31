import { configureStore } from '@reduxjs/toolkit';

import { $api } from 'shared/api/api';
import { screenSlice } from './screen.slice';
import { favoriteApi } from 'pages/favorite/api';

export const store = configureStore({
  reducer: {
    [$api.reducerPath]: $api.reducer,
    [screenSlice.name]: screenSlice.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat($api.middleware, favoriteApi.middleware), 
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
