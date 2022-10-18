import { createSlice } from '@reduxjs/toolkit';

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
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? iniContacts,
  filter: '',
};

export const phoneBookSlice = createSlice({
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

export const { toAdd, toDelete, toFilter } = phoneBookSlice.actions;
