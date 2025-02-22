// Crear un array para almacenar los nombres
let amigos = []


// Implementa una función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        // Actualiza lista en html
        actualizarLista();
    }

    inputAmigo.value = ""; // Limpiar el campo de entrada
    inputAmigo.focus(); // Mantener el foco en el input
    console.log(amigos);
    
}


// Implementa una función para actualizar la lista de amigos del html
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

// Implementa una función para sortear los amigos
function sortearAmigo(){
    // Valiar que haya al menos dos amigos
    if (amigos.length < 2) {
        alert("Agregar Mas Amigos para sortear");
        return;
    }
    // Sortear amigos
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    // Mostrar el amigo sorteado    
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
}



