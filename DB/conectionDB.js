const mongoose = require("mongoose");

// Dirección a la BD y la colección. En este caso en cloud, luego 
// es necesario usuario y contraseña
const uri = "mongodb+srv://db-admin:k9hCDR3v4Aa8iiR@cluster-diego-misiontic." +
    "klqr4.mongodb.net/ArtGallery?retryWrites=true&w=majority";

// Conexión
mongoose.connect(uri).then(() => {
    console.log("Conectado a mongoose");
}).catch((e) => console.log("Fallo en la conexión a base de datos." + e));

// Luego de importar lo que exporta el módulo de mongoose, y de haberlo
// configurado para el proyecto se puede volver a exportar para usar
module.exports = mongoose;