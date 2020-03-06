import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

import configureStore from './state/configureStore';
import Layout from './views/layout/Layout.view';

export const store = configureStore();

const App = () => (
    <Provider store={store}>
      <BrowserRouter>
        <BreadcrumbsProvider>
          <Layout />
        </BreadcrumbsProvider>
      </BrowserRouter>
    </Provider>
);

export default App;
