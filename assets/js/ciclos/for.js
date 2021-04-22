const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
/*
no se recomienda declarar las variables con "var" porque crea las 
variables en un nivel global.
*/

//for (let i = 0; i <= heroes.length - 1; i++) {
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('For in');
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of');
for (let heroe of heroes) {
    console.log(heroe);
}