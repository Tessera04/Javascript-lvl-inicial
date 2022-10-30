const ciudad1 = "Buenos Aires";
const ciudad2 = "Bogota";
const ciudad3 = "Sao Paulo";
//Si tenemos 100 ciudades no podemos hacer esto para cada una.

//Definicion de una lista con tipo de dato alfanumerico.
//Cada elemento de la lista tiene una posicion o numero (El indice comienza en 0).
const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo");
console.log(ciudadesDisponibles);

//Definir una lista de forma abreviada
const paisesDisponibles = ["Argentina", "Chile", "Peru", "Brasil", "Uruguay"];
console.log(paisesDisponibles);


//Push sirve para poner un elemento al final de la lista
//Unshift sirve para poner elementos al inicio de la lista
{
    paisesDisponibles.push("Bolivia");
    ciudadesDisponibles.push("La Paz");

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    paisesDisponibles.unshift("Paraguay");
    ciudadesDisponibles.unshift("Asuncion");

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);
}