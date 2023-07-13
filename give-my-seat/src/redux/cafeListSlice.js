import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cafe: [],
};

const cafeListSlice = createSlice({
  name: 'cafeList',
  initialState,
  reducers: {
    getCafeList: (state, action) => {
      // console.log('읽어', state.cafe);
      // console.log(action.payload);
      state.cafe = action.payload;
    },
  },
});

export const { getCafeList } = cafeListSlice.actions;
export default cafeListSlice.reducer;
