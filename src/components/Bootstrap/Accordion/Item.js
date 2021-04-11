import React from 'react';
import PropTypes from 'prop-types';

export default function AccordionItem({ children }) {
    return (
        <div className="accordion-item">
            { children }
        </div>
    );
}
