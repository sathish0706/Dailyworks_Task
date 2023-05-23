import { createSlice } from "@reduxjs/toolkit";

export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState: {
    userRegister: [{ name: "", email: "", password: "" }],
    fetching: false,
  },
  reducers: {
    addUser: (state, action) => {
      //   console.log(state, action);
      if (action.payload) {
        state.userRegister = { ...action.payload };
      }
    },
  },
});

export const { addUser } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
