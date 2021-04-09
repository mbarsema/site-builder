import { combineReducers } from 'redux';
import WorkAreaReducer from './workarea';
import ElementReducer from './element';
import SettingsReducer from './settings';

export default combineReducers({
    workarea: WorkAreaReducer,
    elements: ElementReducer,
    settings: SettingsReducer
});
