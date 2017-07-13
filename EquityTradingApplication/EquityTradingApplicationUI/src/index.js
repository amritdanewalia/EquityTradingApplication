import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Login from './components/login';
import Home from './components/home';
import EquitiesTable from './components/equitiesTable';
import Orders from './components/orders';
import Blocks from './components/blocks';
import {Provider} from "react-redux";
import store from "./store";

render(<Provider store ={store}><Router history={browserHistory}>
    <Route path="/" component={Login}/>
      <Route path="main" component={Home} >
       <Route path="home" component={EquitiesTable} />
      <Route path="orders" component={Orders} />
      <Route path="blocks" component={Blocks} /> </Route>
  </Router></Provider>, document.getElementById('app'));


function requireAuth(nextState, replace) {  
  if (!localStorage.jwt) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

