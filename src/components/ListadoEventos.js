import React, {useContext} from 'react';
import Evento from './Evento';
import { EventosContext } from '../context/EventosContext';

const  ListadoEventos= () => { 

    const {titulo,eventos,eliminarEvento}  = useContext(EventosContext);

    return (
        <>
            <h2>{titulo}</h2>
            {eventos.map(evento =>(
                <Evento
                key={evento.id}
                evento={evento}
                eliminarEvento={eliminarEvento}
                /> 
            ))} 
        </>
    );
}
 
export default ListadoEventos;