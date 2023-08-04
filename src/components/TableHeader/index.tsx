// components
import TableButtonsPanel from 'components/TableButtonsPanel';

// style
import styles from 'components/TableHeader/tableHeader.module.scss';

interface TableHeaderProps {
  labels: string[];
  showButtons?: boolean;
}

const TableHeader = ({ labels, showButtons = false }: TableHeaderProps) => {
  return (
    <div className={styles.header}>
      {labels.map((label) => (
        <p className={styles.label}>{label}</p>
      ))}
      {showButtons && <TableButtonsPanel type="header" />}
    </div>
  );
};

export default TableHeader;
