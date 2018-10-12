let RegistroModel = require('../models/registro')

function getRegistros (req, res) {
  console.log(req.body)
  if (req.body.clave === process.env.CLAVE) {
    RegistroModel.find((err, logs) => {
      if (err) console.log(err)
      res.send(logs)
    })
  }
  else {
    res.status('401')
    res.send('NEL')
  }
}

function insertRegistro (req, res) {
  console.log(req.body)
  let newRegistro = new RegistroModel(req.body)
  newRegistro.save((err, registroInsertado) => {
    if (err) console.log(err)
    console.log(registroInsertado)
    res.send(registroInsertado)
  })
}

module.exports = {
  getRegistros,
  insertRegistro
}
