import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';

export default (args)=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand={"lg"} >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
           <NavItem>
            <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to="/Service/">Service</NavLink>
           </NavItem>
           <NavItem>
            <NavLink to="/About/">About</NavLink>
           </NavItem>
            </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

