import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const deleteSlice = createSlice({
  name: 'delete',
  initialState: {},
  reducers: {},
});

export const deleteReducer = deleteSlice.reducer;

export const selectDelete = (state: RootState) => state.delete;
