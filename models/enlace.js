var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/autogestival-db')

var enlaceSchema = mongoose.Schema({
  participacion: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  contacto: String,
  correo: String,
  estado: String,
  pais: String,
  sede: [String],
  actividad: String,
  duracion: String,
  ideal: String,
  ninxs: String,
  colaboracion: String,
  hospedaje: String,
  actividades: String,
  autogestion: String,
  autogestival: String
})

// Buscara en la base de datos la coleccion con el nombre del recurso en plural(ingles)
module.exports = mongoose.model('enlace', enlaceSchema)
