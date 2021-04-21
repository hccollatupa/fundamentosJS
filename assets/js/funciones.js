/*
todas las funciones tradicionales (No sucede con las funciones flecha)
manejan de manera implícita la variable "arguments"
*/
function saludar(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

/*
al declarar la variable "saludar" con "var" se genera un error
algo que no sucedería si trabajamos con "let".
*/
//var saludar = 123;

/*función anónima.*/
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

/*
las funciones de flecha también son conocidas como lambda function
y es una nueva característica en el ES6 o Javascript del 2015.
*/
const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

/*
si no le pasamos el parámetro, por defecto toda variable no inicializada
toma el valor "undefined"
*/
saludar('Hector', 40, true, 'Costa Rica');
//saludar2('Hector');

saludarFlecha();
saludarFlecha2('Hector');