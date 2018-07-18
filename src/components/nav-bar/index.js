import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';


class NavBar extends Component {
    render() {
        return (
            <Navbar style={{ backgroundColor: '#6dc1c3' }} light expand="md">
          <NavbarBrand href="/"><h5 style={{ color: '#fff' }} >Noetic Payments</h5></NavbarBrand>
        </Navbar>
        );
    }
}

export default NavBar;