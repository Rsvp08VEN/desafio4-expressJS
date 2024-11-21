const express = require('express');
const db = require('./config/database'); // Conexión a la base de datos
const usuariosRoutes = require('./routes/usuarios.routes'); // Rutas de usuarios
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas CRUD
app.use('/api/usuarios', usuariosRoutes); // CRUD de usuarios

// Rutas públicas
app.use('/api/auth', authRoutes);

// Rutas protegidas
app.use('/api', protectedRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡API funcionando correctamente!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


