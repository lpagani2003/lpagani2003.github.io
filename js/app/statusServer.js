// Crea los elementos HTML
const serverStatusDiv = `
  <section id="s6">
    <div id="connection-status"></div>
    <div id="color"></div>
  </section>
  <link rel="stylesheet" href="/CSS/apps/statusServer.css">
`;

// Agrega los elementos HTML al final del body
document.write(serverStatusDiv);

// Espera a que se carguen todos los elementos del DOM
document.addEventListener('DOMContentLoaded', () => {
  // Obtiene el elemento donde se mostrará el estado de la conexión
  const connectionStatus = document.getElementById('connection-status');
  const color = document.getElementById('color');

  // Realiza una petición al archivo JSON
  fetch('https://lpagani2003.pythonanywhere.com/pasantes')
    .then(response => {
      // Si la respuesta es exitosa, actualiza el estado de la conexión
      connectionStatus.textContent = 'Servidor en línea';
      color.classList.add('online');
    })
    .catch(error => {
      // Si hay un error, actualiza el estado de la conexión
      connectionStatus.textContent = 'Servidor fuera de línea';
      color.classList.add('offline');
    });
});
