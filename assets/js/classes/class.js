class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComida(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComida() {
        return console.log(`La comida favorita de ${this.nombre} es ${this.comida}`);
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman.');
console.log(ironman);

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman.');
spiderman.quienSoy();
//spiderman.miFrase();

spiderman.setComida = 'Pie de cereza de la tía May';
//spiderman.comida = 'Duende verde'; //Tiene sentido porque "comida" no es una propiedad privada.

//spiderman.nemesis = 'Duende Verde';//Js no arroja error por esta línea que está mal.

console.log(spiderman.getComida);

console.log(spiderman);