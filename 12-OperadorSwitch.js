const ciudadesDisponibles = new Array("Bogota", "Buenos Aires", "Sao Paulo", "Montevideo");
const ciudadDestino = "Sao Paulo";

let valorPasaje = 0;

//Forma de hacerlo con metodo IF
/*if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
    if (ciudadDestino == "Bogota"){
        valorPasaje = 600;
    }else if (ciudadDestino == "Buenos Aires"){
        valorPasaje = 200;
    }else if (ciudadDestino == "Sao Paulo"){
        valorPasaje = 800;
    }else if (ciudadDestino == "Montevideo"){
        valorPasaje = 300;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}else{
    console.log('Ciudad no disponible para viajar');
}*/

//Forma de hacerlo con metodo SWITCH
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
    switch(ciudadDestino){
        case "Bogota":
            valorPasaje = 500;
            break;
        case "Buenos Aires":
            valorPasaje = 200;
            break;
        case "Sao Paulo":
            valorPasaje = 800;
            break;
        case "Montevideo":
            valorPasaje = 300;
            break;
        default:
            console.log('Ciudad no disponible para viajar');
            break;
    }
    if(valorPasaje > 0){
        console.log(`El valor del pasaje es: ${valorPasaje}`);
    }
}