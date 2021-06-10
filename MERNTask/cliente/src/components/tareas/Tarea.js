import React, {useContext} from 'react';
import TareasContext from '../../context/tareas/tareasContext';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

    const {nombre, estado, id} = tarea;

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    const tareasContext = useContext(TareasContext);
    const { eliminarTarea, obtenerTareas, estadoTarea, guardarTareaActual } = tareasContext;

    const [proyectoActual] = proyecto;

    //Eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)
    }

    //Modificar el estado d elas tareas
    const modificarEstado= tarea =>{
        if(tarea.estado) {
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        estadoTarea(tarea)
    }

    //Editar tarea
    const editarTarea = tarea => {
        guardarTareaActual(tarea)
    }

    return ( 
        <li className="tarea sombra">
            <p>{nombre}</p>

            <div className="estado">
                {estado 
                ? (
                    <button 
                        type="button" 
                        className="completo"
                        onClick={() => modificarEstado(tarea)}
                    >Completo</button>
                )
                : (
                    <button 
                        type="button" 
                        className="incompleto"
                        onClick={() => modificarEstado(tarea)}
                    >Incompleto</button>
                )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => editarTarea(tarea)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Tarea;