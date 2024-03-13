import { createSlice } from "@reduxjs/toolkit";

const loginSLice = createSlice({
  name: "login",
  initialState: {
    loginData: [],
  },
  reducers: {
    addLoginData: (state, action) => {
      state.loginData.push(action.payload);
      console.log("action data :", action.payload);
    },
    removeLoginData: (state, action) => {
      state.loginData = [];
    },
  },
});
export const { addLoginData, removeLoginData } = loginSLice.actions;
export default loginSLice.reducer;
