//Puente para que server se comunique con la base de datos

const mysql = require('mysql2/promise'); 
require('dotenv').config();

// Piscina con todas las conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportar pool directamente
module.exports = pool;