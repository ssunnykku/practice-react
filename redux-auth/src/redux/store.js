import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import loginStatusReducer from './loginStatusSlice';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginStatus: loginStatusReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
