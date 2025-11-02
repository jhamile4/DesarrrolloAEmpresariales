// src/pages/ListPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap'; 
const ListPage = () => {
  return (
        // 2. Envolver todo en un Container
    <Container  className="my-5 p-4">
      <h1>Listado de Personajes</h1>
      <p>Pronto aquí: Filtros, Grid de personajes y Paginación.</p>
    </Container>
  );
};

export default ListPage;