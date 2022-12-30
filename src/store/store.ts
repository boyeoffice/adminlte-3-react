import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import { uiSlice } from './reducers/ui';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware().concat(createLogger())
  ]
});

export default store;