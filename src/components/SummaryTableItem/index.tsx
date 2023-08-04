// utils
import getCategoryIcon from 'utils/getCategoryIcon';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

//styles
import styles from 'components/SummaryTableItem/summaryTableItem.module.scss';

interface SummaryTableItemProps {
  category: string;
  active: number;
  archived: number;
}

const SummaryTableItem = ({
  category,
  active,
  archived,
}: SummaryTableItemProps) => {
  const icon = getCategoryIcon(category);
  const capitalizedFirstLetterCategory = capitalizeFirstLetter(category);

  return (
    <li className={styles.item}>
      <div className={styles.titleContainer}>
        <img src={icon} className={styles.icon} alt={category} />
        <h3 className={styles.title}>{capitalizedFirstLetterCategory}</h3>
      </div>
      <p className={styles.text}>{active}</p>
      <p className={styles.text}>{archived}</p>
    </li>
  );
};

export default SummaryTableItem;
