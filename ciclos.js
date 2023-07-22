// Ciclos
// Los ciclos son una forma de ejecutar codigo de forma repetitiva n cantidad de
// veces, estos estan basados en condiciones en la mayoria de casos para que puedan
// ser detenidos. De lo contrario seria un proceso infinito y realmente eso afectaria
// mucho al sistema deseado.

// Declaraciones de ciclos
// -----------------------------------------------------------------------------
// FOR
// for tiene muchas variaciones, cada una con el objetivo de ser repetitivo en sus
// acciones, en tal caso las variaciones no difieren en el objetivo.

// For (Basico)
// consta de una estructura basica
// keyword "for"*: es la forma de declara que es un ciclo a continuacion
// dentro del parentesis existen 3 parametros, separados puntos y comas.
// 1. Estado inicial de una variable, aqui se declara con que valor se inicia.
// 2. La condicion para finalizar o continuar el ciclo, generalmente son comparadores
//    y podras encontrarlo con variaciones, ya sea mayor, menor, mayor igual u otros.
// 3. La operacion modificadora de dicha variable
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

// ForEach
// este nos permite de una forma facil acceder a una lista de elementos (array),
// sin necesidad de manejar indices o incrementar numeros, este lo realiza por su cuenta.
// el punto negativo es que el indice como tal no existe en este tipo de for o una variable
// que incremente dicho valor.
// la ventaja es que antes del "in", se autoasigna al valor actual del ciclo ya con los valores
// dentro de la lista.
const arregloDeString = [
  "Brandon",
  "Zanahoria",
  "Uvas",
  "iPhone",
  "Cepillo de dientes",
];

for (const item of arregloDeString) {
  console.log(item);
}

// -----------------------------------------------------------------------------
// While
// es un ciclo que ejecuta codigo en su interior si su condicion inicial se cumple
// en este caso el while no funciona totalmente como el for basico.
// mientras la condicion del while es verdadera, se ejecutara el codigo n cantidad
// de veces hasta que de un false y posteriormente se salga
let contador = 0;

while (contador < 5) {
  console.log("El contador es: " + contador);
  contador++;
}

// Do While
// es el while en una presentacion distinta, en este caso el do while siempre será
// ejecutado con el fin de que ejecute dicha instruccion 1 o mas veces.
// el bloque de repeticion esta declarado a partir de la palabra do y el cierre en la
// declaracion del while
contador = 0;
do {
  console.log("El contador es: " + contador);
  contador++;
} while (contador < 5);
