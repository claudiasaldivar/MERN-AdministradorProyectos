import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { proyecto } = proyectoContext;

    //Si no hay un proyecto seleccionado
    if(!proyecto) return null;

    //Array destructurin para extrer el proyecto acual
    const [proyectoActual] = proyecto;
    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />    
                </div>
            </form>
        </div>
     );
}
 
export default FormTarea;