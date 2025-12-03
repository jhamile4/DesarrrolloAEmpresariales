
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import Home from './pages/Home';
import Entities from './pages/Entities';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="entities" element={<Entities />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
export default App;