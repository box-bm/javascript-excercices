const numberArray = [5, 7, 8, 1, 2, 5, 8, 4];
// Indice           [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Numero           [1, 2, 3, 4, 5, 6, 7, 8, 9];

const listaOrdenada = [];

for (const elemento of numberArray) {
}
// spread operator
Math.max(...[5, 7, 8]); // 8
Math.max(5, 7, 8); // 8

Math.min(...[5, 7, 8]); // 5
Math.min(5, 7, 8); // 5

// Resultado [1, 2, 4, 5, 5, 7, 8, 8]
console.log(listaOrdenada);
