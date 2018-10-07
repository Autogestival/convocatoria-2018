let router = require('express').Router()
let registrosController = require('../controllers/registro')

// /registro +
router.post('/get', registrosController.getRegistros)
router.post('/', registrosController.insertRegistro)

module.exports = router
