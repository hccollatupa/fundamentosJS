const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true

console.warn("And")
console.log(true && true); //true
console.log(true && !false); //true

console.log('========');
/*
javascript cuando identifica que la primera instrucción
retorna falso, ya no invoca la segunda instrucción porque
sabe que el resultado siempre será falso.
*/
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('====&&====');
regresaTrue() && regresaFalse();
console.log('4 condiciones ', true && true && true && false); //false

console.warn("OR");
/*
para que regrese true cuando menos una condición debe retornar true
*/
console.log(true || false);
console.log(false || false);
/*
no ejecutó regresa false porque no era necesario por que ya devolvía 
verdader sin importar lo que vendría desupues.
*/
console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones ', true || true || true || false); //true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'mundo' && soyFalso && true; //todos deben ser true para que retorne true.
const a3 = soyFalso || 'Ya no soy falso'; //como la primera expresión devuelve falso, se ejecuta la segunda que retorna falso.
const a4 = soyFalso || soyUndefined || soyNull || 'Ya soy falso de nuevo' || true; //tanto "undefined" como "null" retornan falso y al retornar la variable "soyFalso" también un valor falso, devuelve el texto "Ya no soy falso de nuevo".
const a5 = soyFalso || soyUndefined || soyNull || 'Ya soy falso de nuevo' || regresaTrue(); //

console.log({ a1, a2, a3, a4, a5 });

if (regresaTrue() && regresaTrue() && (true && false && true)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}