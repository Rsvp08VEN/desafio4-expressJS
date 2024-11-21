const mysql = require('mysql2');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') }); // Cargar variables de entorno desde .env

// Crear el pool de conexiones
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

module.exports = pool.promise(); // Usar promesas para consultas más fáciles

// Probar la conexión
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error conectando a MySQL:", err);
    } else {
        console.log("¡Conexión a MySQL exitosa!");
        connection.release(); // Liberar la conexión
    }
});


