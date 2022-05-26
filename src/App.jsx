// No need to import "react" just for JSX in React 17+
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { history } from '@/store';
import Layout from './layouts';
import { ErrorBoundary, PageLoading } from './components';
import '@/i18n';
import '@/styles/App.scss';
import theme from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ConnectedRouter history={history}>
          <ErrorBoundary>
            <Suspense fallback={<PageLoading show />}>
              <CssBaseline />
              <Layout />
              <PageLoading />
            </Suspense>
          </ErrorBoundary>
        </ConnectedRouter>
      </Router>
    </ThemeProvider>
  );
};

export default App;
