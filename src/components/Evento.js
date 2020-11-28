import React from 'react';

const Evento = ({evento, eliminarEvento}) =>(  
    <div className="cita">
        <p>Nombre: <span>{evento.nombre}</span></p>        
        <p>Fecha: <span>{evento.fecha}</span></p>
        <p>Hora Inicio: <span>{evento.hora}</span></p>
        <p>País: <span>{evento.pais}</span></p>
        <p>Descripción: <span>{evento.descripcion}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ ()=> eliminarEvento(evento.id) }
        >
            Eliminar &times;
        </button>
    </div>
);

 
export default Evento;