import React from 'react';

export default function NavDropDownItem({ children }) {
    return (
        <li>
            <a className="dropdown-item" href="#">
                { children }
            </a>
        </li>
    );
}