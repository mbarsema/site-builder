import React from 'react';
import { useSelector } from 'react-redux';
import Engine from './Engine';
import Sandbox from './Sandbox';

export default function Designer() {
    const { isSandbox } = useSelector(state => {
        return {
            isSandbox: state.app.isSandbox
        };
    });

    return isSandbox ? <Sandbox /> : <Engine />;
}