import React, {useReducer} from 'react';

import proyectoReducer from './proyectoReducer';
import ProyectoContext from './proyectoContext';

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO
} from '../../types/index';


const ProyectoState = props => {
    const proyectos = [
        {id:1, nombre: 'Tienda virtual'},
        {id:2, nombre: 'Intranet'},
        {id:3, nombre: 'Diseño de sitio web'}
    ];
    const initialState = {
        proyectos : [],
        formulario: false
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD de proyectos
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: proyectos
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos  
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState; 