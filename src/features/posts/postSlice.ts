import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

const postSlice = createSlice({
  name: 'post',
  initialState: { posts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const postReducer = postSlice.reducer;

export { fetchPosts };

export const selectPosts = (state: RootState) => state.post.posts;
