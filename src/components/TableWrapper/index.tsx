// hooks
import useNotesData from 'engine/hooks/useNotesData';

// components
import TableHeader from 'components/TableHeader';
import TableItem from 'components/TableItem';

// types
import { NoteData } from 'types';

//style
import styles from 'components/TableWrapper/tableWrapper.module.scss';

const headerLabels = ['Title', 'Created', 'Category', 'Content', 'Dates'];

interface TableWrapperProps {
  isArchivedMode: boolean;
}

const TableWrapper = ({ isArchivedMode }: TableWrapperProps) => {
  const notesData: NoteData[] = useNotesData();

  function renderNotes(notesArr: NoteData[]) {
    return notesArr.map(
      (note) =>
        /* CHECK ARCHIVED STATUS */
        note.isArchived === isArchivedMode && (
          <TableItem
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.date}
            category={note.category}
            content={note.content}
            dates={note.dates}
          />
        )
    );
  }

  return (
    <div className={styles.wrapper}>
      <TableHeader labels={headerLabels} />
      <ul>{renderNotes(notesData)}</ul>
    </div>
  );
};

export default TableWrapper;
