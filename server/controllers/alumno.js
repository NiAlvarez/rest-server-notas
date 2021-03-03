const express = require('express');
const app = express();
const Alumno = require('../models/Alumnos')

//TO-DO
//
//Deuda tecnica 1: pasar la logica de negocio al modelo
//Deuda tecnica 2: aplicar async-await al método POST


app.get('/alumnos', async(req, res) => {
    try {
        const alumnos = await Alumno.find({}, 'primerNombre apellido nota').exec();
        res.json(alumnos);
    } catch (e) {
        return res.status(500).json(e)
    }
});


app.post('/alumnos', (req, res) => {

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