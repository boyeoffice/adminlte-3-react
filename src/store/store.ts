import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import { uiSlice } from './reducers/ui';
import {authSlice} from './reducers/auth';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(createLogger())
  ]
});

export default store;