// variables 
let numerosEnPantalla ;
let numerosDijitados ;
let ultimoNumero = [];



function dijitarNumero(valor) {
    let pantalla = document.getElementById("pantalla");
    pantalla.value += valor;
    return valor;
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

function capturarUtimoNumeor(){
        // Obtener el elemento de entrada por su id
        let input = document.getElementById('pantalla');
    
        // Obtener el valor actual del input
        let valor = input.value;
    
        // Eliminar el último carácter (en este caso, número) del valor del input
        let nuevoValor = valor.slice(0, -1);
    
        // Asignar el nuevo valor al input
        input.value = nuevoValor;
}