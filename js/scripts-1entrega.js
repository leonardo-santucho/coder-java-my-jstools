
// Declaracion de variables globales
let cantidadDePersonas = 0;
let totalDeLaCuenta = 0;
let propina = 0;
let resultado = 0;

// Funciones flechas
const totalPropina = (a, b) => {return a * (b / 100)}; // calculo el total en $ de propina que voy a dejar. 
const totalDeLaCuentaConPropina = (a, b) => {return a + b}; // al total de la cuenta le sumo la propina.
const redondear = (a) => {return Math.round(a)}; // redondeo el resultado final

// Realizo el calculo de cuanto tienen que pagar cada persona
function calcular () {

   
    if (validar()) {

        resultado = (totalDeLaCuentaConPropina(totalPropina(totalDeLaCuenta, propina), totalDeLaCuenta) / cantidadDePersonas).toFixed(2);

        mostrarResultado();

    }
   
}

// Solicitud de ingreso de datos y validaciones
function validar() {
   
    cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
    console.log(cantidadDePersonas);
    if (!validarCantidadDePersonas(cantidadDePersonas)) {
        alert("El valor de la Cantidad de Personas ingresada no es un número valido.");
        return false;
    }

    totalDeLaCuenta = parseFloat(prompt("Ingrese el total del cuenta:"));
    if (!validarTotalDeLaCuenta(totalDeLaCuenta)) {
        alert("El valor de Total de la Cuenta ingresada no es un número valido.");
        return false;
    }

    propina = parseFloat(prompt("Indique el porcentaje de propina en %: "));
    if (!validarPorcentajeDePropina(propina)) {
        alert("El valor de la Propina no es un número valido.");
        return false;
    }

    return true;


}

// Valido si la cantidad de personas es numero y mayor a 0
function validarCantidadDePersonas(x){ 
    return ((typeof x == "number") && (x > 0)); 
}

// Valido si el valor del total es numero y mayor a 0
function validarTotalDeLaCuenta(x){ 
    return ((typeof x == "number") && (x > 0)); 
}

// Valido si el valor de la propina es igual o mayor 0. 
function validarPorcentajeDePropina(x){ 
    return ((typeof x == "number") && (x => 0)); 
}


// Mostrar el resultado final
function mostrarResultado () {

    let salida = "";

    salida += "Cantidad de personas: " + cantidadDePersonas + "\n";
    salida += "Total del cuenta AR$: " + totalDeLaCuenta + "\n";
    salida += "% de propina: " + propina + "%\n";
    salida += "Total de propina AR$: " + totalPropina(totalDeLaCuenta, propina) + "\n"
    salida += "Total de la cuenta con propina AR$: " + totalDeLaCuentaConPropina(totalPropina(totalDeLaCuenta, propina), totalDeLaCuenta) + "\n";
    salida += "--------------------------------------------------------------------\n"

    for (let index = 0; index < cantidadDePersonas; index++) {

        
        
        // Si la cantidad de personas es mayor 10 personas aviso que no puedo mostrar todo 
        // el resultado en el alert porque ser verá muy extenso, y salgo del for.
        if (index === 10) {
            salida += "...\n"
            salida += "Persona " + cantidadDePersonas + " debe pagar: " + resultado;
            break;
        } else {
            salida += "Persona " + (index + 1) + " debe pagar: " + resultado + "\n";
        }


        
    }

    alert(salida);

}


calcular();




