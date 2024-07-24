import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProvider } from '@edx/frontend-platform/react';

import { getConfig } from '@edx/frontend-platform';
import Footer from '@edx/frontend-component-footer';
import Header from '@edx/frontend-component-header';

import store from 'data/store';
import GradebookPage from 'containers/GradebookPage';
import './App.scss';

const App = () => (
  <AppProvider store={store}>
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route
              path="/:courseId"
              component={GradebookPage}
            />
          </Switch>
        </main>
        <Footer logo={getConfig().LOGO_POWERED_BY_OPEN_EDX_URL_SVG} />
      </div>
    </Router>
  </AppProvider>
);

export default App;
