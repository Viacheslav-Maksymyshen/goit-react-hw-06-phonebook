import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const iniContacts = [
  {
    id: '9jACRmI3_jBfX8jsbptG6',
    name: 'Viktoria Max',
    number: '32-32-32',
  },
  {
    id: 'uwZMuVbdGS70CAwWcdA2y',
    name: 'Viacheslav Max',
    number: '57-31-86',
  },
];

const initialState = {
  contacts: iniContacts,
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    toAdd(state, action) {
      state.contacts.push(action.payload);
    },
    toDelete(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    toFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
const persistConfig = {
  key: 'phoneBookContacts',
  storage,
  whitelist: ['contacts'],
};

export const phoneReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { toAdd, toDelete, toFilter } = phoneBookSlice.actions;
export const getContacts = state => state.items.contacts;
export const getFilter = state => state.items.filter;
