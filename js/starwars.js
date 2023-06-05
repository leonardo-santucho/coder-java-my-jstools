
// Variables
let searchText = document.getElementById("searchText");
let searchButton = document.getElementById("searchButton");


// Objeto StarWars
class StarWars {
    constructor () {
        this.CantidadDePeliculas = 10;
        this.personajes = [
            {ID:1, name:"Yoda", description:"Uno de los más renombrados y poderosos maestros Jedi durante toda la historia de la Galaxia, y uno de los pocos Jedis de la República Galáctica en sobrevivir hasta la Guerra Civil Galáctica", universo:"Extendido", imagen:"../multimedia/img/yoda.jpg"},
            {ID:1, name:"Darth Vader", description:"Anakin Skywalker, más tarde Darth Vader, se centra en su conocimiento de la Fuerza, su caída al lado Oscuro y, finalmente, su redención y muerte.", universo:"Extendido", imagen:"../multimedia/img/darthvader.jpg"},
            {ID:1, name:"Leia Organa", description:"La Princesa Leia Organa de Alderaan es un personaje de ficción de la saga Star Wars. Es hija de la senadora Padmé Amidala y del Caballero Jedi Anakin Skywalker", universo:"Extendido", imagen:"../multimedia/img/leiaorgana.jpg"},
            {ID:1, name:"Obi-Wan Kenobi", description:"maestro Jedi Obi-Wan Kenobi debe lidiar con las consecuencias de su mayor derrota: la pérdida de su amigo y aprendiz, Anakin Skywalker, a manos del lado oscuro.", universo:"Extendido", imagen:"../multimedia/img/obiwan.jpg"},
            {ID:1, name:"Han Solo", description:"Han Solo es un personaje de ficción y uno de los protagonistas de la saga Star Wars. Fue interpretado por Harrison Ford.", universo:"Extendido", imagen:"../multimedia/img/hansolo.jpg"},
            {ID:1, name:"Chewbacca", description:"Chewbacca es un personaje del universo ficticio de Star Wars. Es un wookiee, un bípedo alto, peludo y robusto, especie inteligente del planeta Kashyyyk.", universo:"Extendido", imagen:"../multimedia/img/chewbacca.jpg"},
            {ID:1, name:"Darth Maul", description:"Darth Maul, también conocido simplemente como Maul, es un personaje de la franquicia Star Wars", universo:"Extendido", imagen:"../multimedia/img/darthmaul.jpg"},
            {ID:1, name:"R2-D2", description:"R2-D2 es un personaje de ficción del Universo de Star Wars. Es un droide astromecánico, contraparte y amigo de C-3PO", universo:"Extendido, Whoniverse", imagen:"../multimedia/img/r2d2.jpg"},
            {ID:1, name:"Jabba", description:"Jabba el Hutt es un personaje ficticio de la serie Star Wars. Apareció por primera vez en la película Star Wars.", universo:"Extendido", imagen:"../multimedia/img/jabba.jpeg"},
            {ID:1, name:"C-3P0", description:"C-3PO es un personaje ficticio del universo de la Guerra de las Galaxias. Se trata de un androide, diseñado para llevar a cabo tareas de etiqueta y protocolo al servicio de los humanos, para lo que domina seis millones de formas de comunicación.", universo:"Extendido", imagen:"../multimedia/img/c3po.jpg"}
        
        ]    
        this.cantidadDePersonajes = this.personajes.length;
        this.primeraPelicula = 1979;
        this.ultimaPelicula = 2015;

    }

    buscarPersonajes(search) {
    
        console.log("Texto buscado: " + search);
   
        let result = this.personajes.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        
        return result;

    }



    
}


function validarFormulario(){
    if (searchText.value == "" ) {
        alert("Error: debe ingresar un personaje a buscar");
        return false;
        
    }

    return true;
}


// Listening...
searchButton.onclick = () => {

    if (validarFormulario()) {

      
        let divResultado = document.getElementById("resultado");

        // Limpio el resultado
        divResultado.innerHTML = "";


        // Busco los personajes de Star Wars
        let personajesEcontrados =  new StarWars().buscarPersonajes(searchText.value)

        if (personajesEcontrados.length == 0) {
            alert("No se encontraron personajes");
            return
        }

        // Recorro cada personaje encontrado y lo inyecto en el HTML
        console.log (personajesEcontrados);
        for (const personaje of personajesEcontrados) {
            
            console.log(personaje.name);

            let div = document.createElement("div");
            div.className = "mb-3 text-center";
            div.innerHTML = `<hr class="my-4">
                <h3>${personaje.name}</h3>
                <img src=${personaje.imagen} class="img-fluid rounded" alt="Foto del personaje"</h3>
                <p class="pt-3">${personaje.description}<p>
                <p><strong>Universo</strong>: ${personaje.universo}<p>
            `;

            divResultado.appendChild(div)
            
        }


    

    
        
    }
    


    }




