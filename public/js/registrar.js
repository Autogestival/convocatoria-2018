function registrar () {
  let body = {
    participacion: document.getElementById('participacion').value,
    nombre: document.getElementById('nombre').value,
    zona: document.getElementById('zona').value,
    contacto: document.getElementById('contacto').value,
    sede: document.getElementById('sede').value,
    actividad: document.getElementById('actividad').value,
    duracion: document.getElementById('duracion').value,
    ideales: document.getElementById('ideales').value,
    ninxs: document.getElementById('ninxs').value,
    comision: document.getElementById('comision').value,
    actividades: document.getElementById('actividades').value,
    autogestion: document.getElementById('autogestion').value,
    autogestival: document.getElementById('autogestival').value
  }
  console.log(body)
  axios.post('/api/registros', body)
    .then((response) => {
      console.log(response)
      window.location.replace('/gracias')
    })
    .catch((error) => {
      console.log(error)
    })
}
