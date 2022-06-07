const descargarUsuarios = (cantidad) =>
 new Promise((resolve, reject) => {
  // Pasar la cantidad a la api

  const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

  // Llamado al ajax
  const xhr = new XMLHttpRequest()

  // Abrir la conexión
  xhr.open('GET', api, true)

  // on load
  xhr.onload = () => {
   if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText).results)
   } else {
    reject(Error(xhr.statusText))
   }
  }
  // Opcional (on error)
  xhr.onerror = (error) => reject(error)

  // send
  xhr.send()
 })

descargarUsuarios(30).then(
 (miembros) => console.log(miembros),
 (error) => console.error(new Error('Hubo un error' + error))
)
