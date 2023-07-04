import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginOrNot: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
      console.log(state.isLoggedIn);
    },
  },
});

export const { login, logout, loginOrNot } = authSlice.actions;
export default authSlice.reducer;
