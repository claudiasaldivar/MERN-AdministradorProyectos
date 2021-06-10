import React, {useContext, useState, useEffect} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareasContext from '../../context/tareas/tareasContext';

const FormTarea = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    const tareasContext = useContext(TareasContext);
    const { tareaSeleccionada, errorTarea, agregarTareas, validarTarea, obtenerTareas, editarTarea, limpiarTarea } = tareasContext;

    //Si hay una tarea seleccionada 
    useEffect(() =>{
        if(tareaSeleccionada !== null){
            guardarTarea(tareaSeleccionada);
        }else{
            guardarTarea({
                nombre:''
            })
        }
    }, [tareaSeleccionada])

    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    });

    //Extraer el nombre del proyecto
    const { nombre } = tarea;

    //Si no hay un proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring para extrer el proyecto acual
    const [proyectoActual] = proyecto;

    //Leer los valores
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitTarea = e => {
        e.preventDefault();

        //Validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //Edicion o nueva tarea
        if(tareaSeleccionada === null){

            //Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTareas(tarea);

        } else {
            //Edicion
            editarTarea(tarea);

            //Elimina tara seleccionada
           limpiarTarea(); 
        }

        //Obtener y filtrar las tareas
        obtenerTareas(proyectoActual.id);

        //Reiniciar el form
        guardarTarea({
            nombre: ''
        })

    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmitTarea}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? "Editar tarea" : "Agregar tarea"}
                    />    
                </div>
            </form>
            {errorTarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default FormTarea;