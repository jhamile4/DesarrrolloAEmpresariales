import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import { useStore } from '../store/store';

const Home: React.FC = () => {
  const {items, setItems} = useStore();

    useEffect(() => {
      if (items.length === 0) {
        const demo = Array.from({ length: 30 }, (_, i) => ({
          id: i + 1,
          title: `Item ${i + 1}`,
          body: `descripcion corta`,
        }));
        setItems(demo);
      }
    }, [items, setItems]);
    
      return (
    <>
      <section className="text-center mb-4">
        <h1>Mi App Bonita</h1>
        <img src="https://restcountries.com/" alt="hero" className="img-fluid" />
      </section>

      <CardList />
    </>
  );
};
export default Home;