// src/components/PostCard.tsx
import type { Post } from '../types/jsonplaceholder'; // ¡Usar 'import type'!
import { Card } from 'react-bootstrap';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Card className="h-100 shadow border-primary-subtle">
      <Card.Body className="d-flex flex-column">
        
        {/* ===== PROPIEDAD 1: Título ===== */}
        <Card.Title className="fs-4 fw-bold text-primary-emphasis text-capitalize">
          {post.title}
        </Card.Title>
        
        {/* ===== PROPIEDAD 2: Cuerpo (Body) ===== */}
        <Card.Text className="text-body-secondary">
          {/* Mostramos solo los primeros 100 caracteres */}
          {post.body.substring(0, 100)}...
        </Card.Text>

      </Card.Body>
      
      {/* ===== PROPIEDAD 3: ID de Usuario ===== */}
      <Card.Footer className="text-muted">
        Publicado por: Usuario ID {post.userId}
      </Card.Footer>
    </Card>
  );
}