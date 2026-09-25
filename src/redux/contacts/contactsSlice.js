import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload)
})

  },
});

export default contactsSlice.reducer;
