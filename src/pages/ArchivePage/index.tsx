// core
import { useAppSelector } from 'engine/redux/hooks';

// components
import TableWrapper from 'components/TableWrapper';

const notesHeaderLabels = ['Title', 'Created', 'Category', 'Content', 'Dates'];

const ArchivePage = () => {
  const notes = useAppSelector((state) => state.noteSlice.notes);
  return (
    <div>
      <TableWrapper
        headerLabels={notesHeaderLabels}
        columns={6}
        isArchivedMode
        data={notes}
        showButtons
      />
    </div>
  );
};

export default ArchivePage;
