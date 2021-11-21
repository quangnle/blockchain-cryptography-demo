// No need to import "react" just for JSX in React 17+
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '@/store';
import Layout from './layouts';
import { ErrorBoundary, PageLoading } from './components';
import './utils';
import '@/i18n';
import '@/styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoading show />}>
            <Layout />
            <PageLoading />
            <h1>{process.env.REACT_APP_NAME} env variables</h1>
            <h1>Author: {process.env.REACT_APP_AUTHOR}</h1>
          </Suspense>
        </ErrorBoundary>
      </ConnectedRouter>
    </Router>
  );
};

export default App;
