import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Note } from 'types';

interface NotesDataSliceState {
  notes: Note[];
}

const initialState: NotesDataSliceState = {
  notes: [
    {
      id: 1,
      date: 'July 31, 2023',
      title: 'Car Wash',
      category: 'Task',
      content: 'car wash before 8/18/2023',
      dates: ['8/18/2023'],
      isArchived: false,
    },
    {
      id: 2,
      date: 'August 1, 2023',
      title: 'Buy a Present',
      category: 'Task',
      content: 'for Nadia Birthday 9/1/2023',
      dates: ['9/1/2023'],
      isArchived: false,
    },
    {
      id: 3,
      date: 'August 1, 2023',
      title: 'Call Mom',
      category: 'Task',
      content: 'Do not forget!',
      dates: [],
      isArchived: false,
    },
    {
      id: 4,
      date: 'July 31, 2023',
      title: 'Car Wash',
      category: 'Idea',
      content: 'car wash before 8/18/2023',
      dates: ['8/18/2023'],
      isArchived: false,
    },
    {
      id: 5,
      date: 'August 1, 2023',
      title: 'Buy a Present',
      category: 'Task',
      content: 'for Nadia Birthday 9/1/2023',
      dates: ['9/1/2023'],
      isArchived: true,
    },
    {
      id: 6,
      date: 'August 1, 2023',
      title: 'Call Mom',
      category: 'Idea',
      content: 'Do not forget!',
      dates: [],
      isArchived: false,
    },
  ],
};

const notesDataSlice = createSlice({
  name: 'notesDataSlice',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter(note => note.id === action.payload);
    },
    // editNote: (state, action: PayloadAction<Note>) => {
    //   state.notes.push(action.payload);
    // },
  },
});

const { actions, reducer } = notesDataSlice;

export const {
  addNote,
  deleteNote
} = actions;

export default reducer;
