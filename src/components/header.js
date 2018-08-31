import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';

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
                <NavbarBrand href="/"><img src={require("../assets/img/logo/logo_cut.png")} alt=""/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" className="NavItems">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Service" className="NavItems">Service</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Propoties" className="NavItems">Property Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/About" className="NavItems">about us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Contact" className="NavItems">Contact us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Contact" className="NavItems"><img className="imgNav" src={require("../assets/img/logo/fc.png")} alt=""/></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Contact" className="NavItems"><img className="imgNav" src={require("../assets/img/logo/line.png")} alt=""/></NavLink>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
          </div>
        );
    }
}

export default Header;