let EnlaceModel = require('../models/enlace')

function getEnlaces (req, res) {
  console.log(req.body)
  if (req.body.clave === process.env.CLAVE) {
    EnlaceModel.find((err, logs) => {
      if (err) console.log(err)
      res.send(logs)
    })
  }
  else {
    res.status('401')
    res.send('NEL')
  }
}

function insertEnlace (req, res) {
  console.log(req.body)
  let newEnlace = new EnlaceModel(req.body)
  newEnlace.save((err, enlaceInsertado) => {
    if (err) console.log(err)
    console.log(enlaceInsertado)
    res.send(enlaceInsertado)
  })
}

module.exports = {
  getEnlaces,
  insertEnlace
}
