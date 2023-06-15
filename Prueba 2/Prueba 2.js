//Escribe una función que calcule si un número dado es un número de Armstrong, aquel que es igual a la sume de la n-ésimas potencias de sus dígitos.
// Ejemplos:
// 371 = 3^3 + 7^3 + 1^3
// 8208 = 8^4 + 2^4 + 0^4 + 8^4


function isArmstrong(number) {
    let strNumber = String(number);
    let length = strNumber.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        let digit = strNumber[i];
        let cube = Math.pow(digit, length);
        sum += cube;
    }
    return number === sum;
}

  //Aquí va el número a comprobar:
let number = 153;

if (isArmstrong(number)) {
    console.log("Este número es un número de Armstrong.");
} else {
    console.log("Este número no es un número de Armstrong.")};