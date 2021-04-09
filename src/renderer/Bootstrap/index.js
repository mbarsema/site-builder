import React from 'react';
import TextInput from './Form/TextInput';

export default function BootstrapRenderer(props) {
    const elemType = props.elementType;
    const map = {
        TextInput: () => <TextInput { ...props } />
    };

    return map[elemType] ? map[elemType]() : null;
}
