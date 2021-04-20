import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NavDropDown({ children, text }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <li className="nav-item dropdown" onBlur={ () => setIsOpen(false) } >
            <a
                className="nav-link"
                href="#"
                id={ text }
                role="button"
                aria-expanded="false"
                onClick={ () => setIsOpen(!isOpen) }
            >
                { text }
            </a>
            { isOpen && ( 
                <ul className="dropdown-menu" aria-labelledby={ text }>
                    { children }
                </ul>
            )}
        </li>
    );
}

NavDropDown.propTypes = {
    text: PropTypes.string.isRequired
};