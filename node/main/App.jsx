import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store/store'
import reducer from '../reducers/reducer'
import TextRow from '../components/TextRow.jsx'
import MyComponent from '../components/MyComponent.jsx'

export default React.createClass({

  componentWillMount(){
    console.log("component is going to mount")
  },

  newFunction(){
      console.log("this is being called")
  },
  render(){
    return(
      <div>
        <h1>Welcome, lets explore some material-ui</h1>
        <TextRow someprop="someproptext"/>
        <MyComponent/>
      </div>
    );
  },

})
