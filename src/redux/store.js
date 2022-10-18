import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './mySlice/myPhoneBookSlice';

export const store = configureStore({
  reducer: {
    items: phoneBookSlice.reducer,
  },
});
