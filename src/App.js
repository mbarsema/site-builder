import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Designer from './components/Designer';
import reducer from './reducers/index';

export default function App() {
    return (
        <Provider store={ createStore(reducer) }>
            <Designer />
        </Provider>
    );
}