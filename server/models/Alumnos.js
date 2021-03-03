const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let alumnoSchema = new Schema({
    primerNombre: {
        type: String,
        required: [true, 'Es necesario ingresar un nombre']
    },
    apellido: {
        type: String,
        required: [true, 'Es necesario ingresar un apellido']
    },
    nota: {
        type: Number,
        required: [true, 'Es necesario ingresar una nota']
    }
})

module.exports = mongoose.model('Alumno', alumnoSchema)

// Deuda técnica : pasar la lógica de negocio que está en el controller hacia este archivo e importarla en el controlador de alumnos