import React, {useContext, useEffect} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import Proyecto from './Proyecto';

import ProyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    //Extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;

    useEffect(() => {
        obtenerProyectos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos</p>;

    return ( 
        <ul
            className="listado-proyectos"
        >
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        classNames="proyecto"
                        timeout={200}
                    >
                        <Proyecto 
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ListadoProyectos;
