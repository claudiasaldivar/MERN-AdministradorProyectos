import React, { Fragment, useState, useContext } from 'react';

import ProyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectoContext = useContext(ProyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectoContext;

    //State para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    //Extraer nombre del proyecto
    const { nombre } = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })

    }

    //Cuando el usuario da submit
    const onSubmitProyecto = e =>{
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ''){
            mostrarError(true);
            return;
        }

        //Agregar al state
        agregarProyecto(proyecto);

        //Reiniciar el form
        guardarProyecto({
            nombre: ''
        })

    }

    //Mostrar el formulario
    const onClickForm = () =>{
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickForm}
            >Nuevo Proyecto</button>

            { formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Nombre proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar proyecto"
                        />
                    </form>
                )
                : null
            }
            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
     );
}
 
export default NuevoProyecto;