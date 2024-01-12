
// Variablesss
let searchText = document.getElementById("searchText");
let searchButton = document.getElementById("searchButton");


// Objeto StarWars
class StarWars {
   

    obtenerPersonaje = async (search) => {

        try {
    
            let divResultado = document.getElementById("resultado");
            let innerHTML = "";
    
            // Limpio el resultado
            divResultado.innerHTML = "";
    
            let url = "https://swapi.dev/api/people/?search=" + search

    
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            const array = datos.results;

            if (datos.count == 0) {

                    Swal.fire({
                        icon: 'info',
                        title: 'Oops...',
                        text: 'No se econtraron personajes!'
        
                      })
        
                    return
                
            }
    
    
            if (Array.isArray(array)) {
                array.forEach((item) => {
                    // console.log(item);
                    // console.log(item.name);
    
                    let div = document.createElement("div");
                    div.className = "mb-3 text-center";

                    
                    innerHTML = `<hr class="my-4">
                        <h3>${item.name}</h3>
                        <p class="pt-3"><strong>Género</strong>: ${item.gender}<p>
                        <p><strong>Color ojos</strong>: ${item.hair_color}<p>
                        <p><strong>Color piel</strong>: ${item.skin_color}<p>
                        <p><strong>Altura</strong>: ${item.height}<p>
                        <p><strong>Peso</strong>: ${item.mass}<p>
                    `;
    
                   
                    div.innerHTML = innerHTML;
       
        
                    divResultado.appendChild(div)
                });
    
            } else {
                console.error("Los datos obtenidos no son un arrreglo");
            }
    
    
        } catch (error) {
            console.error(error);
        }
    
    
    }


}


// Validar formulario y mostrar resultado
function validarFormulario(){
    if (searchText.value == "" ) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error: debe ingresar un personaje a buscar!'

          })

        searchText.focus();
        return false;

    }

    return true;
}

function mostrarResutlado() {

    if (validarFormulario()) {
        let sw = new StarWars();
        sw.obtenerPersonaje(searchText.value)

    }



}


// Listening... busco al presionar el boton buscar o al presionar "enter" sobre el textbox
searchButton.onclick = () => {

    mostrarResutlado();


}

searchText.addEventListener("keydown", (ev) => {

    if (ev.key == "Enter") {
        mostrarResutlado();
    }

})







