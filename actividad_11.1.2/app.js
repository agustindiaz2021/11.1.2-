function obtenerDatos() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la conexión con la API");
        }
        return response.json();
    })
    .then(data => {
        mostrarDatos(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function mostrarDatos(data) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
}
