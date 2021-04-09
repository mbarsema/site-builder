import React from 'react';
import { useDispatch } from 'react-redux';
import MenuBar from './MenuBar';
import ToolBox from './ToolBox';
import WorkArea from './WorkArea';

export default function Designer() {
    const dispatch = useDispatch();
    const onDrop = (e) => {
        e.preventDefault();
        if ( e.target.className == "workarea" ) {
            // document.getElementById("demo").style.color = "";
            // event.target.style.border = "";
            const data = e.dataTransfer.getData("Text");
            dispatch({
                type: 'DESIGNER_DROP',
                payload: {
                    data
                }
            });
            // e.target.appendChild(document.getElementById(data));
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
        <div id='designer' className='designer'>
            <MenuBar />
            <ToolBox />
            <WorkArea
                onDrop={ onDrop }
                onDragOver={ onDragOver }
                onDragLeave={ onDragLeave }
            />
        </div>
    );
}
