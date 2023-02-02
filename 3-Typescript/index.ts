console.log('Hola Mundo!');

let mensaje1: String = "hola!"; // Variable

const mensaje2: String = "otro mensaje"; //Constante no cambia su valor

let mensaje3: string = mensaje1 + " " + mensaje2;

function imprimirMensaje(){
    console.log("Enum: ", opciones);
}

enum opciones{
    Si = 1,
    No = 2
}

imprimirMensaje();