function dijitarNumero(valor) {
    let pantalla = document.getElementById("pantalla");
    pantalla.value += valor;
}

// funcion para borrar

function borrar(){
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}

// Función para calcular el resultado
function calcularResultado() {
    let pantalla = document.getElementById("pantalla");
    try {
        pantalla.value = eval(pantalla.value);
    } catch (e) {
        pantalla.value = "Error"
    }
}