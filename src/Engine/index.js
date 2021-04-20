import React from 'react';
import { useSelector } from 'react-redux';
import components from '../components';

export function Tag(element) {
    const type = element.elementType;
    const { children, ...props } = element;
    const Element = components[type];

    if (!Element) {
        return { ...element, ref: React.createRef };
    }

    return (
        <Element { ...props }>
            { typeof children !== 'object' 
                ? children : 
                children.map((child, idx) => <Tag { ...child } key={ `${child.elementType}-${idx}` } />)}
        </Element>
    );
}

export default function Engine() {
    const { layout } = useSelector(state => {
        return { layout: state.layout };
    });

    return ( 
        <React.Fragment>
        { layout.children.map((props, idx) => <Tag key={ `${props.elementType}-${idx}` } { ...props } /> )}
        </React.Fragment>
    );;

}
