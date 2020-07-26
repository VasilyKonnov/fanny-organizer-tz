
import { combineReducers } from "redux";
import homeReducer from './home.js';
import profileReducer from './tasks.js';

export default combineReducers({
    home: homeReducer,
    profile: profileReducer
})