import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'

export default function NewPage() {
    const dispatch = useDispatch();
    const onDrag = (e) => {
        dispatch({
            type: 'DESIGNER_DRAG',
            payload: {
                elementType: 'page'
            }
        });
    }

    return (
        <div draggable={ true } onDragStart={ onDrag }>
            Add New Page
        </div>
    )
}