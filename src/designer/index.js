import React from 'react';
import Page from './Page';

export default function Factory(props) {
    const elemType = props.elementType;
    const first = elemType.substr(0, 1).toUpperCase();
    const rest = elemType.substr(1);
    const type = `${first}${rest}`; 

    const map = {
        Page: () => <Page { ...props } />
    };

    return map[type] ? map[type]() : null;
}
