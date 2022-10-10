import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  //default middleware, necessary for all redux applications
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
