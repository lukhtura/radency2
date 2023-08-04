import { configureStore } from '@reduxjs/toolkit';

import noteSlice from 'engine/redux/slices/noteSlice';
import formModalSlice from 'engine/redux/slices/formModalSlice';
import technicalSlice from 'engine/redux/slices/technicalSlice';

export const store = configureStore({
  reducer: {
    noteSlice,
    formModalSlice,
    technicalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
