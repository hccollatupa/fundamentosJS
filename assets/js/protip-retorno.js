/*
function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
*/

/*
para indicar a javascript que lo que se pretente es retornar todos
los valores del objeto y no el cuerpo de la función, debe estar 
encerrado entre paréntesis "()".
*/
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Hector', 'Ccollatupa');

console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}
//console.log(imprimeArgumentos(10, true, false, 'Hector', 'hola'));

/*
el operador rest "..." indica a javascript que a partir  de todos 
los argumentos se creará un arreglo.
una consideración es que por haber utilizado un argumento con el 
operador "rest", no se puede enviar otro argumento.
*/
const imprimeArgumentos2 = (edad, ...args) => {
    //console.log({ edad, args });
    return args;
}
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Hector', 'hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Hector', 'Ccollatupa');
console.log({ nuevoApellido });

/*
aprovechando la desestructuración de objetos.
*/
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

/*
const imprimePropiedades = (personaje) => {
    console.log('nombre', personaje.nombre);
    console.log('codeName', personaje.codeName);
    console.log('vivo', personaje.vivo);
    console.log('edad', personaje.edad);
    console.log('trajes', personaje.trajes);
}
imprimePropiedades(tony);
*/

const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    //edad = edad || 0; //validación para en caso no exista la propiedad pero también se puede manejar con un valor por defecto.
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades2(tony);