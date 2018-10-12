function getRegistros () {
  let clave = document.getElementById('clave').value
  console.log(clave)
  let tabla = document.getElementById('registros')
  axios.post('/api/enlace/get', { clave })
    .then(res => {
      console.log(res)
      res.data.forEach(registro => {
        let fila = document.createElement('tr')
        fila.innerHTML = `<td>${registro.participacion}</td>
          <td>${registro.nombre}</td>
          <td>${registro.contacto}</td>
          <td>${registro.correo}</td>
          <td>${registro.estado}</td>
          <td>${registro.sede}</td>
          <td>${registro.actividad}</td>
          <td>${registro.duracion}</td>
          <td>${registro.ideales}</td>
          <td>${registro.ninxs}</td>
          <td>${registro.hospedaje}</td>
          <td>${registro.colaboracion}</td>
          <td>${registro.actividades}</td>
          <td>${registro.autogestion}</td>
          <td>${registro.autogestival}</td>`
        tabla.appendChild(fila)
      })
    })
    .catch(err => console.log(err))
}
