import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,browserHistory,hashHistory,Link} from 'react-router-dom';

import App from './containers/app';
import About from './containers/about';
import Todos from './containers/todos';

import _ from "lodash";


 ReactDOM.render(
 	<Router history={browserHistory}>
 		<div>
 		  <Route path="/" exact component={App} />
	      <Route path="/about" component={About} />
	      <Route path="/todos" component={Todos} />
    	</div>
 	</Router>,
 	document.getElementById("app")
 );





