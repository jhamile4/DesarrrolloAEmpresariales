// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { getCharacters } from '../services/api';
import type { Character } from '../types/dragonball'; 
import Hero from '../components/Hero';
import { Container, ListGroup, Spinner, Button, Row, Col } from 'react-bootstrap';

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChars = async () => {
      setLoading(true);
      const chars = await getCharacters();
      setCharacters(chars.slice(0, 5));
      setLoading(false);
    };
    fetchChars();
  }, []);

  return (
    <>
      <Hero />
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="h2 fw-semibold mb-4 text-center text-warning-emphasis">
              Personajes Destacados
            </h2>
            {loading ? (
              //... (el código de loading no cambia)
              <div className="text-center py-5">
                <Spinner animation="border" variant="warning" />
                <p className="mt-2 fs-5">Buscando esferas del dragón...</p>
              </div>
            ) : (
              //... (el código de ListGroup no cambia)
              <ListGroup className="shadow-sm">
                {characters.map((char) => (
                  <ListGroup.Item key={char.id} className="text-center fs-5">
                    {char.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}

            {/* ===== AQUÍ ESTÁ LA SOLUCIÓN DEL PLAN B ===== */}
            <div className="text-center mt-4">
              {/* Envolvemos el Botón con el Link. 
                El 'style' es para quitar el subrayado azul del enlace.
              */}
              <Link to="/entities" style={{ textDecoration: 'none' }}>
                <Button variant="warning" size="lg">
                  Ver todos los personajes &rarr;
                </Button>
              </Link>
            </div>
            {/* ============================================== */}

          </Col>
        </Row>
      </Container>
    </>
  );
}