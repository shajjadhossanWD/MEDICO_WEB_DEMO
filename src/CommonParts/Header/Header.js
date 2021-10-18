import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from "../../Hooks/useAuth"

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="header_nav fw-bold">
            <Container>
            <Navbar.Brand href="#home">MEDICO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
                <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    
            </Nav>
            <Nav>
                <Nav.Link>signin as: {user.displayName ? user.displayName : user.email} </Nav.Link>
                {user.email ? <Nav.Link onClick={logOut}>Logout</Nav.Link>:
                <Nav.Link as={Link} to="/login" >SignIn</Nav.Link>}         
                <Nav.Link as={Link} to="/register" >SignUp</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
      </Navbar>
    );
};

export default Header;