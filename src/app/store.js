import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { exchangesApi } from '../services/exchangesApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [exchangesApi.reducerPath]: exchangesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoNewsApi.middleware,
      cryptoApi.middleware,
      exchangesApi.middleware
    ),
});
