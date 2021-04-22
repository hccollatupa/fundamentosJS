let a = 10;

if (a >= 10) { //undefined, null, una asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

//console.log('Fin de programa');

const hoy = new Date(); //{}
console.log(hoy);
let dia = hoy.getDay(); //0: Domingo, 1: Lunes, 2: Martes...
console.log({ dia });

console.log(3 === '3');
console.log(3 == '3');
//console.log(3 = '3'); //devuelve un error

/*
"dia = 1" se trata de una asigación, no una condición.
para realizar condiciones nunca se debe utilizar el "=", en su lugar 
utilizar "==".

al utilizar triple igual "===" evalúa el valor y el tipado de los datos
debe ser idéntico, por lo tanto, en este ejemplo se ejecutaría 
el bloque else.
*/
if (dia === 3) {
    console.log('Miércoles');
} else if (dia == 4) {
    console.log('Jueves');
    /*
    if (dia === 4) {
        console.log('Jueves');
    } else {
        console.log('No es miércoles ni jueves');
    }
    */
} else if (dia == 5) {
    console.log('Viernes');
} else {
    console.log('No es miércoles, jueves o viernes');
}

// Sin usar If Else, o Switch, únicamente objetos
dia = 4; //0: domingo, lunes...

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
};
//console.log(diasLetras[dia] || 'Día no definido');

const diasLetras2 = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
];
console.log(diasLetras2[dia] || 'Día no definido');