import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function NavBar({ children, variant }) {
    return (
        <nav className={ classnames('navbar navbar-expand-lg', {
            'navbar-light bg-light': variant === 'light', 
            'navbar-dark bg-dark': variant === 'dark'
        })}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
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
    variant: PropTypes.string
};

NavBar.defaultProps = {
    variant: 'light'
};
