// Listas
// son un cojunto de datos del mismo tipo, estos se basan en la teoria de
// conjuntos y son una herramienta potente al momento de crear nuestros sistemas
// Las listas tambien tienen caracteristicas bastante marcadas las cuales nos
// permiten modificarlas, acceder a ellas y otras funciones interesantes.

// Pincipalmente cada lista tiene un indice, estos indices es la posicion de cada
// uno de los elementos, que nos permiten acceder a ellos.

// Declaracion de listas
// -----------------------------------------------------------------------------
var numeros = [1, 2, 3, 4, 5];
var strings = ["1", "2", "3", "4", "5"];
var booleans = [true, false, true, false];
var personas = [
  {
    nombre: "Brandon",
    edad: 23,
  },
  {
    nombre: "Andres",
    edad: 28,
  },
  {
    nombre: "Cristian",
    edad: 29,
  },
];

// Acceder a la informacion de las listas
// -----------------------------------------------------------------------------
console.log(numeros[0]); // accedemos a el primer elemento de la lista
console.log(strings); // imprimimos toda la lista

// Manipulacion de las listas y opiones adicionales
// -----------------------------------------------------------------------------
// PUSH
// Agrega uno o más elementos al final del arreglo
let arrPush = [1, 2, 3];
arrPush.push(4);
console.log(arrPush); // Output: [1, 2, 3, 4]

// POP
// Elimina y devuelve el último elemento del arreglo
let arrPop = [1, 2, 3, 4];
let poppedElement = arrPop.pop();
console.log(arrPop); // Output: [1, 2, 3]
console.log(poppedElement); // Output: 4

// SHIFT
// Elimina y devuelve el primer elemento del arreglo
let arrShift = [1, 2, 3];
let shiftedElement = arrShift.shift();
console.log(arrShift); // Output: [2, 3]
console.log(shiftedElement); // Output: 1

// UNSHIFT
// Agrega uno o más elementos al inicio del arreglo
let arrUnshift = [2, 3];
arrUnshift.unshift(1);
console.log(arrUnshift); // Output: [1, 2, 3]

// SPLICE
// Permite agregar o eliminar elementos de una posición específica en el arreglo
let arrSplice = [1, 2, 3, 4];
arrSplice.splice(1, 2); // Elimina 2 elementos a partir de la posición 1.
console.log(arrSplice); // Output: [1, 4]

arrSplice.splice(1, 10, 5, 6); // Agrega los elementos 5 y 6 a partir de la posición 1 sin eliminar nada.
console.log(arrSplice); // Output: [1, 5, 6, 4]

// SLICE
// Crea una copia superficial del arreglo seleccionando un rango de elementos
let arrSlice = [1, 2, 3, 4, 5];
let slicedArrSlice = arrSlice.slice(1, 4); // Crea una copia con los elementos 2, 3 y 4.
console.log(slicedArrSlice); // Output: [2, 3, 4]

// INDEX OF
// Devuelve el índice de la primera aparición de un elemento en el arreglo
let arrIndexOf = ["Ana", "Luis", "Beto"];
let index = arrIndexOf.indexOf("Luis");
console.log(index); // Output: 1

// LAST INDEX OF
// Devuelve el índice de la última aparición de un elemento en el arreglo
let arrLastIndexOf = ["Ana", "Luis", "Beto", "Luis"];
let lastIndex = arrLastIndexOf.lastIndexOf("Luis");
console.log(lastIndex); // Output: 3

// INCLUDES
// Verifica si un elemento está presente en el arreglo, devuelve true o false
let arrIncludes = [1, 2, 3];
let includesTwo = arrIncludes.includes(2);
console.log(includesTwo); // Output: true

let includesFour = arrIncludes.includes(4);
console.log(includesFour); // Output: false
