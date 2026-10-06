function contarParesEImpares() {
  const entrada = prompt("Insira 10 números separados por espaço: ");
  const numeros = entrada.trim().split(/\s+/).map(Number);

  let pares = 0;
  let impares = 0;

  for (const n of numeros) {
    if (n % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log(`Pares: ${pares}`);
  console.log(`Ímpares: ${impares}`);
}

contarParesEImpares();