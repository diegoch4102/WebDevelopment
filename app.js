const express = require("express")
const conection = require("./DB/conectionDB")

const app = express();
app.use(express.json());

/*
    Args:
    1. Array de la eestuctura de la colección
    2. Configuración
*/
const personasSchema = conection.Schema({
        nombre: String,
        apellido: String,
        email: String,
        contraseña: String,
        telefono: String
    }, {
        collection: "User ",
        versionKey: false
    })
    // Creación del objeto que conecta a la base de datos: Modelo, AKA DAO
    /*
            Args:
            1. Nombre de la conexión
            2. Schema
    */
const personaDAO = conection.model('User', personasSchema)

// Es necesario que sea un método asíncrono, ya que no hay certeza que
// Mongo responda rápido
app.post('/api/personas', async(req, res) => {
    const nuevaPersona = req.body;
    try {
        await personaDAO.create(nuevaPersona);
        res.status(201).send("Persona registrada exitosamente")
    } catch (error) {
        console.log("Insert error: " + error);
        res.status(400).send("Insert error: " + error);
    }
})

app.listen(3000, () => {
    console.log("Conectado al servidor");
})