// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Clave secreta para firmar tokens JWT
const SECRET_KEY = 'mi_secreto';

// Ruta de registro
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear y guardar el usuario
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
});


// routes/auth.js (continuación)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
});

module.exports = router;
