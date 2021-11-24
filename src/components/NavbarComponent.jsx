import React from "react";
import { NavLink } from "react-router-dom";
import authService from "./services/auth-services";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import './Navbar.css';

function NavbarComponent({ isLoggedIn, user, setUser }) {
  const userLogout = () => {
    authService.logout().then(() => {
      setUser(null, false);
    });
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbarBg">
        <Container className="navbarMain">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              <Navbar.Brand href="#home">
                <img
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <NavDropdown title="O" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Item href="/">Join the Community</NavDropdown.Item>
                <NavDropdown.Divider />
                {isLoggedIn && user && (
                  <>
                    <NavDropdown.Item href="/categories">
                      Categories
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/howdiy/create">
                      Create a Howdiy!
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              {!isLoggedIn && (
                <>
                  <li>
                    <Nav.Link href="/signup">Sign up</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/login">Log in</Nav.Link>
                  </li>
                </>
              )}
              {isLoggedIn && user && (
                <>
                  <NavDropdown title="O" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/" onClick={() => userLogout()}>
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
