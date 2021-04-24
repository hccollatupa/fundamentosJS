class Persona {
    static _conteoInstancia = 0;

    static get getConteoInstancia() {
        return Persona._conteoInstancia + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); //undefined
        console.log('Hola a todos, soy un método estático.');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteoInstancia++;
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
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman.');

//Persona._conteoInstancias = 2;

//console.log(ironman);
spiderman.quienSoy();
//spiderman.miFrase();

spiderman.setComida = 'Pie de cereza de la tía May';
//spiderman.comida = 'Duende verde'; //Tiene sentido porque "comida" no es una propiedad privada.

//spiderman.nemesis = 'Duende Verde';//Js no arroja error por esta línea que está mal.

//console.log(spiderman.getComida);

//console.log(spiderman);

console.log('Conteo estático', Persona._conteoInstancia);
console.log(Persona.getConteoInstancia);
Persona.mensaje();