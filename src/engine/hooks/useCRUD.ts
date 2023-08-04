/* IN THIS FILE MAIN CRUD OPERATIONS FOR NOTES */

//core
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';

// actions
import {
  addItem,
  deleteItem,
  changeIsArchivedStatus,
  deleteAllItems,
  archivateAllItems,
} from 'engine/redux/slices/noteSlice';
import {
  openFormModal,
  dispatchDataToFormState,
  closeFormModal,
} from 'engine/redux/slices/formModalSlice';

//actions
import formatDate from 'utils/formatDate';
import extractDates from 'utils/extractDates';

// types
import { NoteData, EditNoteData, FormData } from 'types';

interface UseCRUDRes {
  addNote: (data: FormData) => void;
  deleteNote: (id: number) => void;
  toggleArchivedStatus: (id: number) => void;
  editNode: (id: number) => void;
  deleteAllNotes: () => void;
  archivateAllNotes: () => void;
}

function useCRUD(): UseCRUDRes {
  const dispatch = useAppDispatch();
  const { notes, notesIdCounter } = useAppSelector((state) => state.noteSlice);
  const { id } = useAppSelector((state) => state.formModalSlice);

  function addNote(data: FormData): void {
    /* GET DATA FROM FORM */
    const { title, content, category } = data;
    /* GET DATE */
    const date = new Date();

    const noteObj: NoteData = {
      title,
      category,
      content,
      // if item already exist, use id from form state slice, if not, create new
      id: id !== 0 ? id : notesIdCounter,
      date: formatDate(date),
      dates: extractDates(content),
      isArchived: false,
    };

    dispatch(addItem(noteObj));
    dispatch(closeFormModal());
  }

  function deleteNote(id: number): void {
    dispatch(deleteItem(id));
  }

  function toggleArchivedStatus(id: number): void {
    dispatch(changeIsArchivedStatus(id));
  }

  function editNode(id: number) {
    const editedNote = notes.find((note) => note.id === id);
    if (editedNote) {
      const editedNoteData: EditNoteData = {
        id,
        title: editedNote.title,
        content: editedNote.content,
        category: editedNote.category,
      };

      dispatch(dispatchDataToFormState(editedNoteData));
      dispatch(openFormModal());
    }
  }

  function deleteAllNotes() {
    dispatch(deleteAllItems());
  }

  function archivateAllNotes() {
    dispatch(archivateAllItems());
  }

  return {
    addNote,
    deleteNote,
    toggleArchivedStatus,
    editNode,
    deleteAllNotes,
    archivateAllNotes,
  };
}

export default useCRUD;
