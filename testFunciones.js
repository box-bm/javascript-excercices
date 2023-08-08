// function saludar(persona) {
//   console.log(`Hola ${persona.nombre} ${persona.apellido}`);
// }

const saludar = (persona) => {
  console.log(`Hola ${persona.nombre} ${persona.apellido}`);
};

saludar({ nombre: "Brandon", apellido: "Manzo" });
saludar({ nombre: "Andres" });
