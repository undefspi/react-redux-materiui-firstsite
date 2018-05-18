import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './main/App.jsx';

var smash = function(){
    console.log("smash this out")
    return true;
}

var a11y = require('react-a11y')

a11y(React, {ReactDOM: ReactDOM, throw: true, includeSrcNode:true})

render(
  <App/>,
  document.getElementById('app'),function(){
    console.log("Calling function")
  }
)
