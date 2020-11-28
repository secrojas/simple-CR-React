import React from 'react';
import Fomulario from './components/Formulario';
import ListadoEventos from './components/ListadoEventos';

//Context
import { EventosProvider } from './context/EventosContext';

function App() { 

  return (
    <>
      <EventosProvider>
        <h1>Administrador de Eventos Virtuales</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Fomulario/>
            </div>
            <div className="one-half column">
              <ListadoEventos/>
            </div>
          </div>
        </div>
      </EventosProvider>
    </>
  );
}

export default App;
