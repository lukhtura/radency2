// core
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'engine/redux/hooks';

// components
import { Outlet } from 'react-router-dom';
import ControlPanel from 'components/ControlPanel';
import FormModal from 'components/FormModal';

// actions
import { setCurrentPage } from 'engine/redux/slices/technicalSlice';

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(setCurrentPage(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="app">
      <FormModal />
      <ControlPanel />
      <Outlet />
    </div>
  );
}

export default App;
