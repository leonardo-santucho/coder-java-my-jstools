
const mostrarMensajeErrorValidar = (texto) => {
    Toastify({
        text: texto,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "gray",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  }

class Cuenta {

    constructor (total, personas, propina, mostrarDecimales) {
        this.total = total;
        this.personas = personas;
        this.propina = propina;
        this.mostrarDecimales = mostrarDecimales;
        this.totalPropina = 0;
        this.totalCuentaConPropina = 0;
        this.resultado = 0;

    }

 

    // Valido los datos ingresados
    validar() {
    
        if (!((typeof this.total == "number") && (this.total > 0))) {
            mostrarMensajeErrorValidar("El valor de Total de la Cuenta ingresada no es un número valido.")
            document.getElementById("totalCuenta").focus();
            return false;
        }
    

        if (!((typeof this.personas == "number") && (this.personas > 0))) {
            mostrarMensajeErrorValidar("El valor de la Cantidad de Personas ingresada no es un número valido.")
            document.getElementById("cantidadPersonas").focus();
            return false;
        }

        return true;

    }

    // Calculo cuanto tiene que pagar cada persona
    calcular() {

        if (this.validar()) {

            this.totalPropina = this.total * (this.propina/100);
            this.totalCuentaConPropina = this.total + this.totalPropina;
            this.resultado = Math.ceil((this.totalCuentaConPropina / this.personas)); 

            if (this.mostrarDecimales) {
             
                this.resultado = this.resultado.toFixed(2);

            }
            else {
                this.resultado = this.resultado.toFixed(0);
            }
           
            this.mostrarResultado();
        }        

    }

    // Muestro resultado en un alert y console
    mostrarResultado() {


        let divResultado = document.getElementById("resultado");

        // Limpio el resultado
        divResultado.innerHTML = "";


        let div = document.createElement("div");
        div.innerHTML = `
            <p><strong>Cantidad de Personas: </strong>${this.personas}<p>
            <p><strong>Total del cuenta AR$: </strong>${this.total}<p>
            <p><strong>"% de propina: </strong>: ${this.propina}<p>
            <p><strong>Total de propina AR$: </strong>${this.totalPropina}<p>
            <p><strong>Total de la cuenta con propina AR$: </strong>${this.totalCuentaConPropina}<p>
            <p><strong>Cada debe pagar: AR$: </strong>${this.resultado}<p>
        `;

        divResultado.appendChild(div)


    }

    

} 


function calcular() {

    let cantidadPersonas = parseInt(document.getElementById("cantidadPersonas").value);   // parseInt(prompt("Ingrese la cantidad de personas:"));
    let totalCuenta = parseFloat(document.getElementById("totalCuenta").value);           // parseFloat(prompt("Ingrese el total del cuenta:"));
    let porcentajePropina = parseInt(document.getElementById("propinaValue").innerHTML);      // parseFloat(prompt("Indique el porcentaje de propina en %: "));
    let mostrarDecimales = document.getElementById("redondeoCheck").checked;

    const cuenta = new Cuenta(totalCuenta, cantidadPersonas, porcentajePropina, mostrarDecimales);

    cuenta.calcular();

}

// Slider - Propina 
let slider = document.getElementById("propinaRango");
let output = document.getElementById("propinaValue");
let propinaText = document.getElementById("propinaText");

output.innerHTML = slider.value;
propinaText.innerHTML = " % - Buena antención";

slider.oninput = function() { 
    output.innerHTML = this.value;
  
    // Descripcion de la propina a partir del valor 
    switch(parseInt(this.value)) {
        case 0: 
            propinaText.innerHTML = " % - Un desastre la atención";
            break;
            
        case 10:
            propinaText.innerHTML = " % - Buena antención";
            break;
            
        case 20:
            propinaText.innerHTML = " % - Muy buena antención";
            break;
            
        case 30:
            propinaText.innerHTML = " % - Excelente atención";
            break;
            
        }
    }
    



