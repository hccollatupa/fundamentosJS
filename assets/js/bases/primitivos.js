let nombre = "Peter Parker";
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Mery Jane`;

console.log(typeof nombre);

//Aquí se demuestra que js es débilmente tipado
nombre = 123;
console.log(typeof nombre);

//No se acepta False con la primera letra en mayúscula
let esMarvel = false;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

//Aunque se tenga un decimal, cuando en otros lenguajes 
//este valor sería un flotante, para js sigue siendo un número
edad = 33.001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder);

//Por esta razón muchos consideran null como objeto
let soyNull = null;
console.log(typeof soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1)

console.log(symbol1 === symbol2);