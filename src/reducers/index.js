import {combineReducers} from "redux";
import todos from "./todos";
import counter from "./count";


export default combineReducers({
	todos,
	counter
})