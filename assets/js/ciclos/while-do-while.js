const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

/*
para que el ciclo while se ejecute, es necesario que la expresión
a evaluar siempre retorne true. Los casos que devolvería false son
cuando se obtiene undefined, null o false.
*/
let i = 0;

console.warn('While');
/*
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}
*/

while (carros[i]) {
    if (i === 1) {
        //break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.warn('Do While');
let j = 10;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);