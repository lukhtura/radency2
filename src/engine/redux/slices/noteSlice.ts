import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NoteData } from 'types';

interface NoteSliceState {
  notes: NoteData[];
  notesIdCounter: number;
}

const initialState: NoteSliceState = {
  notes: [
    {
      id: 1,
      date: 'July 31, 2023',
      title: 'Car Wash',
      category: 'task',
      content: 'car wash before 8/18/2023',
      dates: '8/18/2023',
      isArchived: false,
    },
    {
      id: 2,
      date: 'August 1, 2023',
      title: 'Buy a Present',
      category: 'task',
      content: 'for Nadia Birthday 9/1/2023',
      dates: '9/1/2023',
      isArchived: true,
    },
    {
      id: 3,
      date: 'August 1, 2023',
      title: 'Call Mom',
      category: 'task',
      content: 'Do not forget!',
      dates: '',
      isArchived: false,
    },
    {
      id: 4,
      date: 'July 31, 2023',
      title: 'Feed the Cat',
      category: 'task',
      content: 'Barsik wants to eat!',
      dates: '',
      isArchived: false,
    },
    {
      id: 5,
      date: 'August 1, 2023',
      title: 'Make App',
      category: 'task',
      content: 'React-redux',
      dates: '',
      isArchived: true,
    },
    {
      id: 6,
      date: 'August 1, 2023',
      title: 'Banana?',
      category: 'random thoughts',
      content: 'Why not?',
      dates: '',
      isArchived: false,
    },
  ],
  notesIdCounter: 7,
};

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<NoteData>) => {
      const existingNote = state.notes.find(
        (note) => note.id === action.payload.id
      );
      if (existingNote) {
        existingNote.title = action.payload.title;
        existingNote.content = action.payload.content;
        existingNote.category = action.payload.category;
        existingNote.dates = action.payload.dates;
      } else {
        state.notes.push(action.payload);
        state.notesIdCounter++;
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    changeIsArchivedStatus: (state, action: PayloadAction<number>) => {
      state.notes.forEach((note) => {
        if (note.id === action.payload) {
          note.isArchived = !note.isArchived;
        }
      });
    },
    deleteAllItems: (state) => {
      state.notes = [];
    },
    archivateAllItems: (state) => {
      state.notes.forEach((note) => (note.isArchived = true));
    },
  },
});

const { actions, reducer } = noteSlice;

export const {
  addItem,
  deleteItem,
  changeIsArchivedStatus,
  deleteAllItems,
  archivateAllItems,
} = actions;

export default reducer;
