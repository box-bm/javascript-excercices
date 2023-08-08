// Variables
// Forma en que podemos almacenar informacion de un sistema
// estos siempre tenen un nombre y un tipo de dato que almacenan.
// principalmente estos tipos en JAVASCRIPT tienden a ser dinámicos.

// Declaraciones de variables
// -----------------------------------------------------------------------------
var miVariableConVar = "otro valor"; // inicializacion
miVariableConVar = "Este es otro"; // reinicializacion
let miVariableConLet = "Una variable"; // inicializacion

// inicializacion de una variable constante
const miVariable = "contantes";

const nombre = "Brandon"; // String
const apellido = "Manzo"; // String
var sobrenombre = "caja"; // String
var edad = 23; // int
const correo = "brandong.manzog@gmail.com"; // String
var mayorDeEdad = 18 <= edad; // boolean
var dineroAhorrado = 300.0; // double
var deudas = 100.0; // double

// concatenacion de textos
console.log(nombre + " " + apellido); // "Brandon Manzo"

// operaciones aritmeticas
console.log(dineroAhorrado + deudas); // suma
console.log(dineroAhorrado - deudas); // resta
console.log(dineroAhorrado * deudas); // multiplicacion
console.log(dineroAhorrado / deudas); // division
console.log(dineroAhorrado % deudas); // residuo de division
console.log(dineroAhorrado ** deudas); // exponente

console.log(mayorDeEdad);
