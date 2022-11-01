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
const presupuesto = 400;

//DO WHILE
let ciudadSeleccionada = '';
/**/
for (let i = 0; i < datos.length && ciudadSeleccionada == ''; i++){
    if(datos[i].precio <= presupuesto){
        ciudadSeleccionada = datos[i].ciudad;
    }
}
if(ciudadSeleccionada == ''){
    console.log("No hay pasajes disponibles con ese precio");
} else{
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}