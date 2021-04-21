alert("Hola desde app.js"); //"alert" se encuentro del objeto global Windows

//console.log('Hola Mundo');
let a = 10; //Recomendado para valores que van a cambiar
var b = 10; //No se debería usar
const c = 10; //Recomendado para valores estáticos
d = 6; //Es una forma de inicialización antigua

//c = 20;//no se puede asignar un valor a una constante.

/*
-var es una manera antigua de declarar variables.
-ES5 soportada en toos los navegadores
-ES6/ES2015, ES7/ES2016, ES8/ES2017 soportado por la mayoría de navegadores.
- Un polyfill o polyfiller es un módulo de código más o menos extenso que hace que las funciones modernas de HTML, CSS o JavaScript estén disponibles en navegadores antiguos que ya no son compatibles con estas.
*/

let e = 10,
    f = 10,
    g = 20,
    h = 30,
    x = e + f;

/*
console.log(x);
console.warn(x);
console.error(x);
console.info(x);
*/

console.log('%c Mis variables', 'color:blue; font-weight:bold');
console.log({ e });
console.log({ f });
console.log({ g });

let i = 5;
let j = 3;
let k = 'Hola ';
let l = 'Spiderman';
let m = 7;

//console.table([i, j, k, l, m]);

//Las constantes carecen de propiedades para establecer o cambiar su valor por lo cual son más ligeras que una variable declarada con let.
//Sólo cuando se trate de constantes de entorno, el nombre de la constante debe ir en mayúscula.
const saludo = k + l;

console.log(saludo);

var miNombre = "Hector"; //Declaramos la variable a la antigua.
let outerWidth = 100000;
const outerHeight = 600;