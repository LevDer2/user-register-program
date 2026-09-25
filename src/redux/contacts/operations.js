import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockFetchContacts, mockAddContacts, mockDeleteContact } from "./contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    try {
      const contacts = await mockFetchContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const newContact = await mockAddContacts(contact);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const deleteContactId = await mockDeleteContact(contactId);
      return deleteContactId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
