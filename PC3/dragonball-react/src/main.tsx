// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap
import { RouterProvider } from 'react-router-dom'
import { router } from './router' // Importación de nuestras rutas
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Aquí le decimos a React que use nuestro router */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)