import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar className='navbar' variant="dark">
                <Container>
                    <h1 className='text-light fw-bold'><span className='text-warning'>RASEL'S</span> SCHOOL</h1>
                    <Nav className="ms-auto">
                        <Link className='ms-5 link' to="/home">Home</Link>
                        <Link className='ms-5 link' to="/about">About</Link>
                        <Link className='ms-5 link' to="/courses">Courses</Link>
                        <Link className='ms-5 link' to="/team">Our Team</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;