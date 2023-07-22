// Condicionales
// las condicionales nos permiten tomar desiciones al momento de realizar un sistema.
// estos siempre validan dos posibles datos para ejecutar el codigo que tienen en
// su interior. Ademas sirven para omitir procesos o bien obligar al usuario a usar
// o enviar datos a una funcion, por ejemplo...

var nombre = "Brandon";
var edad = 18;

// Declaraciones de condicionales
// -----------------------------------------------------------------------------
// If, else y else if
// If evalua un posible resultado y lo ejecuta como tal
// toda condicion if, siempre se debe declarar y posteriormente sus otras condiciones
if (edad >= 18) {
  console.log("Es mayor de edad");
}
// else if: es que en caso contrario, debe volver a validar otra condicion
// estas pueden ser repetidas n cantidad de veces.
else if (edad == 17) {
  console.log("Casi le llegas");
}
// else: en caso contrario de no ejecutarse nada de lo anterior else se ejecuta.
else {
  console.log("Aun no es mayor de edad");
}

// Switch Case
// es una forma corta de una condicional, realmente es evaluar cada caso (case)
// durante la ejecucion de codigo
const nivelDeProgramacion = "CEO";

switch (nivelDeProgramacion) {
  case "Junior":
    numero = 1;
    break;
  case "SemiSenior":
    console.log(
      "Puedes hacer sistemas y conoces de buenas practicas, igual necesitas revision de un adulto"
    );
    break;
  case "Senior":
    console.log(
      "Puedes hacer sistemas con buenas practicas, solo te supervisa el gerente y te toca mas chance"
    );
    break;
  case "Gerencial":
    console.log(
      "Al mismo nivel que los CEOS, el gobierno es el unico que te supervisa"
    );
    break;
  default:
    console.log("Solo tu y diosito saben lo que haces");
    break;
}

// Operador ternario
const esJunior = 5 > edad - 18 ? "Si" : "No";
console.log(esJunior);
