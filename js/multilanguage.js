



let multiIdioma;
let buttonLanguage = document.getElementById("buttonLanguage");

let idiomaSeleccionado;
let phrases = {};


// Funcion para cambiar el idioma que se va a llamar caundo carga la pagina o cuando se hace clicke en el button de idioma
function cargarIdioma (isLoadPage) {


    // Si proviene de la carga de pagina, seteo el idioma de acuerdo a lo que esta en la local storage
    if (isLoadPage) {


        
        // El idioma se guarda en una variable local, con lo cual controlo porque puede ser null, 
        // Si es null pongo por default español, uso condicion ternario
        this.idiomaSeleccionado = localStorage.getItem("idioma") == null ? "ES" : localStorage.getItem("idioma");


    } else {

        console.log("hola");

        console.log(buttonLanguage.innerHTML);

        // Hizo click en el boton de cambio de idioma
        if (buttonLanguage.innerHTML == "ES") {
            this.idiomaSeleccionado = "EN";
        } else {
            this.idiomaSeleccionado = "ES";
        } 
        
    }

    // Cambio el nombrel del boton y guardo el idioma seleccionado en la local storage.
    buttonLanguage.innerHTML = this.idiomaSeleccionado.toLocaleUpperCase();
    localStorage.setItem("idioma", this.idiomaSeleccionado)

    console.log(this.idiomaSeleccionado);


    // Un vez que tengo el idioma seleccionado cargo el archivo JSON con todas las frases
    cargarArchivoDeIdioma("./language/languages.json", localStorage.getItem("idioma"));


}

function cambiarIdioma() {


    // Obtengo todos los nodos y los recorro

    let allNodes = document.body.getElementsByTagName("*");

    for (let i = 0; i < allNodes.length; i++) {
        let idName = allNodes[i].id;

        // Si el elemento tiene id realizo el cambio de idioma
        if (idName != '') {

           

                let frase = this.obtenerFrase(idName) 
                

                if (frase != '') {
                    allNodes[i].textContent = frase;
                }
                
            
          
                


        }
        
        
    }

}

this.obtenerFrase = function (idname) {

    let frase;

    // console.log('idioma sel: ' + this.idiomaSeleccionado);
    // console.log('frases: ' + this.phrases);
    

    // console.log(idiomaSeleccionado);
    // console.log(idname);
    // console.log(this.phrases);
    // console.log(this.phrases[this.idiomaSeleccionado][idname]);
    // console.log(this.phrases["EN"]["dashboardDescripcion"]);

    // Verifico si algun idioma fue cargado
    if (this.phrases[this.idiomaSeleccionado]) frase = this.phrases[this.idiomaSeleccionado][idname];

 

    // Si no exite la frase en el file, devuelvo null
    frase = (frase || '');

    return frase;
}


async function cargarArchivoDeIdioma (url, idioma) {


    
        // this.phrases = {};
        // this.idiomaSeleccionado = idioma;
    
        // Cargo el archivo json que contienen la frases
        try {
        
            const respuesta = await fetch(url);
            this.phrases = await respuesta.json();
    

            // console.log(this.phrases);
            // console.log(this.phrases["EN"]["dashboardDescripcion"]);

            // Si el archivo cargo correctamente llamo la funcion para cambiar el idioma
            this.cambiarIdioma();
    
    
        } catch (error) {
            console.log("error no se cargo el archivo!");
        }



       
    }
    



    

    
