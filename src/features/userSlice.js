import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    signin: (state, action) => {
      state.value = action.payload;
    },
    signout: (state) => {
      state.value = null;
    },
  },
});

export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;
