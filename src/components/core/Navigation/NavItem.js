import React from 'react';

export default function NavItem({ children }) {
    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                {children}
            </a>
        </li>
    );
}
