// ejercicio 2
// console.log([1, 2, 4, 8, 16, 32, 64]);
let numeros = [1, 2, 4];

for (let numero = 2; numero < 7; numero++) {
  numeros.push(numeros[2 - 1] * 2);
}

console.log(numeros);
