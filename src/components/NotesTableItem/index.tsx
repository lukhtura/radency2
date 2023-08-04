// components
import TableButtonsPanel from 'components/TableButtonsPanel';

// types
import { NoteListItemData } from 'types';

// utils
import getCategoryIcon from 'utils/getCategoryIcon';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

//styles
import styles from 'components/NotesTableItem/notesTableItem.module.scss';

const NotesTableItem = ({
  id,
  title,
  date,
  category,
  content,
  dates,
}: NoteListItemData) => {
  const icon = getCategoryIcon(category);
  const capitalizedFirstLetterCategory = capitalizeFirstLetter(category);

  return (
    <li className={styles.item}>
      <div className={styles.titleContainer}>
        <img src={icon} className={styles.icon} alt={category} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.text}>{date}</p>
      <p className={styles.text}>{capitalizedFirstLetterCategory}</p>
      <p className={styles.text}>{content}</p>
      <p className={styles.text}>{dates}</p>
      <TableButtonsPanel id={id} type="item" />
    </li>
  );
};

export default NotesTableItem;
