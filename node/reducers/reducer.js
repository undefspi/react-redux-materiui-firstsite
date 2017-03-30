//reducer
var initialState = {
  data:{
    "personal":{
      "name":'',
      "age":null
    },
    "GenerateSchema":{
      "input":'',
      "output":''
    }
  }
}

const reducer = function(state = initialState, action){
  console.log('Main Application Reducer called with state',state,'and action',action)
 
 switch(action.type){
   case 'GENERATE_SCHEMA':
    state.data.GenerateSchema.input = action.value
    return state;
    break;
  default:
    return state;
 }
}

export default reducer;
