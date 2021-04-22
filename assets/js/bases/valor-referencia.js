/*
en javascript todos los primitivos son pasados por valor. Es decir, 
no se afecta el mismo lugar de memoria.
*/
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

/*
en javascript todos los objetos son pasados por referencia.
*/
let juan = { nombre: 'Juan' };
let ana = {...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });

/*
para separar todas las propiedades y valores existe el operador "spread"
que se representa con "..."

la diferencia entre el operador "rest" y el operador "spread" es:

a) cuando los 3 puntos "..." se utiliza en una función como argumento, 
se denomina operador "rest" y se encarga de unir todos los argumentos
en una sola variable como un arreglo.
b) cuando los 3 puntos "..." se utiliza fuera de los argumentos de una 
función, se refiere al operador "spread" y sirve para separar los 
elementos al mismo tiempo que rompe la REFERENCIA permitiendo trabajar
con objetos que apuntan a diferentes espacios de memoria.
*/
const cambiarNombre = ({...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony });

// Rompiedo relación de arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread')
const otrasFrutas = [...frutas]; //forma 1
console.timeEnd('spread')

console.time('slice')
const otrasFrutas2 = frutas.slice(); //forma 2
console.timeEnd('slice')

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });