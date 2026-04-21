// Archivo para encender el backend

const express = require('express');
const cors = require('cors');
const db = require('./db'); 

const app = express();
app.use(cors());
app.use(express.json()); // Para que el servidor entienda JSON

// Ruta de prueba para ver si la DB responde
app.get('/prueba-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT 1 + 1 AS resultado');
        res.json({ 
            mensaje: "Conexión exitosa con MySQL", 
            data: rows 
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: "Error al conectar con la DB", 
            error: error.message 
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});