import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Login from './components/login';
import Home from './components/home';

render(<Router history={browserHistory}>
    <Route path="/" component={Login}/>
      <Route path="home" component={Home} />
  </Router>, document.getElementById('app'));


