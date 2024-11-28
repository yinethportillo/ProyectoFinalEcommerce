const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controladores/controladorUsuario');
const middlewareAutenticacion = require('../middleware/middlewareAutenticacion');


router.post('/registro', controladorUsuario.registrarUsuario);
router.post('/iniciarsesion', controladorUsuario.iniciarSesion);
router.get('/perfil', middlewareAutenticacion, controladorUsuario.obtenerPerfilUsuario);
router.put('/perfil', middlewareAutenticacion, controladorUsuario.actualizarPerfilUsuario);

module.exports = router;