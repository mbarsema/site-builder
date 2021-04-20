import React from 'react';
import { NavBar, NavItem, NavDropDown, NavDropDownItem } from '../../../components/Bootstrap/Navigation';

export default function Header() {
    return (
        <div className='header'>
            <NavBar>
                <NavItem>
                    About
                </NavItem>
                <NavItem>
                    Travel
                </NavItem>
                <NavDropDown text='Wedding'>
                    <NavDropDownItem>
                        Wedding
                    </NavDropDownItem>
                    <NavDropDownItem>
                        Ceremony
                    </NavDropDownItem>
                </NavDropDown>
            </NavBar>
        </div>
    );

    /*
    return (
        <div className='header'>
            <NavBar>
                <NavItem>
                    About
                </NavItem>
                <NavItem>
                    Travel
                </NavItem>
                <NavDropDown text='Wedding'>
                    <NavDropDownItem>
                        Wedding
                    </NavDropDownItem>
                    <NavDropDownItem>
                        Reception
                    </NavDropDownItem>
                    <NavDropDownItem>
                        Honeymoon
                    </NavDropDownItem>
                    <NavDropDownItem>
                        Ceremony
                    </NavDropDownItem>
                    <NavDropDownItem>
                        Vendors
                    </NavDropDownItem>
                </NavDropDown>
            </NavBar>
        </div>
    );
    */
}
