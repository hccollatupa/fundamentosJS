class Persona {
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Hoduras';

const hector = {
    nombre: 'Hector',
    apellido: 'Ccollatupa',
    pais: 'Perú'
};

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();

const persona2 = Persona.porObjeto(hector);
persona2.getInfo();

//const persona2 = new Persona(hector.nombre, hector.apellido, hector.pais);
//persona2.getInfo();