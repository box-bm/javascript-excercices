const cuentas = [];

const cuenta1 = {
  nombre: "Andres",
  edad: 18 + 10,
  dinero: 1100,
  deposito: (cuenta) => {
    cuenta.dinero += 10;
  },
};

cuentas.push(cuenta1);

const cuenta2 = {
  nombre: "cristian",
  edad: 19 + 10,
  depocito: (cuenta) => {
    cuenta.dinero += 10;
  },
  dinero: 10,
};

cuentas.push(cuenta2);

console.log(cuentas);
