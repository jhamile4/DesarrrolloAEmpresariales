// src/components/AppNavbar.tsx
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 

export default function AppNavbar() {
  return (
    <Navbar bg="warning" variant="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          DB Explorer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                `nav-link ${isActive ? 'fw-bold text-dark' : 'text-dark-emphasis'}`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/entities"
              className={({ isActive }: { isActive: boolean }) =>
                `nav-link ${isActive ? 'fw-bold text-dark' : 'text-dark-emphasis'}`
              }
            >
              Personajes
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}