import React, {useState, useContext} from 'react';
import { v4 as uuid } from "uuid";

import { EventosContext } from '../context/EventosContext';

const  Formulario= () => {

    const {crearEvento}  = useContext(EventosContext);

    //Crear state de los eventos
    const [evento, actualizarEvento] = useState({
        nombre:'',
        descripcion:'',
        fecha:'',
        hora:'',
        pais:''
    });

    const [error, actualizarError] = useState(false);

    //Función que se ejecuta cuando el usuario escribe un input
    const actualizarState = e =>{
        actualizarEvento({
            ...evento,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {nombre, descripcion, fecha, hora, pais} = evento;

    //Cuando el usuario presiona en Agregar evento
    const submitEvento = e =>{
        e.preventDefault();        
        
        //Validar
        if(nombre.trim()==='' || descripcion.trim()==='' || fecha.trim()==='' || hora.trim()==='' || pais.trim()==='')
        {
            actualizarError(true);
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false);

        //Asignar un ID
        evento.id=uuid();

        //Crear el evento
        crearEvento(evento);

        //Reiniciar el form
        actualizarEvento({
            nombre:'',
            descripcion:'',
            fecha:'',
            hora:'',
            pais:''
        });
    }

    return (
        <>
            <h2>Crear evento</h2>

            { error ?  <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitEvento}
            >
                <label>Nombre del evento</label>
                <input
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Nombre evento"
                    onChange={actualizarState}
                    value={nombre}
                />

                <label>Descripción</label>
                <textarea
                    className="u-full-width"
                    name="descripcion"
                    onChange={actualizarState}
                    value={descripcion}
                ></textarea>

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>País</label>
                <input
                    type="text"
                    name="pais"
                    className="u-full-width"
                    placeholder="País del evento"
                    onChange={actualizarState}
                    value={pais}
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar evento</button>
            </form>
        </>
    );
}
 
export default Formulario;