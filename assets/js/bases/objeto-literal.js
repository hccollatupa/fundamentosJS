const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);

console.log('Nro. Trajes', personaje.trajes.length);

console.log('Último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x])

console.log('Última película', personaje['ultima-pelicula']);

// Más detalles
delete personaje.edad;

console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

/*
La variable "personaje" ha sido definida como const, por lo tanto, no es posible realizar asignación directa
pero sí es posible cambiar sus propiedades.
*/
//personaje = true;

console.log(personaje);

/*
"Object.freeze" congela o bloquea el objeto para evitar cambiar o añadir propiedades al objeto.
Sin embargo, las propiedades complejas sí son posibles modificarlas, por ejemplo, las propiedades
de la dirección que existe dentro de la variable "personaje", es decir "ubicación" y "zip".
*/
Object.freeze(personaje);
personaje.dinero = 1000000000; //No se reflejará el cambio
personaje.casado = false; //No se reflejará el cambio
personaje.direccion.ubicacion = 'Costa Rica'; //Sí se refleja el cambio
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });