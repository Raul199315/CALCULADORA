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
// funcion para cambiar de tema

function tema(){
    let opciones = document.querySelector('selec').value;
    if(opciones == "claro" ){
        
    }
}