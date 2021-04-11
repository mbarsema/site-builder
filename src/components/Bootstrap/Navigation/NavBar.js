import React from 'react';

export default function NavBar({ children }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                { children }
            </div>
        </nav>
    );
}
