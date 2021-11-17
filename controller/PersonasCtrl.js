const personasDAO = require("../model/PersonasDAO");

const PersonasCtrl = {};

PersonasCtrl.listar = async() => {
    let personas = personasDAO.find();
    return personas;
};

PersonasCtrl.insertar = async(persona) => {
    delete persona._id;
    return await personasDAO.create(persona);
};

PersonasCtrl.actualizar = async(persona) => {
    let idPersona = persona._id;
    // borrar solo el campo _id
    delete persona._id;
    return await personasDAO.findByIdAndUpdate(idPersona, persona);
};

PersonasCtrl.eliminar = async(id) => {
    /* Args:
        1. Json con condiciones de coincidencia para borrado.
        2. Opciones
        3. callback    
    */
    // _id en la colección que coincida con id pasado como parámetro
    await personasDAO.deleteOne({ _id: id });
};

module.exports = PersonasCtrl;