import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import Roots from './components/roots';
import Home from './views/index/home';
import About from './views/index/about';
import NotFind from './views/index/notFind';
import Mine from './views/index/mine';
import New from './views/index/new';
import Regist from './views/index/regist';


Route.propTypes = {
  path:PropTypes.string.isRequired,
  component:PropTypes.func.isRequired
};
IndexRoute.propTypes = {
  component:PropTypes.func.isRequired
};
Router.propTypes = {
  history:PropTypes.object
};
Redirect.propTypes = {
  from:PropTypes.string.isRequired,
  to:PropTypes.string.isRequired
};

// Render the main component into the dom
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Roots}>
      <IndexRoute component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/mine' component={Mine}/>
      <Route path='/new' component={New}/>
      <Route path='/regist' component={Regist}/>
      <Route path='*' component={NotFind}/>
      <Redirect from="About" to="Mine" />
    </Route>
  </Router>,
  document.getElementById('root')
);
