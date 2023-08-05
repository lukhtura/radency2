export interface NoteData {
  id: string;
  date: string;
  title: string;
  category: string;
  content: string;
  dates: string;
  isArchived: boolean;
  icon: string;
}

export interface NoteListItemData extends Omit<NoteData, 'isArchived'> {}

export interface EditNoteData
  extends Pick<NoteData, 'id' | 'title' | 'content' | 'category'> {}

export interface FormData extends Omit<EditNoteData, 'id'> {}
