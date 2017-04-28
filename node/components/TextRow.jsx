import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store/store'
import { updateOutput } from '../actions/actions'
import SchemaGenForm from './SchemaGenForm.jsx'


export default React.createClass({

   generateRows(){
        var key = 0;
        var rows = [
            <SchemaGenForm key='1'/>
        ]        

        return rows;
   },
   render(){
        return(
            <div>
                {
                    this.generateRows()
                }
            </div>
        )
    }
})