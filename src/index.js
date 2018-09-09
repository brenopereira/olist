import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SuccessPage from './success';

ReactDOM.render(<BrowserRouter>
  <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/success" component={SuccessPage} />
  </Switch>
</ BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
