// src/components/CharacterCard.tsx
// SOLUCIÓN: Usar 'import type' para la interfaz
import type { Character } from '../types/dragonball';
import { Card } from 'react-bootstrap';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  return (
    <Card className="h-100 shadow border-warning-subtle">
      <Card.Img
        variant="top"
        src={character.image}
        alt={`Imagen de ${character.name}`}
        style={{ height: '300px', objectFit: 'cover', objectPosition: 'top' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-3 fw-bold text-warning-emphasis">
          {character.name}
        </Card.Title>
        <Card.Text className="text-body-secondary fs-5">
          Raza: {character.race}
        </Card.Text>
        <Card.Text className="mt-auto pt-2">
          <span className="fw-bold">Ki Base:</span> {character.ki}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}