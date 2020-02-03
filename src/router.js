import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage/IndexPage';
import AppSwitch from './routes/AppSwitch';
import Blog from './routes/Blog/Blog';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <AppSwitch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/blog" exact component={Blog} />
        </AppSwitch>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
