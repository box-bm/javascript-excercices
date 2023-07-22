// Funciones
// Las funciones son fragmentos de codigos que ejecutan una tarea especifica
// podemos utilizarlas en multiples partes del codigo siempre y cuando se siga
// la estructura de nuestro proyecto y los parametros de una funcion.
//
// En Javascript puntualmente las funciones tambien podemos usarlas como metodos;

// Declaraciones de funciones
// -----------------------------------------------------------------------------
// funcion normal
// la forma tradicional de usar funciones
function nombreDeFuncion() {
  // aqui va el contenido
  console.log("funcion nomal");
}
function nombreDeFuncionRetornaAlgo() {
  // aqui va el contenido
  console.log("funcion nomal");
  return "Aqui devolvemos este contenido";
}

// funciones flecha
// tienen una caracteristica puntual y nos permite simplificar bastante codigo sin
// necesidad de colocar la palabra function. React utiliza estas constantemente.
const funcionFlecha = () => {
  return "Aqui devolvemos este contenido";
};

// tambien tienen de forma implicita el retorno de valor
const funcionFlechaRetornoImplicito = () => "Aqui devolvemos este contenido";

// funciones anonimas
// tiene la caracteristica de ambas funciones, flechas y normales, con la excepcion
// de que no se declara el nombre de dicha funcion.

// NOTA: para ejecutar las funciones depende del contexto, en este ejemplo se
// colocaron () para que se ejecute
() => {
  console.log("funcion flecha");
  return "Aqui devolvemos este contenido";
};

(() => "Aqui devolvemos este contenido")();

(function () {
  console.log("funcion flecha");
  return "Aqui devolvemos este contenido";
})();

// Partes de una funcion
// -----------------------------------------------------------------------------
// Keyword "function" (opcional): como palabra clave para declarar una funcion
// Nombre (opcional): para conocer el nombre de dicha funcion
// Parametros (opcionales): para enviar informacion dentro de la funcion
// Argumentos (opcionales/obligatorios): al momento de llamar a una funcion cada
// uno de los datos que se envian, son los argumentos
function nombreDeMiFuncion(parametro) {}

nombreDeMiFuncion("argumento");

// Ejemplo y practica!
// -----------------------------------------------------------------------------

var nombre = "Brandon";
var apellido = "Manzo";
var sobrenombre = "caja";

function ejemploFunciones(nombre, apellido, sobrenombre) {
  const nombreCompleto = nombre + apellido;

  console.log(
    "Mi nombre es " +
      nombreCompleto +
      ", pero prefiero que me digas " +
      sobrenombre +
      "."
  );
}

ejemploFunciones(nombre, apellido, sobrenombre);
