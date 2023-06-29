
// rapid-api
// const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b7d3653df4msh6f89b09c652e667p180931jsn51b8836124e4',
// 		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


// fakestoreapi
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))



// fetch("../language/languages.json")
//     .then(res=>res.json())
//     .then(json=>console.log(json))
//     // .then(json=> {

//     //     let salida = "";

//     //     json.forEach(item => {
//     //         salida =+ `
//     //         <p class="pt-3">${personaje.description}<p>
//     //     `;
//     //     });

//     // });


let phrases = {};

async function obtenerProductos() {

    
    try {
        
        const respuesta = await fetch("../language/languages.json");
        const datos = await respuesta.json();

    //    this.phrases = JSON.parse(datos);
        console.log(datos);
        console.log(datos["EN"]["dashboardDescripcion"]);


    } catch (error) {
        console.log("error no se cargo el archivo!");
    }}


obtenerProductos();




// async function obtenerClima () {

//     const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'b7d3653df4msh6f89b09c652e667p180931jsn51b8836124e4',
//             'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//         }
//     };
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// obtenerClima();
