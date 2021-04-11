import React from 'react';
import { useDispatch } from 'react-redux';
import ToolBox from './ToolBox';
import WorkArea from './WorkArea';

export default function Sandbox() {
    const dispatch = useDispatch();
    const onDrop = (e) => {
        e.preventDefault();
        if ( e.target.className == "workarea" ) {
            const data = e.dataTransfer.getData("Text");
            dispatch({
                type: 'DESIGNER_DROP',
                payload: {
                    data
                }
            });
        }
    }

    const onDragOver = (e) => {
        e.preventDefault();
        dispatch({ type: 'DESIGNER_ENTER' });
    }

    const onDragLeave = (e) => {
        e.preventDefault();
        dispatch({ type: 'DESIGNER_EXIT' });
    }

    return (
        <div id='sandbox' className='sandbox'>
            <ToolBox />
            <WorkArea
                onDrop={ onDrop }
                onDragOver={ onDragOver }
                onDragLeave={ onDragLeave }
            />
        </div>
    );
}
