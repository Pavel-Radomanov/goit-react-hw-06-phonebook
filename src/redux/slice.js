import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Winny Pooh', number: '4591389' },
      { id: 'id-2', name: 'Mavka Ukraine', number: '7773333' },
      { id: 'id-3', name: 'Hutin Puiylo', number: '6666666' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      console.log(state);
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      console.log(state);
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export default contactsSlice.reducer;
