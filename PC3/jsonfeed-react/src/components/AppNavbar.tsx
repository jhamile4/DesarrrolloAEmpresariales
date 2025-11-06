// src/components/AppNavbar.tsx
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Importar NavLink

export default function AppNavbar() {
  return (
    // Usaremos el color 'primary' (azul) de Bootstrap esta vez
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          JSON Feed
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            {/* ¡SOLUCIÓN! Usar NavLink directamente */}
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                `nav-link ${isActive ? 'fw-bold' : ''}`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/entities"
              className={({ isActive }: { isActive: boolean }) =>
                `nav-link ${isActive ? 'fw-bold' : ''}`
              }
            >
              Publicaciones
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}