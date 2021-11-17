const conection = require("../DB/conectionDB");

// En Mongoose todo es derivado de esquemas:
/*  Args:
    1. Array de la eestuctura de la colección
    2. Configuración
*/
const personaSchema = conection.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    phoneNumber: String
}, {
    collection: "User",
    versionKey: false
});

// Compilación del esquema en un modelo
/*      Args:
        1. Nombre de la colección
        2. Schema
*/
const personaDAO = conection.model('User', personaSchema);
/*  Un modelo es una clase en la que se construyen documentos.
    En este caso una persona con propiedades -también podría tener
    comportamientos- según el esquema.
    Por ejemplo, se podría crear una persona -un documento-:
    const persona1 = new personaDAO({
        nombre: 'Pepito',
        apellido: 'Perez'...
    });

*/



module.exports = personaDAO;