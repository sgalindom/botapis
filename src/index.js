// src/index.js
const express = require("express");
const apiruta = require("./routes/ruta");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Usar el enrutador para las rutas base '/api'
app.use("/api", apiruta);

app.listen(PORT, () => {
    console.log("Hola mundo, el puerto es: " + PORT);
});
