const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const db = require('../config/database'); // Conexión a la base de datos

const router = express.Router();

// Ruta protegida: dashboard
router.get('/dashboard', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Bienvenido al dashboard', user: req.user });
});

// Ruta protegida: detail
router.get('/detail/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;

    try {
        // Consulta a la base de datos para buscar el usuario con el ID proporcionado
        const [rows] = await db.query('SELECT id, nombre, email FROM usuarios WHERE id = ?', [id]);

        // Validar si se encontró un usuario
        if (rows.length === 0) {
            return res.status(404).json({ message: `No se encontró un usuario con ID ${id}` });
        }

        // Responder con la información del usuario
        res.status(200).json({ 
            message: `Detalle del usuario con ID ${id}`,
            user: rows[0] // Devuelve el usuario encontrado
        });
    } catch (error) {
        console.error('Error al obtener el detalle del usuario:', error);
        res.status(500).json({ message: 'Error al obtener el detalle del usuario' });
    }
});

module.exports = router;
