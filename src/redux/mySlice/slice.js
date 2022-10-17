import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    toAdd(state, action) {
      state.push(action.payload);
    },
    toDelete(state, action) {
      state.filter(item => item.id !== action.payload);
    },
  },
});

export const { toAdd, toDelete } = itemsSlice.actions;
