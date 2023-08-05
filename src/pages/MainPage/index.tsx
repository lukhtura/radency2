// core
import { useAppSelector } from 'engine/redux/hooks';

// components
import TableWrapper from 'components/TableWrapper';

// utils
import extractCategoriesData from 'utils/extractCategoriesData';

// styles
import styles from 'pages/MainPage/mainPage.module.scss';

const notesHeaderLabels = ['Title', 'Created', 'Category', 'Content', 'Dates'];
const summaryHeaderLabels = ['Notes Category', 'Active', 'Archived'];

const MainPage = () => {
  const notes = useAppSelector((state) => state.noteSlice.notes);

  return (
    <div className={styles.mainPage}>
      <TableWrapper
        headerLabels={notesHeaderLabels}
        showButtons
        columns={6}
        data={notes}
        isArchivedMode={false}
      />
      <TableWrapper
        headerLabels={summaryHeaderLabels}
        columns={3}
        data={extractCategoriesData(notes)}
      />
    </div>
  );
};

export default MainPage;
