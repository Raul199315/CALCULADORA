function dijitarNumero(valor) {
    let pantalla = document.getElementById("pantalla");
    pantalla.value += valor;
}

// funcion para borrar

function borrar(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}