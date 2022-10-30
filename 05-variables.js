//Variables
//Const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo

const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = 'Leonardo';
const apellidoPasajero = 'DelaCruz';

console.log(nombrePasajero);
console.log(apellidoPasajero);

//Let
//Espacio de memoria que puede cambiar durante la ejecucion del programa
let nombreCompleto = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompleto);

//Var
//Espacio de memoria que puede cambiar durante la ejecucion del programa
//El alcance de la palabra var es global y el de let es de bloques (function)
var nombreDelPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreDelPasajero);

//Bloque

{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreDelPasajero);
}

console.log("Variable con var: " + nombreDelPasajero);
console.log("Variable con let: " + nombreCompletoPasajero);

//La variable let afuera del bloque no funciona pero la var si.
