let RegistroModel = require('../models/registro')

function getRegistros (req, res) {
  RegistroModel.find((err, logs) => {
    if (err) console.log(err)
    res.send(logs)
  })
}

function insertRegistro (req, res) {
  let newLog = new RegistroModel(req.body)
  newLog.save((err, registroInsertado) => {
    if (err) console.log(err)
    console.log(registroInsertado)
    res.send(registroInsertado)
  })
}

module.exports = {
  getRegistros,
  insertRegistro
}
