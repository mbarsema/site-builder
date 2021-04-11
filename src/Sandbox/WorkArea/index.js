import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Factory from '../Factory';

export default function WorkArea({ onDrop, onDragOver, onDragLeave }) {
    const { elements } = useSelector(state => {
        return {
            elements: state.sandbox.elements
        };
    });

    return (
        <div
            className='workarea'
            onDrop={ onDrop }
            onDragOver={ onDragOver }
            onDragLeave={ onDragLeave }
        >
            {elements.map((element, idx) => (
                <Factory
                    key={ `${idx}-${element.id || 'new'}` }
                    { ...element } 
                />
            ))}
        </div>
    );
}

WorkArea.propTypes = {
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired,
    onDragLeave: PropTypes.func.isRequired
};
