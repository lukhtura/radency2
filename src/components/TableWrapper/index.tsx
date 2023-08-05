// components
import TableHeader from 'components/TableHeader';
import TableItem from 'components/TableItem';

//style
import styles from 'components/TableWrapper/tableWrapper.module.scss';

interface TableItemData {
  id: string;
  title: string;
  icon: string;
  [key: string]: any;
}

interface NotesTableWrapperProps {
  columns: number;
  data: TableItemData[];
  isArchivedMode?: boolean;
  showButtons?: boolean;
  headerLabels: string[];
}

const NotesTableWrapper = ({
  columns,
  data,
  isArchivedMode,
  showButtons,
  headerLabels,
}: NotesTableWrapperProps) => {
  function renderTableItems(dataArr: TableItemData[]) {
    return dataArr.map(({ id, title, icon, ...rest }) => {
      /* CHECK ARCHIVED STATUS */
      if (isArchivedMode && rest.isArchived === isArchivedMode) {
        return (
          <TableItem
            columns={columns}
            key={id}
            id={id}
            title={title}
            icon={icon}
            data={rest}
            showButtons={showButtons ? showButtons : false}
          />
        );
      }

      if (!isArchivedMode && rest.isArchived === isArchivedMode) {
        return (
          <TableItem
            columns={columns}
            key={id}
            id={id}
            title={title}
            icon={icon}
            data={rest}
            showButtons={showButtons ? showButtons : false}
          />
        );
      } else {
        return null;
      }
    });
  }

  return (
    <div className={styles.wrapper}>
      <TableHeader
        columns={columns}
        labels={headerLabels}
        showButtons={showButtons}
      />
      <ul>{renderTableItems(data)}</ul>
    </div>
  );
};

export default NotesTableWrapper;
