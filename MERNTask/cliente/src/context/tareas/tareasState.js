import React, { useContext, useReducer } from "react";

import tareaReducer from "./tareasReducer";
import TareaContext from "./tareasContext";

import {
    TAREAS_PROYECTO,
} from '../../types/index';

const TareaState = props => {
    const initialState = {
        tareas: [
            {proyectoId: 1,nombre: 'Elegir plataforma', estado:true},
            {proyectoId: 2,nombre: 'Elegir colores', estado:false},
            {proyectoId: 3,nombre: 'Elegir plataforma de pago', estado:false},
            {proyectoId: 4,nombre: 'Elegir plataforma de hosting', estado:true},
            {proyectoId: 1,nombre: 'Elegir plataforma', estado:true},
            {proyectoId: 2,nombre: 'Elegir colores', estado:false},
            {proyectoId: 3,nombre: 'Elegir plataforma de pago', estado:false},
            {proyectoId: 4,nombre: 'Elegir plataforma', estado:true},
            {proyectoId: 1,nombre: 'Elegir colores', estado:false},
            {proyectoId: 2,nombre: 'Elegir plataforma de pago', estado:false},
            {proyectoId: 3,nombre: 'Elegir plataforma', estado:true},
            {proyectoId: 4,nombre: 'Elegir colores', estado:false},
            {proyectoId: 3,nombre: 'Elegir plataforma de pago', estado:false},
        ],
        tareasProyecto :null
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

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasProyecto: state.tareasProyecto,
                obtenerTareas,
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;