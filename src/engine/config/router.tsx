import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from 'App';
import pages from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={pages.main} />
      <Route path="archive" element={pages.archive} />
      <Route path="*" element={pages.notFound} />
    </Route>
  )
);

export default router;
