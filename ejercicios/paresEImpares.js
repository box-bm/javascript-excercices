function ejercicioConWhile() {
  let totalImpares = 0;
  let totalPares = 0;

  let arregloPares = [];
  let arregloImpares = [];

  let numeroActual = 1;

  while (numeroActual <= 20) {
    let sinResiduo = numeroActual % 2 == 0;

    if (sinResiduo) {
      arregloPares.push(numeroActual);
      totalPares = totalPares + numeroActual;
    } else {
      arregloImpares.push(numeroActual);
      totalImpares = totalPares + numeroActual;
    }
    numeroActual++;
  }

  console.log({
    titulo: "Con while",
    pares: { lista: arregloPares, total: totalPares },
    impares: { lista: arregloImpares, total: totalImpares },
  });
}

function ejercicioConFor() {
  let totalImpares = 0;
  let totalPares = 0;

  let arregloPares = [];
  let arregloImpares = [];

  for (let numeroActual = 1; numeroActual <= 20; numeroActual++) {
    if (numeroActual % 2 === 0) {
      arregloPares.push(numeroActual);
      totalPares = totalPares + numeroActual;
    } else {
      arregloImpares.push(numeroActual);
      totalImpares = totalPares + numeroActual;
    }
  }

  console.log({
    titulo: "Con for",
    pares: { lista: arregloPares, total: totalPares },
    impares: { lista: arregloImpares, total: totalImpares },
  });
}

ejercicioConFor();
ejercicioConWhile();
