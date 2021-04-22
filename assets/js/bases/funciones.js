/*
todas las funciones tradicionales (No sucede con las funciones flecha)
manejan de manera implícita la variable "arguments"
*/
function saludar(nombre) {
    //console.log(arguments);
    //console.log('Hola ' + nombre);
    return [1, 2, 3];

    //Esto nunca se va a ejecutar
    console.log("Soy un código que está después del return");
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
const retornoDeSaludar = saludar('Hector', 40, true, 'Costa Rica');
//console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
//saludar2('Hector');

//saludarFlecha();
//saludarFlecha2('Hector');

/*
toda función en javascript si no tiene explícitamente la palabra
reservada "return", por defecto retorna "undefined".
*/

function sumar(a, b) {
    return a + b;
}

/*
const sumar2 = (a, b) => {
    return a + b;
}
*/

/*
una particularidad de las funciones de flecha es que no necesitan
la palabra reservada "return".
*/
const sumar2 = (a, b) => a + b;
//console.log(sumar2(2, 2));

function getAleatorio() {
    return Math.random();
}
//console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());