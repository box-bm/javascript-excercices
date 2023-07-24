const numberArray = [5, 7, 8, 1, 2, 5, 8, 4];
// Indice           [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Numero           [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sortArray(arr) {
  let sortedArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let j = 0;
    while (j < sortedArr.length && arr[i] > sortedArr[j]) {
      j++;
    }
    sortedArr.splice(j, 0, arr[i]);
  }
  return sortedArr;
}

let listaOrdenada = sortArray(numberArray);

// Resultado [1, 2, 4, 5, 5, 7, 8, 8]
console.log(listaOrdenada);
