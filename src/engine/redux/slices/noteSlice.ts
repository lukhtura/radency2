import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NoteData } from 'types';

interface NoteSliceState {
  notes: NoteData[];
}

const initialState: NoteSliceState = {
  notes: [
    {
      id: '1',
      date: 'July 31, 2023',
      title: 'Car Wash',
      category: 'task',
      content: 'car wash before 8/18/2023',
      dates: '8/18/2023',
      isArchived: false,
      icon: 'http://localhost:3000/static/media/task-icon.32a2fa48272d1cdde129460cb36753cb.svg',
    },
    {
      id: '2',
      date: 'August 1, 2023',
      title: 'Buy a Present',
      category: 'task',
      content: 'for Nadia Birthday 9/1/2023',
      dates: '9/1/2023',
      isArchived: true,
      icon: 'http://localhost:3000/static/media/task-icon.32a2fa48272d1cdde129460cb36753cb.svg',
    },
    {
      id: '3',
      date: 'August 1, 2023',
      title: 'Call Mom',
      category: 'task',
      content: 'Do not forget!',
      dates: ' ',
      isArchived: false,
      icon: 'http://localhost:3000/static/media/task-icon.32a2fa48272d1cdde129460cb36753cb.svg',
    },
    {
      id: '4',
      date: 'July 31, 2023',
      title: 'Feed the Cat',
      category: 'task',
      content: 'Barsik wants to eat!',
      dates: ' ',
      isArchived: false,
      icon: 'http://localhost:3000/static/media/task-icon.32a2fa48272d1cdde129460cb36753cb.svg',
    },
    {
      id: '5',
      date: 'August 1, 2023',
      title: 'Make App',
      category: 'task',
      content: 'React-redux',
      dates: ' ',
      isArchived: true,
      icon: 'http://localhost:3000/static/media/task-icon.32a2fa48272d1cdde129460cb36753cb.svg',
    },
    {
      id: '6',
      date: 'August 1, 2023',
      title: 'Banana?',
      category: 'random thoughts',
      content: 'Why not?',
      dates: ' ',
      isArchived: false,
      icon: 'http://localhost:3000/static/media/random-icon.f32a84e95c0aed80517753a942972939.svg',
    },
  ],
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
        existingNote.icon = action.payload.icon;
      } else {
        state.notes.push(action.payload);
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    changeIsArchivedStatus: (state, action: PayloadAction<string>) => {
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
