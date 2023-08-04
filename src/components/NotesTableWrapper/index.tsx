// components
import TableHeader from 'components/TableHeader';
import NotesTableItem from 'components/NotesTableItem';

// types
import { NoteData } from 'types';

//style
import styles from 'components/NotesTableWrapper/notesTableWrapper.module.scss';

const headerLabels = ['Title', 'Created', 'Category', 'Content', 'Dates'];

interface NotesTableWrapperProps {
  data: NoteData[];
  isArchivedMode: boolean;
}

const NotesTableWrapper = ({
  data,
  isArchivedMode,
}: NotesTableWrapperProps) => {
  function renderNotes(notesArr: NoteData[]) {
    return notesArr.map(
      (note) =>
        /* CHECK ARCHIVED STATUS */
        note.isArchived === isArchivedMode && (
          <NotesTableItem
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
      <TableHeader labels={headerLabels} showButtons={true} />
      <ul>{renderNotes(data)}</ul>
    </div>
  );
};

export default NotesTableWrapper;
