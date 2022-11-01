const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");

let ciudadDestino = "Sao Paulo";
let edadPasajero = 19;
let estaAcompanado = false;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Confirmando pasaje para ${ciudadDestino}...`)

// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 && edadPasajero >= 18 && tienePasaporte && !estaCasado){
    console.log('Pasaje para solteros disponible para la venta');
} else{
    console.log('No hay pasajes para ese destino o usted no cumple las reglas para viajar');
}