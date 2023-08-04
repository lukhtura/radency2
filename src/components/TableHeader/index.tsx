// core
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';

// components
import TableButton from 'components/TableButton';

// actions
import {
  deleteAllItems,
  archivateAllItems,
} from 'engine/redux/slices/noteSlice';

// style
import styles from 'components/TableHeader/tableHeader.module.scss';

// assets
import deleteIcon from 'assets/trash-icon.svg';
import archiveIcon from 'assets/archive-icon.svg';

interface TableHeaderProps {
  labels: string[];
}

const TableHeader = ({ labels }: TableHeaderProps) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state) => state.technicalSlice.currentPage
  );
  const isArchivePage = currentPage === '/archive';

  return (
    <div className={styles.header}>
      {labels.map((label) => (
        <p className={styles.label}>{label}</p>
      ))}
      <div className={styles.buttonsContainer}>
        <TableButton
          onClick={() => dispatch(archivateAllItems())}
          src={archiveIcon}
          title="Archivate All"
          alt="archivate all"
          /* ROTATE ICON IF ARCHIVE PAGE */
          style={{
            transform: isArchivePage ? 'rotateZ(180deg)' : '',
          }}
        />
        <TableButton
          onClick={() => dispatch(deleteAllItems())}
          src={deleteIcon}
          alt="delete all"
          title="Delete All"
        />
      </div>
    </div>
  );
};

export default TableHeader;
