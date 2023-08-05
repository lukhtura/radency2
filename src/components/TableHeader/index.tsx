// components
import TableButtonsPanel from 'components/TableButtonsPanel';

// style
import styles from 'components/TableHeader/tableHeader.module.scss';

interface TableHeaderProps {
  columns: number;
  labels: string[];
  showButtons?: boolean;
}

const TableHeader = ({
  columns,
  labels,
  showButtons = false,
}: TableHeaderProps) => {
  return (
    <div
      className={styles.header}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(100px, 1fr))`,
      }}
    >
      {labels.map((label) => (
        <p key={label} className={styles.label}>
          {label}
        </p>
      ))}
      {showButtons && <TableButtonsPanel type="header" />}
    </div>
  );
};

export default TableHeader;
