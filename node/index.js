import React from 'react';
import { render } from 'react-dom';
import App from './main/App.jsx';

var smash = function(){
    console.log("smash this out")
    return true;
}

render(
  <App/>,
  document.getElementById('app'),function(){
    console.log("Calling function")
  }
)
