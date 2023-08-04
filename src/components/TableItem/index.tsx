// core
import { useAppSelector } from 'engine/redux/hooks';
import useCRUD from 'engine/hooks/useCRUD';

// components
import TableButton from 'components/TableButton';

// types
import { NoteListItemData } from 'types';

// utils
import getCategoryIcon from 'utils/getCategoryIcon';

//styles
import styles from 'components/TableItem/tableItem.module.scss';

// assets
import deleteIcon from 'assets/trash-icon.svg';
import archiveIcon from 'assets/archive-icon.svg';
import editIcon from 'assets/pencil-icon.svg';

const TableItem = ({
  id,
  title,
  date,
  category,
  content,
  dates,
}: NoteListItemData) => {
  const currentPage = useAppSelector(
    (state) => state.technicalSlice.currentPage
  );
  const { deleteNote, toggleArchivedStatus, editNode } = useCRUD();
  const icon = getCategoryIcon(category);
  const isArchivePage = currentPage === '/archive';

  return (
    <li className={styles.item}>
      <div className={styles.titleContainer}>
        <img src={icon} className={styles.icon} alt={category} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.text}>{date}</p>
      <p className={styles.text}>{category}</p>
      <p className={styles.text}>{content}</p>
      <p className={styles.text}>{dates}</p>
      <div>
        <TableButton
          onClick={() => editNode(id)}
          src={editIcon}
          alt="edit"
          title="Edit note"
        />
        <TableButton
          onClick={() => toggleArchivedStatus(id)}
          src={archiveIcon}
          alt="archive"
          title="Archivate note"
          style={{
            transform: isArchivePage ? 'rotateZ(180deg)' : '',
          }}
        />
        <TableButton
          onClick={() => deleteNote(id)}
          src={deleteIcon}
          alt="delete"
          title="Delete note"
        />
      </div>
    </li>
  );
};

export default TableItem;
