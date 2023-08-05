// styles
import styles from 'components/TableItemTextColumn/tableItemTextColumn.module.scss';

const TableItemTextColumn = ({ text }: { text: string | number }) => {
  return (
    <div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default TableItemTextColumn;
