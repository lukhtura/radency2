// core
import { useAppSelector } from 'engine/redux/hooks';

// components
import NotesTableWrapper from 'components/NotesTableWrapper';
import SummaryTableWrapper from 'components/SummaryTableWrapper';

// styles
import styles from 'pages/MainPage/mainPage.module.scss';

const MainPage = () => {
  const notes = useAppSelector((state) => state.noteSlice.notes);
  return (
    <div className={styles.mainPage}>
      <NotesTableWrapper data={notes} isArchivedMode={false} />
      <SummaryTableWrapper data={notes} />
    </div>
  );
};

export default MainPage;
