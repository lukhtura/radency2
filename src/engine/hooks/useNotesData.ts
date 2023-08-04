// core
import { useAppSelector } from 'engine/redux/hooks';

//types
import { NoteData } from 'types';

function useNotesData(): NoteData[] {
  const notes = useAppSelector((state) => state.noteSlice.notes);
  return notes;
}

export default useNotesData;
