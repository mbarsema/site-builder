import React from 'react';

export default function HamburgerMenu({ children }) {
    return (
        <React.Fragment>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    { children }
                </ul>
            </div>
        </React.Fragment>
    );
}