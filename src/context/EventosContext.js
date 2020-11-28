import React, {useState, useEffect} from 'react';

export const EventosContext = React.createContext([]);

export const EventosProvider = (props) => {
  
    //Eventos en Local Storage
  let eventosIniciales = JSON.parse(localStorage.getItem('eventos'));
  if(!eventosIniciales)
  {
    eventosIniciales = [];
  }

  //Arreglo de eventos
  const  [eventos, guardarEventos] = useState(eventosIniciales);

  //Use Effect para realizar operaciones cuando el state cambia
  useEffect( ()=>{

    let eventosIniciales = JSON.parse(localStorage.getItem('eventos'));    

    if(eventosIniciales){
      localStorage.setItem('eventos', JSON.stringify(eventos))
    } else{
      localStorage.setItem('eventos', JSON.stringify([]));
    }
  }, [eventos] );

  //Función que tome los eventos y agregue una nueva
  const crearEvento = evento =>{
    guardarEventos([
      ...eventos,
      evento
    ]);
  }

  console.log(eventos);

  //Función que elimina un evento por su ID
  const eliminarEvento = id => {
    const nuevosEventos = eventos.filter(evento => evento.id !== id);
    guardarEventos(nuevosEventos);
  }

  //Mensaje condicional
  const titulo = eventos.length ===0 ? 'No hay eventos' : 'Administra tus eventos'
  
return (        
    <EventosContext.Provider value={{eventos, crearEvento, eliminarEvento, titulo}}>
        {props.children}
    </EventosContext.Provider>
)
}