import React from 'react';
import { useSelector } from 'react-redux';
import BootstrapRenderer from '../renderer/Bootstrap';

export default function Factory(props) {
    const { renderer } = useSelector(state => ({
        renderer: state.settings.renderer
    }));

    const map = {
        Bootstrap: () => <BootstrapRenderer { ...props } />
    };

    return map[renderer] ? map[renderer]() : null;
}
