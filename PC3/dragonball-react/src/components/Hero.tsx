// src/components/Hero.tsx
import { Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
  return (
    <Container className="my-4"> {/* my-4 = margin top/bottom */}
      <Row>
        <Col>
          {/* p-5 = padding | rounded-lg = bordes redondeados | bg-body-tertiary = fondo gris suave (en modo oscuro) */}
          <div className="p-5 rounded-lg bg-body-tertiary text-center shadow">
            <h1 className="display-4 fw-bold text-warning mb-3">
              Dragon Ball Explorer
            </h1>
            <p className="fs-4 text-body-secondary">
              Explora el increíble universo de Dragon Ball. Descubre personajes, sus poderes y sus razas.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}