import { combineReducers } from 'redux';
import WorkAreaReducer from './workarea';
import ElementReducer from './element';

export default combineReducers({
    workarea: WorkAreaReducer,
    elements: ElementReducer
});
