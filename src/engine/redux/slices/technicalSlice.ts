import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TechnicalSliceState {
  currentPage: string;
}

const initialState: TechnicalSliceState = {
  currentPage: '/',
};

const technicalSlice = createSlice({
  name: 'technicalSlice',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

const { actions, reducer } = technicalSlice;

export const { setCurrentPage } = actions;

export default reducer;
