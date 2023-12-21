import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from '../features/posts/postSlice';
import { postApi } from '../features/posts/postApi';

export const store = configureStore({
  reducer: {
    post: postReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;