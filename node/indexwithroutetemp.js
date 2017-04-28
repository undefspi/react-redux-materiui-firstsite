import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './main/App.jsx';


render((

    
    <Router>
      <Route exact path="/" component={App}/>
    </Router>
), document.getElementById('app'))
