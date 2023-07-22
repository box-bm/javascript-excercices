const numberArray = [1, 1, 1, 2, 2, 3, 3, 4, 5];
// Indice           [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Numero           [1, 2, 3, 4, 5, 6, 7, 8, 9];

const unicos = [];

numberArray.indexOf(5); // 8
numberArray.indexOf(10); // -1
numberArray.indexOf("Hola"); // -1

for (const elemento of numberArray) {
  // elemento = 2
  if (unicos.indexOf(elemento) === -1) {
    unicos.push(elemento);
  }
}

console.log(unicos);
