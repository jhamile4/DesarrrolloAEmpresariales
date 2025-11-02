// src/pages/HomePage.jsx
import React from 'react';
import { Container } from 'react-bootstrap'; // ¡Importante!
import HeroSection from '../components/home/HeroSection';
import PopularSection from '../components/home/PopularSection';

const HomePage = () => {
  return (
    <>
      {/* 1. HeroSection ahora SÍ ocupará el 100% (porque ya usa Container fluid) */}
      <HeroSection />

      {/* 2. Encerramos la sección de populares en un Container normal
          para que se centre y se vea ordenado en pantallas grandes. */}
      <Container className="mt-5">
        <PopularSection />
      </Container>
    </>
  );
};

export default HomePage;