// src/App.tsx
import { Outlet } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <>
      <AppNavbar />
      {/* El Outlet renderizará Home o Entities */}
      <Outlet />
    </>
  );
}
export default App;