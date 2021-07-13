import React from 'react';
import './App.css';
import PerfilDesarrollador from './components/PerfilDesarrollador';

function App() {
  return (
    <div className="App">
      <header className="App-header">      
        <p>
        <PerfilDesarrollador
        nombre = "Cristián Escobar Castro"
        edad = {37}
        tienePantalla = {true}
        />
        </p>      
      </header>
    </div>
  );
}

export default App;
