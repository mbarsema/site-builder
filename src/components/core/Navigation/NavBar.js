import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function NavBar({ children, isMobile, variant }) {
    return (
        <nav className={ classnames('navbar', {
            'bg-light': variant === 'light', 
            'bg-dark': variant === 'dark'
        })}>
            <div className="container">
                { isMobile && (
                    <button className="hamburger" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="hamburger-icon" />
                    </button> 
                )}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { children }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    isMobile: PropTypes.bool,
    variant: PropTypes.string
};

NavBar.defaultProps = {
    isMobile: false,
    variant: 'light'
};
