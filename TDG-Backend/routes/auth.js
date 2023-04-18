//---------------RUTAS DE USUARIOS---------------------
//host + /api/auth

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, revalidarToken, iniciarUsuario } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();



router.post(
    '/new',
    [ //middlewares
        check('name', 'El nombre es hobligatorio').not().isEmpty(),
        check('email', 'El email es hobligatorio').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6}),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/',
    [
        check('email', 'El email es hobligatorio').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    iniciarUsuario);

router.get('/renew', validarJWT ,  revalidarToken);


module.exports = router;