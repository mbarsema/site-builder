import React from 'react';
import { useSelector } from 'react-redux';
import Layouts from './Layouts';
import Sandbox from './Sandbox';

export default function Designer() {
    const { layout } = useSelector(state => {
        return {
            layout: state.app.layout
        };
    });

    return Layouts[layout] ? Layouts[layout]() : <Sandbox />;
}