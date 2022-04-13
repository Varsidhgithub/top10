import React from 'react'
import { Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" className='nav'>
                <Container >
                    <Link to="/"><Navbar.Brand href="#" className='logo'><span>T</span>op 10</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 link"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown className="nav-menu" title="Categories" id="navbarScrollingDropdown">
                                <div className='scroll'>
                                    <NavDropdown.Item className="nav-menu" href="#">Powerful People</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-menu" href="#">Powerful PM</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-menu" href="#">Richest Person</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-menu" href="#">Powerful People</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-menu" href="#">Powerful PM</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-menu" href="#">Richest Person</NavDropdown.Item>
                                </div>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex nav-menu">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 nav-menu"
                                aria-label="Search"
                            />
                            <Button variant="outline-d" className='search'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header