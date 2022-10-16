import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const toAdd = createAction('myValue/toAdd');
const toDelete = createAction('myValue/toDelete');

const myReducer = createReducer(10, {
  [toAdd]: (state, action) => state + action.payload,
  [toDelete]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
