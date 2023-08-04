// core
import { useAppSelector } from 'engine/redux/hooks';

// components
import TableWrapper from 'components/NotesTableWrapper';
// styles

const ArchivePage = () => {
  const notes = useAppSelector((state) => state.noteSlice.notes);
  return (
    <div>
      <TableWrapper isArchivedMode={true} data={notes} />
    </div>
  );
};

export default ArchivePage;
