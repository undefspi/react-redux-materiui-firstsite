import { applyMiddleware, createStore} from 'redux';
import reducer from '../reducers/reducer'

var store = (createStore(reducer));
console.log("store = ",store)
export default store;
