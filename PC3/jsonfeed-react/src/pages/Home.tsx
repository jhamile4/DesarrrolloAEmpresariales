// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getUsers } from '../services/api';
import type { User } from '../types/jsonplaceholder'; 
import Hero from '../components/Hero';
import { Container, ListGroup, Spinner, Button, Row, Col } from 'react-bootstrap';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Hero />
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="h2 fw-semibold mb-4 text-center text-primary-emphasis">
              Usuarios Destacados
            </h2>
            
            {loading ? (
              <div className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-2 fs-5">Cargando usuarios...</p>
              </div>
            ) : (
              // ===== AQUÍ ESTABA EL ERROR CORREGIDO =====
              <ListGroup className="shadow-sm">
                {users.map((user) => (
                  // Debe ser ListGroup.Item (con 'G' mayúscula)
                  <ListGroup.Item key={user.id} className="text-center fs-5">
                    {user.name} (@{user.username})
                  </ListGroup.Item> // <-- Y la etiqueta de cierre igual
                ))}
              </ListGroup>
              // ==========================================
            )}
            
            <div className="text-center mt-4">
              <Link to="/entities" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg">
                  Ver todas las publicaciones &rarr;
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}