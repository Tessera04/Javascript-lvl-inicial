//Tipos de datos
//Alfanumerico

const nombrePasajero = 'Pedro Silva';
console.log(nombrePasajero);
//nombrePasajero = 'Eduardo Silva';
console.log(nombrePasajero); //No deja pq es una constante

let nombrePasajero2 = 'Pedro Silva';
console.log(nombrePasajero2);
nombrePasajero2 = 'Eduardo Silva';
console.log(nombrePasajero2); //Si es un let o un var si nos deja modificar su contenido

//Numerico
const valorBoleto = 1650;
console.log(valorBoleto); //si lo ponemos entre comillas "1650" se vuelve un dato alfanumerico
let impuestos = 100;
var descuento = 500;
let pasajeros = 50;

//Logicos (Booleanos true o false)

let boletoActivo = true;
console.log(boletoActivo);

//Operaciones aritmeticas
//Suma
let totalBoletos = valorBoleto + 70 + 100 + 80 + impuestos;
console.log(totalBoletos);

//Resta
let precioFinal = totalBoletos - descuento;
console.log(precioFinal);

//Multiplicacion
let totalVentas = totalBoletos*pasajeros;
console.log(totalVentas);

//Division

//Resto

//Orden de importancia
//()
// * y /
//+ y -

//Concatenacion de textos
let nombrePiloto = 'Roberto';
let apellidoPiloto = ' Gomez';

let nombreCompleto = nombrePiloto + apellidoPiloto;
let pasaporte = '1000' + '12';
let cuenta = parseInt('1000') / parseFloat('12');

console.log(nombreCompleto);
console.log(pasaporte); //da un error pq lo estoy sumando como alfanumerico
console.log(cuenta);

//Not a number

let notANumber = parseInt('ASASASA');
console.log(notANumber);