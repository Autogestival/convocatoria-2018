let router = require('express').Router()
let enlaceController = require('../controllers/enlace')

// /registro +
router.post('/get', enlaceController.getEnlaces)
router.post('/', enlaceController.insertEnlace)

module.exports = router
