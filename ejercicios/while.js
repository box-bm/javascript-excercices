let x = 1;

do {
  // Abre el primer do
  let i = 1;

  do {
    // Abre el segundo do
    // pinta el mensaje
    console.log(x + " X " + i + " = " + i * x);
    i++;
  } while (i < 10); // Cierra el segundo do

  x++;
} while (x < 5); // Cierra el primer do
