import React, {useState} from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../imgs/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';


const NavBar = (props) => {


    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
       
    <div>
        <Navbar color="light" light expand="md">
            <Link to="/">
                <NavbarBrand>
                    <img src = {logo}/>
                </NavbarBrand>
            </Link>
            
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to='/'>
                        <NavLink >Home</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/About'>
                        <NavLink >About</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/Contact'>
                        <NavLink >Contact</NavLink>
                    </Link>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>

    )
}


export default NavBar;