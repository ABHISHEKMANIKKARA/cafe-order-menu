import {combineReducers} from 'redux';
import menus from './menu.js';
import cart from './cartcount.js';

const rootReducer=combineReducers({menus,cart})
export default rootReducer;