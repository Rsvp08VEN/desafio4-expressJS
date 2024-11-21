const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/database'); // Conexión a la BD
require('dotenv').config();

const router = express.Router();

// Ruta de login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Consultar la BD para validar credenciales
        const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar el JWT
        const token = jwt.sign(
            { id: rows[0].id, email: rows[0].email }, // Payload
            process.env.JWT_SECRET,                  // Clave secreta
            { expiresIn: process.env.JWT_EXPIRATION } // Tiempo de expiración
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});

module.exports = router;
