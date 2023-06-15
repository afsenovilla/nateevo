//Crear una función que dado un array de 10 números, nos devuelva el array pero que tenga colocado los números primos en las primeras posiciones dejando el resto para el final.

function getPrimeNumbers(numbers) {
  const primeNumbers = [];
  for (const number of numbers) {
    if (isPrimeNumber(number)) {
      primeNumbers.push(number);
    }
  }
  return primeNumbers;
}

function isPrimeNumber(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = getPrimeNumbers(numbers);

const otherNumbers = numbers.filter(number => !primeNumbers.includes(number));
const allNumbers = primeNumbers.concat(otherNumbers);

console.log(allNumbers.join(' '));