import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './mySlice/slice';
// const toAdd = createAction('myValue/toAdd');
// const toDelete = createAction('myValue/toDelete');

// const myReducer = createReducer([], {
//   [toAdd]: (state, action) => state.push(action.payload),
//   [toDelete]: (state, action) =>
//     state.filter(item => item.id !== action.payload),
// });

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});
