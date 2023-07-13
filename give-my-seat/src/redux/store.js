import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import cafeListReducer from './cafeListSlice.js';

const store = configureStore({
  reducer: {
    cafeList: cafeListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
