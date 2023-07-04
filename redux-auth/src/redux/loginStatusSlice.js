import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, status: '로그아웃 상태입니다.', button: '로그인' },
  { id: 1, status: '로그인 상태입니다.', button: '로그아웃' },
];

const loginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    changeLoginStatus: (state, action) => {},
  },
});

export const { changeLoginStatus } = loginStatusSlice.actions;
export default loginStatusSlice.reducer;
