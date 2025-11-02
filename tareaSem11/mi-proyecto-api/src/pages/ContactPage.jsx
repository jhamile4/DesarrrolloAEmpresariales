// src/pages/ContactPage.jsx
import React from 'react';
// Importamos Container, Row y Col para centrar el formulario
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    // Usamos el Container normal (centrado)
    <Container className="my-5">
      <Row className="justify-content-md-center">
        {/* Centramos el formulario y le damos un ancho máximo */}
        <Col md={10} lg={8}>
          <h1 className="text-center mb-4">Ponte en Contacto</h1>
          <p className="text-center text-muted mb-4">
            ¿Tienes alguna pregunta o sugerencia? Rellena el formulario y
            nos pondremos en contacto contigo lo antes posible.
          </p>
          
          {/* Renderizamos el formulario */}
          <ContactForm />

        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;