// components
import TableWrapper from 'components/TableWrapper';

// styles
import styles from 'pages/MainPage/mainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <TableWrapper isArchivedMode={false} />
    </div>
  );
};

export default MainPage;
