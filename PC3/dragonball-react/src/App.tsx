// src/App.tsx
import { Outlet } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <>
      <AppNavbar />
      {/* Outlet renderizará la ruta hija (Home o Entities) */}
      <Outlet />
    </>
  );
}
export default App;