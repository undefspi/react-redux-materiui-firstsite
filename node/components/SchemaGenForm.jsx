import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store/store'
import { updateOutput } from '../actions/actions'

export default React.createClass({
    handleChange(changeObj){
        console.log("This is the change object Value",changeObj.target.value)
    },
    dispatchAction(){
        let stateVal = store.getState()
        console.log("Calling dispatch action")
        console.log("store =", stateVal)
    },
    render(){
        return(
            <div id="textArea">
                <textarea 
                    type="text" 
                    onChange={this.handleChange}
                />
                <div id="button1">
                    <input type="button" value="button1" onClick={this.dispatchAction}/>
                </div>
                <p>{this.props.someprop}</p>  
            </div>
        )
    }
})
