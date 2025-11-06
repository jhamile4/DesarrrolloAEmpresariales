// src/components/Hero.tsx
import { Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className="p-5 rounded-lg bg-body-tertiary text-center shadow">
            <h1 className="display-4 fw-bold text-primary mb-3">
              JSONPlaceholder Feed
            </h1>
            <p className="fs-4 text-body-secondary">
              Un simple feed de datos simulados. Explora usuarios y publicaciones de prueba.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}