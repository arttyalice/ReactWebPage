import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';
import Propoties from './pages/propoties';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="Header">
                <Navbar className="NavHeader" light expand="md">
                    <NavbarBrand href="/"><img src={require("../assets/img/logo/logo.png")} alt=""/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink to="/" className="NavItems">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Service" className="NavItems">Manage Propoties</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Propoties" className="NavItems">Property Search</NavLink>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;