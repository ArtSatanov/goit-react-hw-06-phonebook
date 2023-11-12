import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducer: {
    addContact(state, action) {
      return { contacts: [...state.contacts, action.payload] };
    },
    prepare(value) {
      return {
        payload: {
          ...value,
          id: nanoid(),
        },
      };
    },
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
