const db = require('../config/database'); // Conexión a la base de datos

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM usuarios');
        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};

// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        const [results] = await db.query(
            'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
            [nombre, email, password]
        );
        res.status(201).json({ message: 'Usuario creado', id: results.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
};

// Actualizar un usuario
exports.actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, password } = req.body;
    try {
        const [results] = await db.query(
            'UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?',
            [nombre, email, password, id]
        );
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
};

// Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};
