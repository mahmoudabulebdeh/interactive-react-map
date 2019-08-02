import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../assets/splyt-logo.png';

const Header = props => {
  return (
    <Navbar color="dark" expand="md">
      <div className="container">
        <NavbarBrand href="/">
          <img src={logo} className="logo" alt="logo" />
        </NavbarBrand>
      </div>
    </Navbar>
  );
};

export default Header;
