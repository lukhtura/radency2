// pages
import MainPage from 'pages/MainPage';
import ArchivePage from 'pages/ArchivePage';
import NotFoundPage from 'pages/NotFoundPage';

interface Pages {
  main: JSX.Element;
  archive: JSX.Element;
  notFound: JSX.Element;
}

const pages: Pages = {
  main: <MainPage />,
  archive: <ArchivePage />,
  notFound: <NotFoundPage />,
};

export default pages;
