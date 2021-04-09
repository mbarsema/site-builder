import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import Brand from '../components/Navigation/Brand';
import HamburgerMenu from '../components/Navigation/HamburgerMenu';
import NavItem from '../components/Navigation/NavItem';
import NavDropDown from '../components/Navigation/NavDropDown';
import NavDropDownItem from '../components/Navigation/NavDropDownItem'

export default function MenuBar() {
    return (
        <NavBar>
            <Brand>Site Builder</Brand>
            <HamburgerMenu>
                <NavDropDown text='New'>
                    <NavDropDownItem>
                        From Wizard
                    </NavDropDownItem>
                    <NavDropDownItem>
                        From Designer
                    </NavDropDownItem>
                </NavDropDown>
               <NavItem>Item 1</NavItem>
            </HamburgerMenu>
        </NavBar>
    );
}
