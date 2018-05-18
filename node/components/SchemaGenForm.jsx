import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store/store'
import { updateOutput } from '../actions/actions'

export default React.createClass({
    //always sets the component state
    getInitialState(){
        return {
            active:false,
            isLast:false,
            value:''
        }
    },

    componentDidUpdate(){
         if(this.state.active){
                this.focusDiv();
         }
    },
    componentDidMount(){
        console.log("calling component: ", "nameInput1_" + this.props.rowLast)
        this.focusDiv();
    },

    isLast(){
        let rows = document.getElementById("rows")
        console.log("calling isLast", rows)
    },

    focusDiv(){
        this.isLast()
        //if(this.props.rowLast !== undefined && this.props.rowLast != ''){
            
            //ReactDOM.findDOMNode(this.refs.nameInput1_Last).focus();
       // }
        
    },

    //on every keyboard entry the state of the object changes
    handleChange(changeObj){
        console.warn("This is the change object Value",changeObj.target.value)
        console.log('Component State Before',this.state.value)
        this.setState({value:changeObj.target.value})
        setTimeout(this.printStateValue,100)
          
    },

    printStateValue(){
        console.log('Component State After', this.state.value)
    },

    //This is responsible for taking the component state and updating that value 
    //to the centeral store. The value in this can now be passed through
    dispatchAction(){
        console.log("Before Store State Change", store.getState().data.GenerateSchema.input)
        console.log("Calling dispatch action for value ", this.state.value)
        setTimeout(function(){
            console.log("in timeout")
            
        },10000);
        store.dispatch(updateOutput(this.state.value))      
        console.log("After Store State Change", store.getState().data.GenerateSchema.input)
    },
    render(){
        return(
            <div id="rows">
                <h2 className="standardH2">This is the SchemaForm Component</h2>
                <input
                    aria-label="enter text" 
                    type="text" 
                    name="input1"
                    onChange={this.handleChange}
                    value={this.state.value}
                    ref={"nameInput1_" + this.state.isLast}
                />
                <input
                    type="text" 
                    aria-label="bob bobbby bob"
                    onChange={this.handleChange}
                    value={this.state.value}
                    ref={"nameInput2_ " + this.state.isLast}
                />
                <input  
                    type="button" 
                    value="button1" 
                    onClick={this.dispatchAction}
                    aria-label="buttony buttonface"
                    />
                <p>{this.props.someprop}</p>  
            </div>
        )
    }
})
