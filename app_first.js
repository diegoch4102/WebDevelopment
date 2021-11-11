 const express = require("express");

 const app = express();
 app.use(express.json());

 let personas = [
     { nombre: "Laura", apellido: "Torres", edad: "21" },
     { nombre: "Jesus", apellido: "Gomez", edad: "31" },
     { nombre: "Luis", apellido: "Perez", edad: "33" },
     { nombre: "Ana", apellido: "Luna", edad: "28" },
     { nombre: "Lidia", apellido: "Pico", edad: "33" },
 ];

 app.get('/', (req, res) => {
     res.send("<h1>Hola app_first</h1>");
 });

 app.get('/api/personas', (req, res) => {
     res.status(200).json(personas);
 });

 app.post('/api/personas', (req, res) => {
     let nuevaPersona = req.body;
     personas.push(nuevaPersona);
     res.status(201).json(personas);
 });

 app.listen(3000, () => {
     console.log("Conectado al servidor");
 });