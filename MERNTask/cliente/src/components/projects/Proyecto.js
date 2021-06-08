import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';

const Proyecto = ({proyecto}) => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectoContext;

    const tareaContext = useContext(TareasContext);
    const {obtenerTareas} = tareaContext;

    //Funcion para agregar el proyecto actual
    const seleccionarProyecto = id =>{
        proyectoActual(id);
        obtenerTareas(id);
    }

    return ( 
        <li>
            <button 
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;