let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let primero2 = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//Agregar elemento al final
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

//Agregar elemento al inicio
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//Eliminar elemento del final
let juegoBorrado = juegos.pop()
console.log({ juegoBorrado, juegos });

//Eliminar elemento en un lugar particular y retorna
//elementos eliminados
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

/*
Buscar índice de un elemento, si no lo encuentra retorna -1
*/
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);