const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");
const precioCiudad = new Array(500, 200, 800, 300);
const presupuesto = 120;

let i = 0;
//While actua 0 o mas veces
while(precioCiudad[i] > presupuesto && i < ciudadesDisponibles.length){
    i++
}
if(i == ciudadesDisponibles.length){
    console.log("No hay pasajes disponibles con ese precio");
} else{
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);
}

//Do While actua 1 o mas veces
do{
    i++
}while(precioCiudad[i] > presupuesto && i < ciudadesDisponibles.length);

if(i == ciudadesDisponibles.length){
    console.log("No hay pasajes disponibles con ese precio");
} else{
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);
}