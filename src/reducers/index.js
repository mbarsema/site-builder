import { combineReducers } from 'redux';
import ElementReducer from './element';
import SandboxReducer from './sandbox';
import SettingsReducer from './settings';

export default combineReducers({
    elements: ElementReducer,
    sandbox: SandboxReducer,
    settings: SettingsReducer
});
