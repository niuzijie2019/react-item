import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import DetailApp from '@/layout/DetailApp';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './main.scss';
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <Switch>
        <Route path = '/detail' component = { DetailApp } />
        <Route path = '/' component = { App } />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
