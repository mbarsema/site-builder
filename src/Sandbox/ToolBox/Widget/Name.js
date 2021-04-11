import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'

export default function TextInput() {
    const dispatch = useDispatch();
    const onDrag = (e) => {
        dispatch({
            type: 'DESIGNER_DRAG',
            payload: {
                elementType: 'Name'
            }
        });
    }

    return (
        <div draggable={ true } onDragStart={ onDrag }>
            Name
        </div>
    )
}
