const paisesDisponibles = ["Argentina", "Chile", "Peru", "Brasil", "Uruguay"];
const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo");

//Asi sabemos cuantos items hay en nuestro array
const cantidadCiudades = ciudadesDisponibles.length;

console.log(`Contamos con ${cantidadCiudades} ciudades disponibles`);
console.log(`Contamos con ${paisesDisponibles.length} paises disponibles`);

//Remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`Contamos con ${ciudadesDisponibles.length} ciudades disponibles`);
//Remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`Contamos con ${ciudadesDisponibles.length} ciudades disponibles`);

//Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 5);
console.log(paisesFiltrados);

//Join une todos los elementos de una lista en un solo elemento alfanumerico
console.log(paisesDisponibles.join('-'));

//Ordenar la lista
console.log(paisesDisponibles.sort());

//Encontrando un elemento en el nuevo orden de la lista
console.log(`Peru esta en el orden numero: ${paisesDisponibles.indexOf("Peru")}`);

//Unificando listas
const listaPaisesyCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesyCiudades);