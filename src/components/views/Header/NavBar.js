import styles from './NavBar.module.scss';
import { Navbar, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Nav className="me-auto">
                <Navbar.Brand as={NavLink} to="/" className="mx-4">Blog App</Navbar.Brand>
            </Nav>
            <Nav className="justify-content-end mx-4">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/category">Category</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;
