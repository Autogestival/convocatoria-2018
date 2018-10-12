
var router = require('express').Router()
let registroModel = require('../models/registro')

router.get('/', function (req, res) {
  res.render('index')
})
router.get('/registro', function (req, res) {
  res.render('registro')
})
router.get('/gracias', function (req, res) {
  res.render('gracias')
})
router.get('/enlace', function (req, res) {
  res.render('enlace')
})
router.get('/enlace/admin', function (req, res) {
  res.render('enlace-admin')
})
router.get('/admin', function (req, res) {
  registroModel.find((err, registros) => {
    if (err) console.log(err)
    res.render('admin', { registros })
  })
})

module.exports = router
