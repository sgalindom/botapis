// src/controllers.js
const verificar = (req, res) => {
    res.send("verificado");
}

const recibir = (req, res) => {
    res.send("recibido");
}

module.exports = {
    verificar,
    recibir
}
