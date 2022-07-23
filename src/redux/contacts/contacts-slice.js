import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from 'shared/services/utils/utils';
import {
  addContact,
  fetchContacts,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: null,
      items: payload,
    }),
    [fetchContacts.rejected]: rejected,

    [addContact.pending]: pending,
    [addContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: null,
      items: [...store.items, payload],
    }),
    [addContact.rejected]: rejected,

    [removeContact.pending]: pending,
    [removeContact.fulfilled]: (store, { payload }) => ({
      ...store, loading: false, error: null, items: store.items.filter(el => el.id !== payload)
    }),
    [removeContact.rejected]: rejected,
  },
});

export default contactsSlice.reducer;
