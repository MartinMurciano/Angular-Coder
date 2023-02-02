console.log('Hola Mundo!');
var mensaje1 = "hola!"; // Variable
var mensaje2 = "otro mensaje"; //Constante no cambia su valor
var mensaje3 = mensaje1 + " " + mensaje2;

function imprimirMensaje() {
    console.log("Enum: ", opciones);
}
var opciones;
(function (opciones) {
    opciones[opciones["Si"] = 1] = "Si";
    opciones[opciones["No"] = 2] = "No";
})(opciones || (opciones = {}));


imprimirMensaje();
