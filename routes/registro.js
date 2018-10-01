let router = require('express').Router()
let registrosController = require('../controllers/registro')

router.get('/', registrosController.getRegistros)
router.post('/', registrosController.insertRegistro)

module.exports = router
