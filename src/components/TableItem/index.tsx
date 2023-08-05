// components
import TableButtonsPanel from 'components/TableButtonsPanel';
import TableItemTextColumn from 'components/TableItemTextColumn';

//styles
import styles from 'components/TableItem/tableItem.module.scss';

interface TableItemData {
  [key: string]: string | number;
}

interface TableItemProps {
  columns: number;
  id?: string;
  title: string;
  icon: string;
  showButtons: boolean;
  data: TableItemData;
}

const TableItem = ({
  columns,
  id,
  title,
  icon,
  data,
  showButtons = false,
}: TableItemProps) => {
  const preparedData = Object.values(data);

  return (
    <li
      className={styles.item}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(100px, 1fr))`,
      }}
    >
      {/* ICON AND TITLE */}
      <div className={styles.titleContainer}>
        <img src={icon} className={styles.icon} alt="task" />
        <h3 className={styles.title}>{title}</h3>
      </div>
      {/* REST LABELS */}
      {preparedData.map((text, index) => {
        if (typeof text !== 'boolean') {
          return <TableItemTextColumn key={index} text={text} />;
        }
        return null;
      })}
      {/* BUTTONS */}
      {showButtons && <TableButtonsPanel id={id} type="item" />}
    </li>
  );
};

export default TableItem;
