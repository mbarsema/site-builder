import { combineReducers } from 'redux';
import AppReducer from './app';
import ElementReducer from './element';
import SandboxReducer from './sandbox';
import SettingsReducer from './settings';

export default combineReducers({
    app: AppReducer,
    elements: ElementReducer,
    sandbox: SandboxReducer,
    settings: SettingsReducer
});
