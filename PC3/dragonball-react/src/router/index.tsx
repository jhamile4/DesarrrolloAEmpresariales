// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Entities from '../pages/Entities';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // El layout principal con la Navbar
    children: [
      {
        index: true, // Esta es la ruta raíz: "/"
        element: <Home />,
      },
      {
        path: 'entities', // Esta es la ruta: "/entities"
        element: <Entities />,
      },
    ],
  },
]);