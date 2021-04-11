import React from 'react';
import { useDispatch } from 'react-redux';

export default function ToolboxItem({ elementType, renderer, text }) {
    const dispatch = useDispatch();
    const onDrag = (e) => {
        dispatch({
            type: 'DESIGNER_DRAG',
            payload: {
                elementType,
                renderer
            }
        });
    }

    return (
        <div draggable={ true } onDragStart={ onDrag }>
            { text }
        </div>
    )
}