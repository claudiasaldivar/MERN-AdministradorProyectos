import React, {useContext, useEffect} from 'react';

import Proyecto from './Proyecto';

import ProyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
    //Extraer proyectos de state inicial
    const proyectoContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectoContext;

    useEffect(() => {
        obtenerProyectos()
    },[]);

    //Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos</p>;

    return ( 
        <ul
            className="listado-proyectos"
        >
            {proyectos.map(proyecto => (
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;
