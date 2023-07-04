// Uso de libreria Luxon para calcular fechas y tiempos
const interval = luxon.Interval;
const dateTime = luxon.DateTime;


// Fechas 
const fechaNacimientoMirthaLegrand = dateTime.fromISO('1927-02-23');
const fechaCampeonesDelMundo = dateTime.fromISO("2022-12-18");
const fechaProximoMundial = dateTime.fromISO("2026-06-09");
const feriados2023 = [
                    {ID:1, nombre:"Dia del trabajador", fecha:"2023-05-01"},
                    {ID:2, nombre:"Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes", fecha:"2023-06-17"},
                    {ID:3, nombre:"Paso a la Inmortalidad del Gral. Manuel Belgrano", fecha:"2023-06-19"},
                    {ID:4, nombre:"Feriado con fines turísticos", fecha:"2023-06-20"},
                    {ID:5, nombre:"Día de la Independencia", fecha:"2023-07-09"},
                    {ID:6, nombre:"Paso a la Inmortalidad del Gral. José de San Martín", fecha:"2023-08-17"},
                    {ID:6, nombre:"Feriado con fines turísticos", fecha:"2023-10-13"},
                    {ID:6, nombre:"Día del Respeto a la Diversidad Cultural", fecha:"2023-10-16"}, 
                    {ID:6, nombre:"Día de la Soberanía Nacional", fecha:"2023-11-20"},
                    {ID:6, nombre:"Inmaculada Concepción de María", fecha:"2023-12-08"},
                    {ID:6, nombre:"Navidad", fecha:"2023-12-25"},
                ]    
const fechaActual = dateTime.now();



// Calculo edad de Mirtha Legrand
const intervalMirthaLegrand = interval.fromDateTimes(fechaNacimientoMirthaLegrand, fechaActual);

// Calculo datos de mundial 
const intervalCampeonesDelMundo = interval.fromDateTimes(fechaCampeonesDelMundo, fechaActual)
const intervalParaElProximoMundial = interval.fromDateTimes(fechaActual, fechaProximoMundial);


// Calculo proximos feriados
let diasParaElProximoFeriado = 366;
let proximoFeriado;
for (const feriado of feriados2023) {

    let fechaFeriado = dateTime.fromISO(feriado.fecha);
    let intervalo = interval.fromDateTimes(fechaActual, fechaFeriado);
    
    if (intervalo.isValid) {
  
        if (intervalo.length("days") < diasParaElProximoFeriado) {
            diasParaElProximoFeriado = intervalo.length("days");
            proximoFeriado = feriado
        }
        
    }

}


// Diferencias horarios con Buenos Aires 
let local = dateTime.local();

let fechaNewYork = local.setZone("America/New_York").toLocaleString(dateTime.DATETIME_FULL);
let fechaBogota = local.setZone("America/Bogota").toLocaleString(dateTime.DATETIME_FULL);
let fechaSantiago = local.setZone("America/Santiago").toLocaleString(dateTime.DATETIME_FULL);
let fechaSanPablo = local.setZone("America/Sao_Paulo").toLocaleString(dateTime.DATETIME_FULL);
let fechaLima = local.setZone("America/Lima").toLocaleString(dateTime.DATETIME_FULL);
let fechaBuenosAires = dateTime.now().toLocaleString(dateTime.DATETIME_FULL);




// Logs
// console.log(Math.ceil(intervalMirthaLegrand.length("days")) + ' dias.');
// console.log(Math.ceil(intervalParaElProximoMundial.length("days")) + ' dias.');
// console.log(Math.ceil(intervalCampeonesDelMundo.length("days")) + ' dias.');
// console.log(Math.ceil(intervalParaElProximoMundial.length("days")) + ' dias.');
// console.log(proximoFeriado);
// console.log(diasParaElProximoFeriado);
// console.log(fechaLosAngeles); 
// console.log(fechaBuenosAires); 
// console.log(fechaBogota); 
// console.log(fechaSantiago); 
// console.log(fechaCiudadDeMexico); 
// console.log(fechaSanPablo); 
// console.log(fechaMontevideo); 
// console.log(fechaLima); 
// console.log(fechaGuayaquil); 






let divResultadoFechasImportantes = document.getElementById("resultadoFechasImportantes");
let divDiferenciaHorario = document.getElementById("resultadoDiferenciaHorario")
let divNew1 = document.createElement("div");
let divNew2 = document.createElement("div");

divResultadoFechasImportantes.innerHTML = "";
divNew1.innerHTML = `
                <p>Mirtha Legrand nació hace <strong>${Math.ceil(intervalMirthaLegrand.length("days"))} días</strong>. Es decir; tiene <strong>${Math.floor(intervalMirthaLegrand.length("years"))} años</strong>.<p>
                <p>Argentina ganó La Tercera hace <strong>${Math.ceil(intervalCampeonesDelMundo.length("days"))} días</strong>. Y faltan <strong>${Math.floor(intervalParaElProximoMundial.length("days"))} días</strong> para el próximo mundial.<p>
                <p>Faltan <strong>${Math.ceil(diasParaElProximoFeriado)} día(s)</strong> para el próximo feriado <strong>${proximoFeriado.nombre} el ${proximoFeriado.fecha}</strong>.<p>
                `;
divResultadoFechasImportantes.appendChild(divNew1);

divDiferenciaHorario.innerHTML = ""
divNew2.innerHTML = `
                <p><strong>Buenos Aires, Argentina: </strong> ${fechaBuenosAires}.<p>
                <p><strong>New York, USA: </strong> ${fechaNewYork}.<p>
                <p><strong>Bogota, Colombia: </strong> ${fechaBogota}.<p>
                <p><strong>Santiago, Chile: </strong> ${fechaSantiago}.<p>
                <p><strong>San Pablo, Brazil: </strong> ${fechaSanPablo}.<p>
                <p><strong>Lima, Perú: </strong>${fechaLima}.<p>

                `;

divDiferenciaHorario.appendChild(divNew2);








