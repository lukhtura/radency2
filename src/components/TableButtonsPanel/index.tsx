// core
import { useAppSelector } from 'engine/redux/hooks';
import useCRUD from 'engine/hooks/useCRUD';

// components
import TableButton from 'components/TableButton';

// style
import styles from 'components/TableButtonsPanel/tableButtonsaPanel.module.scss';

// assets
import deleteIcon from 'assets/trash-icon.svg';
import archiveIcon from 'assets/archive-icon.svg';
import editIcon from 'assets/pencil-icon.svg';

type PanelType = 'header' | 'item';

interface TableButtonsPanelProps {
  id?: string;
  type: PanelType;
}

function TableButtonsPanel({ id, type }: TableButtonsPanelProps) {
  const currentPage = useAppSelector(
    (state) => state.technicalSlice.currentPage
  );
  const {
    deleteNote,
    toggleArchivedStatus,
    editNode,
    deleteAllNotes,
    archivateAllNotes,
  } = useCRUD();
  const isArchivePage = currentPage === '/archive';
  const isHeader = type === 'header';
  return (
    <div className={styles.panel}>
      {!isHeader && id && (
        <TableButton
          onClick={() => editNode(id)}
          src={editIcon}
          alt="edit"
          title="Edit note"
        />
      )}
      <TableButton
        onClick={() => {
          !isHeader && id ? toggleArchivedStatus(id) : archivateAllNotes();
        }}
        src={archiveIcon}
        alt="archive"
        title="Archivate note"
        style={{
          transform: isArchivePage ? 'rotateZ(180deg)' : '',
        }}
      />
      <TableButton
        onClick={() => {
          !isHeader && id ? deleteNote(id) : deleteAllNotes();
        }}
        src={deleteIcon}
        alt="delete"
        title="Delete note"
      />
    </div>
  );
}

export default TableButtonsPanel;
