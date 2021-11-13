// Importaciones
const express = require("express");
const cors = require("cors");
const personasCtrl = require("./controller/PersonasCtrl");

// Crea la app Express
// Función top-level exportada por el módulo express
const app = express();

// 🤷🏻‍♂️
app.use(express.json());
app.use(cors);

// Es necesario que sean métodos asíncronos, ya que no hay certeza que
// Mongo responda rápido
app.get('/api/personas', async(req, res) => {
    try {
        const listaPersonas = await personasCtrl.listar();
        res.status(200).json(listaPersonas);
    } catch (error) {
        console.log("GET error: " + error);
        res.status(400).send("GET error: " + error);
    }
});

app.post('/api/personas', async(req, res) => {
    const nuevaPersona = req.body;
    try {
        await personasCtrl.insertar(nuevaPersona);
        res.status(201).send("Persona registrada exitosamente");
    } catch (error) {
        console.log("Insert error: " + error);
        res.status(400).send("Insert error: " + error);
    }
});

app.put('/api/personas', async(req, res) => {
    const personaMod = req.body;
    try {
        await personasCtrl.actualizar(personaMod);
        res.status(200).send("Persona actualizada exitosamente");
    } catch (error) {
        console.log("Update error: " + error);
        res.status(400).send("Update error: " + error);
    }
});

app.delete('/api/personas/:id', async(req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        await personasCtrl.eliminar(id);
        res.status(200).send("Persona eliminada exitosamente");
    } catch (error) {
        console.log("Delete error: " + error);
        res.status(400).send("Delete error: " + error);
    }
});

app.get('/', (req, res) => {
    res.send("<h1>Hola app</h1>");
});

app.listen(1600, () => {
    console.log("app Conectado al servidor");
});