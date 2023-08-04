//core
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'engine/redux/hooks';
import { useLocation } from 'react-router-dom';

// actions
import { openFormModal } from 'engine/redux/slices/formModalSlice';

// components
import CustomButton from 'components/CustomButton';

// styles
import styles from 'components/ControlPanel/controlPanel.module.scss';

const ControlPanel = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const mainPage = pathname === '/';

  function renderNavigateButton(): JSX.Element {
    if (mainPage) {
      return (
        <Link to="/archive">
          <CustomButton type="button">To archive</CustomButton>
        </Link>
      );
    }

    return (
      <Link to="/">
        <CustomButton type="button">To main</CustomButton>
      </Link>
    );
  }

  return (
    <div className={styles.container}>
      {mainPage && (
        <CustomButton type="submit" onClick={() => dispatch(openFormModal())}>
          Create Note
        </CustomButton>
      )}

      {renderNavigateButton()}
    </div>
  );
};

export default ControlPanel;
