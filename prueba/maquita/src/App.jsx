import { useState } from 'react'

import './App.css'

function App() {
  // 2. Definir el estado del contador (inicialmente en 0)
  const [count, setCount] = useState(0);

  // 3. Función para actualizar el estado
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <h1>Contador de Prueba</h1>
      {/* 4. Mostrar el valor del estado */}
      <p>El conteo actual es: <strong>{count}</strong></p>
      
      {/* 5. Asociar la función al evento click */}
      <button onClick={incrementCount}>
        Click para Incrementar
      </button>
      
      <p>
        Edita <code>src/App.jsx</code> y guarda para ver los cambios.
      </p>
    </div>
  );
}

export default App;