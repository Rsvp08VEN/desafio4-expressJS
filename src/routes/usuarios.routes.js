const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

// Rutas CRUD
router.get('/', usuariosController.obtenerUsuarios);      // Leer usuarios
router.post('/', usuariosController.crearUsuario);        // Crear usuario
router.put('/:id', usuariosController.actualizarUsuario); // Actualizar usuario
router.delete('/:id', usuariosController.eliminarUsuario);// Eliminar usuario

module.exports = router;
