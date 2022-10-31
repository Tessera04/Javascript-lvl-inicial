//Operadores de comparacion

const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");

//palabra reservada if 
//evalua una condicion Ejemplo

//    si (ciudadDestino esta dentro de la lista){
//    escribe "Vendo el pasaje"
//   }

if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponible para la venta');
}

const ciudadDestino2 = "Madrid";
const ciudadesDisponibles2 = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");
if(ciudadesDisponibles2.indexOf(ciudadDestino2) >= 0){
    console.log('Pasaje disponible para la venta');
} else{
    console.log('No hay pasajes para ese destino');
}

//Operadores
// >, >= / Mayor y Mayor-o-igual
// <, <= / Menor y Menor-o-igual
// ==, != / Igual y Diferente
// === / Exactamente igual, con tipo de texto (string, num, etc) y todo

const valorPasaje = "1000";

if(valorPasaje == 1000){
    console.log('El pasaje vale 1000 pesulis, (==)');
}

if(valorPasaje === 1000){
    console.log('El pasaje vale 1000 pesulis (===)');
} //El comparador (===) necesita que los valores sean del mismo tipo, el == no necesita eso

//Operadores Logicos
// Y (And), O (Or), No (Not).
// AND = && / En este operador se deben cumplir las dos opciones
// OR = || / Se debe cumplir una condicion al menos
// NOT = ! / No se cumple ninguna condicion

const edadPasajero = 19;
const estaAcompanado = false;

console.log(`Confirmando pasaje para ${ciudadDestino}...`)
if ((edadPasajero >= 18 || estaAcompanado) && (ciudadesDisponibles2.indexOf(ciudadDestino) > -1)){
    console.log('Pasaje disponible para la venta');
} else{
    console.log('No hay pasajes para ese destino o usted no esta apto para viajar');
}

//Aplicando logica negativa

console.log(`Confirmando pasaje para ${ciudadDestino}...`)
if (!((edadPasajero >= 18 || estaAcompanado) && (ciudadesDisponibles2.indexOf(ciudadDestino) > -1))){
    console.log('No hay pasajes para ese destino o usted no esta apto para viajar');
} else{
    console.log('Pasaje disponible para la venta');
}