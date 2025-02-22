// Crear un array para almacenar los nombres
let amigos = []


// Implementa una función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        // Actualiza lista en html
        //actualizarLista();
    }

    inputAmigo.value = ""; // Limpiar el campo de entrada
    inputAmigo.focus(); // Mantener el foco en el input
    console.log(amigos);
    
}


// Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    // Limpia contenido de la lista actual
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Implementa una función para actualizar la lista de amigos
function sortear()


// Implementa una función para mostrar amigos

