import React from 'react';

export default function NavDropDown({ children, text }) {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            { text }
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           { children }
          </ul>
        </li>
    )
}