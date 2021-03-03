const express = require('express');
const app = express();
const Alumno = require('../models/Alumnos')

app.get('/alumnos', async(req, res) => {
    try {
        const alumnos = await Alumno.find({}, 'primerNombre apellido nota').exec();
        res.json(alumnos);
    } catch (e) {
        return res.status(500).json(e)
    }
});

app.post('/alumnos', async(req, res) => {

    let body = req.body;

    let alumno = new Alumno({
        primerNombre: body.primerNombre,
        apellido: body.apellido,
        nota: body.nota
    });

    alumno.save((err, alumnoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        } else {
            res.json({
                ok: true,
                alumno: alumnoDB
            });
        }

    });
})

app.get('/aprobados', async(req, res) => {

    const nota_aprobado = 3;

    try {
        const alumnos = await Alumno.find({ nota: { $gt: nota_aprobado } }).exec();
        res.json(alumnos);
    } catch (e) {
        return res.status(500).json(e)
    }
})

module.exports = app;


// Deuda técnica : pasar la lógica de negocio que está en el controller hacia este archivo e importarla en el controlador de alumnos