// crear las variables
// nombre, apellido, edad
const nombre = "Andres";
const apellido = "Yoc";
const edad = 28;

// crear funciones para validar tu informacion o mejorarla.
// 1. Crear una funcion que te devuelva tu nombre completo.
// 2. Crear una funcion que te indique ser mayor de edad.
// 3. Sacar tu inicial de tu nombre.

function nombreCompleto() {
  console.log(nombre + " " + apellido);
}

const mayorDeEdad = () => {
  if (edad >= 18) {
    console.log(`Eres mayor de edad, ${nombre}`);
  } else {
    console.log("No eres mayor de edad, " + nombre);
  }
};
mayorDeEdad();

const obtenerInicial = (texto) => {
  console.log(texto[1]);
};

obtenerInicial(nombre);
obtenerInicial(apellido);
