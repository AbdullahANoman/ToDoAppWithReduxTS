import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "TODO",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
