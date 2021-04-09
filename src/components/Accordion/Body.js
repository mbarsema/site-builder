import React from 'react';
import PropTypes from 'prop-types';

export default function AccordionBody({ children, id, isOpen, group }) {
    return (
        <div
            id={ id } 
            className={ `accordion-collapse collapse${ isOpen ? ' show' : ''}` } 
            aria-labelledby={ `heading${id}` }
            data-bs-parent={ `#${group}` }
        >
            <div className='accordion-body'>
                {children}
            </div>
        </div>
    );
}

AccordionBody.propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    group: PropTypes.string.isRequired
};