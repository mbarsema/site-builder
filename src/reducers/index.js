import { combineReducers } from 'redux';
import AppReducer from './app';
import ElementReducer from './element';
import LayoutReducer from './layout';
import SandboxReducer from './sandbox';
import SettingsReducer from './settings';

export default combineReducers({
    app: AppReducer,
    elements: ElementReducer,
    layout: LayoutReducer,
    sandbox: SandboxReducer,
    settings: SettingsReducer
});
