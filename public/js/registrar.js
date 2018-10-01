function registrar () {
  let participacion = document.getElementById('participacion').value
  let nombre = document.getElementById('nombre').value
  let zona = document.getElementById('zona').value
  let contacto = document.getElementById('contacto').value
  let sede = document.getElementById('sede').value
  let actividad = document.getElementById('actividad').value
  let duracion = document.getElementById('duracion').value
  let ideales = document.getElementById('ideales').value
  let ninxs = document.getElementById('ninxs').value
  let comision = document.getElementById('comision').value
  let actividades = document.getElementById('actividades').value
  let autogestion = document.getElementById('autogestion').value
  let autogestival = document.getElementById('autogestival').value
  axios.post('/people', {
    participacion,
    nombre,
    zona,
    contacto,
    sede,
    actividad,
    duracion,
    ideales,
    ninxs,
    comision,
    actividades,
    autogestion,
    autogestival
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}
