import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';

import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';

import { CSSTransition, TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {
    
    const proyectoContext = useContext(ProyectoContext);
    const { proyecto, eliminaProyecto } = proyectoContext;

    const tareaContext = useContext(TareasContext);
    const { tareasProyecto } = tareaContext;

    //Si no hay un proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //Array destructurin para extrer el proyecto acual
    const [proyectoActual] = proyecto;

    //Eliminar proyecto al dar click en boton
    const onClickEliminar = () =>{
        eliminaProyecto(proyectoActual.id)
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                    <TransitionGroup>
                        {tareasProyecto.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea 
                                    tarea={tarea}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;