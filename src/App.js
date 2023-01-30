import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros estudiantes</h1>
        <Testimonio 
          nombre='Minerva Perez'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera en Computacion'
          empresa='PDVSA'
          testimonio='Siento que debo buscar otro trabajo'
          />
         
        <Testimonio
          nombre='Carlos'
          pais='Venezuela'
          imagen='shawn'
          cargo='Tecnico Superior'
          empresa='PDVSA'
          testimonio='Siento que debo buscar otro trabajo'
          
        />
      </div>
    </div>
  );
}

export default App;
