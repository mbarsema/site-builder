import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Sandbox from './Sandbox';
import reducer from './reducers/index';

export default function App() {
    return (
        <Provider store={ createStore(reducer) }>
            <Sandbox />
        </Provider>
    );
}