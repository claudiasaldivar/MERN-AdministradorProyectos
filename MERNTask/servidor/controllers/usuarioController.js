const Usuario = require('../models/Usuarios');

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;

        //Crea nuevo usuario
        usuario = new Usuario(req.body);

        //Guardar nuevo usuario
        await usuario.save();

        //Mensaje de confirmacion
        res.send('Usuario creado correctamente');

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}