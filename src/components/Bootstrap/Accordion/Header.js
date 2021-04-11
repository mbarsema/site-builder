import React from 'react';
import PropTypes from 'prop-types';

export default function AccordionHeader({ children, forComponent, isOpen, onClick }) {
    return (
        <h2 className="accordion-header" id={ `heading${forComponent}` }>
            <button
                className={ `accordion-button${ !isOpen ? ' collapsed' : '' }` } 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={ forComponent } 
                aria-expanded="false"
                aria-controls={ forComponent }
                onClick={ () => onClick(forComponent) }
            >
                { children }
            </button>
        </h2>
    );
}

AccordionHeader.propTypes = {
    forComponent: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};
