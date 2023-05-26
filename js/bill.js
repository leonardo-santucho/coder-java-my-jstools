

class Cuenta {

    constructor (total, personas, propina, redondear) {
        this.total = total;
        this.personas = personas;
        this.propina = propina;
        this.redondear = redondear;
        this.totalPropina = 0;
        this.totalCuentaConPropina = 0;
        this.resultado = 0;

    }


    // Valido los datos ingresados
    validar() {

        if (!((typeof this.personas == "number") && (this.personas > 0))) {
            alert("El valor de la Cantidad de Personas ingresada no es un número valido.");
            return false;
        }

    
        if (!((typeof this.total == "number") && (this.total > 0))) {
            alert("El valor de Total de la Cuenta ingresada no es un número valido.");
            return false;
        }
    
        if (!((typeof this.propina == "number") && (this.propina >= 0))) {
            alert("El valor de la Propina no es un número valido.");
            return false;
        }
    
        return true;

    }

    // Calculo cuanto tiene que pagar cada persona
    calcular() {

        if (this.validar()) {
            
            this.totalPropina = this.total * (this.propina/100);
            this.totalCuentaConPropina = this.total + this.totalPropina;
            this.resultado = this.totalCuentaConPropina / this.personas;

            this.mostrarResultado();
        }        

    }

    // Muestro resultado en un alert y console
    mostrarResultado() {

        console.log(this);

        let salida = "";

        salida += "Cantidad de personas: " + this.personas + "\n";
        salida += "Total del cuenta AR$: " + this.total + "\n";
        salida += "% de propina: " + this.propina + "%\n";
        salida += "Total de propina AR$: " + this.totalPropina + "\n"
        salida += "Total de la cuenta con propina AR$: " + this.totalCuentaConPropina + "\n";
        salida += "--------------------------------------------------------------------\n"

        for (let index = 0; index < this.personas; index++) {

            
            
            // Si la cantidad de personas es mayor 10 personas aviso que no puedo mostrar todo 
            // el resultado en el alert porque ser verá muy extenso, y salgo del for.
            if (index === 10) {
                salida += "...\n"
                salida += "Persona " + personas + " debe pagar: " + this.resultado;
                break;
            } else {
                salida += "Persona " + (index + 1) + " debe pagar: " + this.resultado + "\n";
            }


            
        }

        alert(salida);
   

    }

} 

let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
let totalCuenta = parseFloat(prompt("Ingrese el total del cuenta:"));
let porcentajePropina = parseFloat(prompt("Indique el porcentaje de propina en %: "));
let redondeo = 0;

const cuenta = new Cuenta(totalCuenta, cantidadPersonas, porcentajePropina, redondeo);

cuenta.calcular();

