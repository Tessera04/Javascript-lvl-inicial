const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");

const ciudadDestino = "Sao Paulo";
const edadPasajero = 16;
const estaAcompanado = false;

console.log(`Confirmando pasaje para ${ciudadDestino}...`)

if (edadPasajero >= 18 || estaAcompanado){
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
        console.log('Pasaje disponible para la venta');
    } else{
        console.log('No hay pasajes para ese destino');
    }
}else{
    if (edadPasajero >= 16 && ciudadDestino == 'Sao Paulo'){
        console.log('Pasaje disponible para la venta');
    }else{
        console.log('Usted no esta apto para viajar');
    }
}