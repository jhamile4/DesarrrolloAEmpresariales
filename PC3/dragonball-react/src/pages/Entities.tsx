// src/pages/Entities.tsx
import { useEffect, useState } from 'react';
import { getCharacters } from '../services/api';
// SOLUCIÓN: Usar 'import type' para la interfaz
import type { Character } from '../types/dragonball';
import CharacterCard from '../components/CharacterCard';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

export default function Entities() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChars = async () => {
      setLoading(true);
      const chars = await getCharacters();
      setCharacters(chars);
      setLoading(false);
    };
    fetchChars();
  }, []);

  return (
    <Container className="py-5">
      <h1 className="display-4 fw-bold text-center mb-5 text-warning">
        Guerreros Z y Aliados
      </h1>
      {loading ? (
        <div className="text-center" style={{ minHeight: '50vh' }}>
          <Spinner animation="border" variant="warning" style={{ width: '4rem', height: '4rem' }} />
          <p className="mt-3 fs-4 text-body-secondary">Cargando guerreros...</p>
        </div>
      ) : (
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {characters.map((char) => (
            <Col key={char.id}>
              <CharacterCard character={char} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}