const hector = {
    nombre: 'Hector',
    edad: 37,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const christian = {
    nombre: 'Christian',
    edad: 31,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

//hector.imprimir();

//esto se debe crear con la palabra "new"
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 29);
maria.imprimir();
melissa.imprimir();