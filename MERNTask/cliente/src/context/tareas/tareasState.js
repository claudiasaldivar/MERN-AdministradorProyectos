import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import tareaReducer from "./tareasReducer";
import TareaContext from "./tareasContext";

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id:1, proyectoId: 1,nombre: 'Elegir plataforma', estado:true},
            {id:2, proyectoId: 2,nombre: 'Elegir colores', estado:false},
            {id:3, proyectoId: 3,nombre: 'Elegir plataforma de pago', estado:false},
            {id:4, proyectoId: 4,nombre: 'Elegir plataforma de hosting', estado:true},
            {id:5, proyectoId: 1,nombre: 'Elegir plataforma', estado:true},
            {id:6, proyectoId: 2,nombre: 'Elegir colores', estado:false},
            {id:7, proyectoId: 3,nombre: 'Elegir plataforma de pago', estado:false},
            {id:8, proyectoId: 4,nombre: 'Elegir plataforma', estado:true},
            {id:9, proyectoId: 1,nombre: 'Elegir colores', estado:false},
            {id:10, proyectoId: 2,nombre: 'Elegir plataforma de pago', estado:false},
            {id:11, proyectoId: 3,nombre: 'Elegir plataforma', estado:true},
            {id:12, proyectoId: 4,nombre: 'Elegir colores', estado:false},
            {id:13, proyectoId: 3,nombre: 'Elegir plataforma de pago', estado:false},
        ],
        tareasProyecto :null,
        errorTarea: false,
        tareaSeleccionada: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);

    //Crear las funciones

    //Obtener las tareas del proyecto
    const obtenerTareas = proyectoId =>{
        dispatch({
            type:TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //Agregar tareas
    const agregarTareas = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }

    //Validar tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    //Eliminar tarea
    const eliminarTarea = id =>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload : id
        })
    }

    //Cambiar el estado a la tarea
    const estadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    //Extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload:tarea
        })
    }

    //Editar una tarea
    const editarTarea= tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //Limpiar tarea
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTareas,
                validarTarea,
                eliminarTarea,
                estadoTarea,
                guardarTareaActual,
                editarTarea,
                limpiarTarea  
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;