import React, {useReducer} from 'react';

import { v4 as uuidv4 } from 'uuid';

import proyectoReducer from './proyectoReducer';
import ProyectoContext from './proyectoContext';

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTO,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types/index';


const ProyectoState = props => {
    const proyectos = [
        {id:1, nombre: 'Tienda virtual'},
        {id:2, nombre: 'Intranet'},
        {id:3, nombre: 'Diseño de sitio web'}
    ];
    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto:null
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

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //Insertar proyecto en es state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload:proyecto
        })
    }

    //Valida el formulario
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //Selecciona el proyecto que le usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload:proyectoId
        })
    }

    //Elimina un proyecto 
    const eliminaProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload:proyectoId
        })
    }

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto:state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual, 
                eliminaProyecto  
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState; 