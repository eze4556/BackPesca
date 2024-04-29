// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const quienesSomos= require('../controller/quienesSomos')


router.get('/', quienesSomos.getSomos)

router.post('/', quienesSomos.createSomos)

router.delete('/:id', quienesSomos.deleteSomos)

module.exports = router;
