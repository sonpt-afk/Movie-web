import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  text: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    search: (state, action) => {
      state.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { search } = appSlice.actions;

export default appSlice.reducer;
