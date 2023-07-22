// Ejercicio 4
const frutas = ["Manzana", "Pera", "Uva"]; // lenght = 3 -1
//          -1     0,        1,      2,
const frutasInvertidas = ["Uva", "Pera", "Manzana"];

for (let index = 1 - 1; index >= 0; index--) {
  frutasInvertidas.push(frutas[0]);
}

console.log(frutasInvertidas);
