/* IN THIS FILE MAIN CRUD OPERATIONS FOR NOTES */

//core
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';
import { v4 as uuid } from 'uuid';

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

// utils
import getCategoryIcon from 'utils/getCategoryIcon';

interface UseCRUDRes {
  addNote: (data: FormData) => void;
  deleteNote: (id: string) => void;
  toggleArchivedStatus: (id: string) => void;
  editNode: (id: string) => void;
  deleteAllNotes: () => void;
  archivateAllNotes: () => void;
}

function useCRUD(): UseCRUDRes {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector((state) => state.noteSlice);
  const { id } = useAppSelector((state) => state.formModalSlice);

  function addNote(data: FormData): void {
    /* GET DATA FROM FORM */
    const { title, content, category } = data;
    /* GET DATE */
    const date = new Date();

    /* CREATE NOTE OBJECT */
    const noteObj: NoteData = {
      title,
      date: formatDate(date),
      category: category,
      // if item already exist, use id from form state slice, if not, create new
      id: id ? id : uuid(),
      content,
      dates: extractDates(content),
      isArchived: false,
      icon: getCategoryIcon(category),
    };

    dispatch(addItem(noteObj));
    dispatch(closeFormModal());
  }

  function deleteNote(id: string): void {
    dispatch(deleteItem(id));
  }

  function toggleArchivedStatus(id: string): void {
    dispatch(changeIsArchivedStatus(id));
  }

  function editNode(id: string) {
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
