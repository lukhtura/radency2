import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { EditNoteData } from 'types';

interface FormModalSliceState {
  isFormModalOpen: boolean;
  id: number;
  title: string;
  content: string;
  category: string;
}

const initialState: FormModalSliceState = {
  isFormModalOpen: false,
  id: 0,
  title: '',
  content: '',
  category: 'task',
};

const formModalSlice = createSlice({
  name: 'formModalSlice',
  initialState,
  reducers: {
    openFormModal: (state) => {
      state.isFormModalOpen = true;
    },
    closeFormModal: (state) => {
      state.isFormModalOpen = false;
      // reset state
      state.id = 0;
      state.title = '';
      state.content = '';
      state.category = 'task';
    },
    dispatchDataToFormState: (state, action: PayloadAction<EditNoteData>) => {
      const { id, title, content, category } = action.payload;
      state.id = id;
      state.title = title;
      state.content = content;
      state.category = category;
    },
  },
});

const { actions, reducer } = formModalSlice;

export const { openFormModal, closeFormModal, dispatchDataToFormState } =
  actions;

export default reducer;
