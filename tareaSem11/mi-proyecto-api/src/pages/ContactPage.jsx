// src/pages/ContactPage.jsx
import React from 'react';
// 1. Importa solo 'Container'
import { Container } from 'react-bootstrap';

const ContactPage = () => {
  return (
    // 2. Usa el componente 'Container' y añádele la propiedad 'fluid'
    <Container  className="my-5 p-4">
      <h1>Página de Contacto</h1>
      <p>Pronto aquí: Formulario de contacto validado.</p>
    </Container>
  );
};

export default ContactPage;