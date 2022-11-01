const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");
const precioCiudad = new Array(500, 200, 800, 300);
const datos = [
    {
        'ciudad': 'Bogota',
        'precio': 500 
    },
    {
        'ciudad': 'Buenos Aires',
        'precio': 200 
    },
    {
        'ciudad': 'Sao Paulo',
        'precio': 800 
    },
    {
        'ciudad': 'Montevideo',
        'precio': 300 
    }
]
const presupuesto = 190;

let i = 0;

//While actua 0 o mas veces
/*while( i < datos.length && datos[i].precio > presupuesto){
    i++
}
if(i == datos.length){
    console.log("No hay pasajes disponibles con ese precio");
} else{
    console.log("Puedes comprar pasaje para: " + datos[i].ciudad);
}*/



//DO WHILE
let ciudadSeleccionada = '';

do{
    if(datos[i].precio <= presupuesto){
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++
} while(i < datos.length && ciudadSeleccionada == '');
if(i == datos.length){
    console.log("No hay pasajes disponibles con ese precio");
} else{
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}