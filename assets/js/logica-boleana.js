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