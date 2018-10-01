
var router = require('express').Router()
let registroModel = require('../models/registro')

router.get('/', function (req, res) {
  res.render('index')
})
router.get('/registro', function (req, res) {
  res.render('registro')
})
router.get('/enlace', function (req, res) {
  res.render('enlace')
})
router.get('/admin', function (req, res) {
  registroModel.find((err, registros) => {
    if (err) console.log(err)
    res.render('consultar', { registros })
  })
})

module.exports = router
